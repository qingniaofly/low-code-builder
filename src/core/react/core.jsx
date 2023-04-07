import React, { useRef, useCallback, useEffect, useState } from './extend'

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
        const { props } = instance.current
        props.model.setListener(instance.current)
        return () => {
            props.model.setListener(null)
        }
    }, [])
    return { state }
}

export function renderModelComponent(Component, props, callback) {
    const { state } = useModelComponent(props)
    return (
        <Component key={props.key} {...props} state={state}>
            {callback()}
        </Component>
    )
}

export function createModelComponent(name, opts) {
    return class extends React.Component {
        displayName = name
        constructor(props) {
            super(props)
        }
        componentDidMount() {}
        render() {
            const wrapper = opts?.wrapper
            const Wrapper = wrapper ? wrapper : React.Fragment
            return (
                <Wrapper {...(wrapper ? this.props : null)}>
                    <WithModelComponent {...this.props}>{this.props.children}</WithModelComponent>
                </Wrapper>
            )
        }
    }
}

export function WithModelComponent(props) {
    const { state, children, visible = true } = props
    if (!visible || !state?.visible) {
        return null
    }
    const attributes = { ...props.attributes, ...state.attributes }
    const className = `${props.id}${props.className ? ` ${props.className} ` : ''}${state.className ? ` ${state.className}` : ''}`
    const style = { ...props.style, ...state.style }
    return (
        <div {...attributes} className={className} style={style}>
            {children}
        </div>
    )
}

export function Component(props) {
    const render = useCallback((props) => {
        const { component: Component, ...extra } = props
        const type = typeof Component
        let c = null
        switch (type) {
            case 'string':
                c = Component
                break
            case 'function':
                c = <Component {...extra} />
                break
            case 'object':
                c = Component
                break
            default:
                c = <React.Fragment />
                break
        }
        return c
    }, [])
    return render(props)
}

export class ErrorBoundary extends React.Component {
    state = { hasError: false }
    constructor(props) {
        super(props)
    }

    componentDidCatch(error, errorInfo) {
        console.error('【low-code-builder】ErrorBoundary componentDidCatch', error, errorInfo)
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>【low-code-builder】Some Components went wrong. Please Open DevTools</h1>
        }
        return this.props.children
    }
}
