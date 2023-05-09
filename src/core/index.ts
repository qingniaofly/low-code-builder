import { IConfigInfo, Model } from './utils/model'

class Builder {
    model: Model | any
    constructor(model: any, config: IConfigInfo, components?: any) {
        this.model = new model(config, components)
    }

    updateConfig(config: IConfigInfo) {
        this.model.setConfig(config)
    }

    setComponents(components: any) {
        this.model?.setComponents?.(components)
    }

    registerComponent(obj: any, component: any) {
        this.model.componentBuilder.register(obj, component)
    }

    render(config?: IConfigInfo) {
        if (config) {
            this.updateConfig(config)
        }
        return this.model.init()
    }
}
export default Builder
