import Vue, { withHooks, useCallback, useEffect, useState, useRef } from './extend'

export function useModelComponent(props) {
    const instance = useRef({})
    const [state, setState] = useState({
        value: '',
        visible: true,
        disabled: false,
        readonly: false,
    })
    instance.current.state = state
    instance.current.props = props
    instance.current.setState = useCallback((k, v) => {
        console.log('【low-code-builder】setState:', k, v)
        setState((state) => {
            return { ...state, [k]: v }
        })
    }, [])
    instance.current.getState = useCallback((k) => {
        const state = instance.current?.state
        const v = k === undefined ? state : state?.[k]
        console.log('【low-code-builder】getState:', k, v)
        return v
    }, [])
    useEffect(() => {
        const { props, state, ...inst } = instance.current
        props.model.setListener(inst)
        return () => {
            props.model.setListener(null)
        }
    }, [])
    return { state }
}

export function renderModelComponent(component, props, getChildren) {
    return withHooks(function (h, ...args) {
        const { state } = useModelComponent(props)
        let child = []
        if (typeof getChildren === 'function') {
            const c = getChildren()
            if (Array.isArray(c)) {
                child = c
            }
        } else if (Array.isArray(getChildren)) {
            child = getChildren
        }
        const children = child.map((r) => <r />)
        const attrs = { ...props, state, children }
        return <component props={attrs} state={state}></component>
    })
}

export function createModelComponent(name, opts) {
    return withHooks(
        function (h, props) {
            const { children } = props
            return <WithBasePropSlot props={props}>{children}</WithBasePropSlot>
        },
        { name }
    )
}
function withBasePropSlot(h, props) {
    const { state, visible = true } = props
    if (!visible || !state?.visible) {
        return null
    }
    const attributes = { ...props?.attributes, ...state?.attributes }
    const className = `${props?.id}${props?.className ? ` ${props?.className} ` : ''}${state?.className ? ` ${state?.className}` : ''}`
    const style = { ...props?.style, ...state?.style }

    // return (
    //     <div {...attributes} class={className} style={style} {...props}>
    //         {this.$slots.default}
    //     </div>
    // )
    return h(
        'div',
        {
            ...attributes,
            class: className,
            style,
            props,
        },
        this.$slots.default || []
    )
}
export const WithBasePropSlot = withHooks(withBasePropSlot)

function text(h, props) {
    const { component: str, ...extra } = props
    return <span props={extra}>{str}</span>
}
export const Text = withHooks(text)

function component(h, props) {
    const { component, ...extra } = props
    if (typeof component === 'string') {
        return <Text props={props} />
    }
    const c = withHooks(component)
    return <c props={extra} />
}
export const Component = withHooks(component)
