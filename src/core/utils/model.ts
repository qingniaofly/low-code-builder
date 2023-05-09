import EventUtil from './event'
import { ComponentBuilder } from './component'

export class BaseModel {
    __data: any = {
        id: '',
        props: {},
        component: {},
        eventUtil: new EventUtil(),
    }

    constructor(id: string, props: { [key: string]: any }) {
        this.__data.id = id
        this.__data.props = props
    }

    getState(k: string) {
        const fn = this.__data?.component?.['getState']
        if (typeof fn === 'function') {
            return fn(k)
        }
    }

    setState(k: string, v: any) {
        const fn = this.__data.component?.['setState']
        if (typeof fn === 'function') {
            fn(k, v)
        }
    }

    setListener(component: { getState: (k: string) => any; setState: (k: string, v: any) => void }) {
        this.__data.component = component
    }

    fireEvent(name: string, data: any) {
        this.__data.eventUtil.fire(name, data)
    }

    addEventListener(name: string, fn: any) {
        this.__data.eventUtil.addListener(name, fn)
    }

    removeEventListener(name: string, fn: any) {
        this.__data.eventUtil.removeListener(name, fn)
    }
}

export class ViewModel extends BaseModel {}

export interface IConfigInfo {
    id: string
    props?: {
        style?: any
        className?: string
        [key: string]: any
    }
    componentType: string
    component?: any
    children?: IConfigInfo[]
}

export class Model {
    modelMap = new Map<string, ViewModel>()
    config: IConfigInfo
    componentBuilder: ComponentBuilder
    constructor(config: IConfigInfo, componentBuilder: ComponentBuilder) {
        this.setConfig(config)
        this.componentBuilder = componentBuilder
    }

    setConfig(config: IConfigInfo) {
        this.config = config
    }

    get(key: string) {
        return this.modelMap.get(key)
    }

    init() {
        if (typeof this.config !== 'object') {
            return
        }
        return this.install([this.config])
    }

    getComponent(key: string) {
        return this.componentBuilder.get(key)
    }

    install(configList?: IConfigInfo[]) {
        if (!Array.isArray(configList)) {
            return
        }
        return configList.map((config: IConfigInfo) => {
            const { id, props, componentType, children, component } = config || {}
            if (!componentType) {
                throw new Error(`componentType is required, config=${JSON.stringify(config)}`)
            }
            const model = this.modelMap.get(id) || new ViewModel(id, props as any)
            this.modelMap.set(id, model)
            const Component = this.getComponent(componentType)
            return this.componentBuilder.renderer(Component, { ...props, id, key: id, modelMap: this.modelMap, model, component }, () => {
                return this.install(children)
            })
        })
    }
}
