import { IConfigInfo, Model } from './utils/model'
class Builder {
    model: Model | any
    constructor(model: any, config: IConfigInfo, components?: any) {
        this.model = new model(config, components)
    }

    setComponents(components: any) {
        this.model?.setComponents?.(components)
    }

    registerComponent(obj: any, component: any) {
        this.model.componentBuilder.register(obj, component)
    }

    render() {
        return this.model.init()
    }
}
export default Builder
