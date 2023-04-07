function addComponent(components: any, key: string, component: any) {
    if (typeof key === 'string' && component) {
        components[key] = component
    }
}

export function getComponent(components: any, key: string) {
    const lowerKey = key.toLocaleLowerCase()
    let component
    for (let k in components) {
        if (lowerKey === k.toLocaleLowerCase()) {
            component = components[k]
            break
        }
    }
    return component
}

export function registerComponent(components: any, obj: string | any, component?: any) {
    if (component) {
        addComponent(components, obj, component)
        return
    }
    if (Object.keys(obj).length > 0) {
        for (let key in obj) {
            addComponent(components, key, obj[key])
        }
        return
    }
}

export class ComponentBuilder {
    creator: any
    renderer: any
    components: any = {}
    constructor(config: { creator: any; renderer: any }, keyList: any[]) {
        this.creator = config.creator
        this.renderer = config.renderer
        this.create(keyList)
    }

    private create(keyList: string[]) {
        if (!Array.isArray(keyList)) {
            return
        }

        keyList.forEach((key) => {
            const c = this.creator(key)
            addComponent(this.components, key, c)
        })
    }

    get(key?: string) {
        if (key === undefined) {
            return this.components
        }
        return getComponent(this.components, key)
    }

    register(obj: string | any, component?: any) {
        registerComponent(this.components, obj, component)
    }
}
