import { Model, IConfigInfo, ComponentBuilder, getComponent } from '../utils'
import { renderModelComponent, Component, createModelComponent } from './core.jsx'

class VueModel extends Model {
    components: any = {}
    constructor(config: IConfigInfo, components: any) {
        const componentBuilder = new ComponentBuilder(
            {
                creator: createModelComponent,
                renderer: renderModelComponent,
            },
            ['Wrapper', 'Container', 'Header', 'Content', 'Footer']
        )
        componentBuilder.register({
            Component,
        })
        super(config, componentBuilder)
        this.components = Object.assign({}, components)
    }

    setComponents(components: any) {
        this.components = Object.assign({}, components)
    }

    getComponent(key: string) {
        return getComponent(this.components, key) || super.getComponent(key)
    }
}
export { createModelComponent, Component }
export default VueModel
