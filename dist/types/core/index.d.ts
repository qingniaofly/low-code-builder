import { IConfigInfo, Model } from './utils/model';
declare class Builder {
    model: Model | any;
    constructor(model: any, config: IConfigInfo, components?: any);
    updateConfig(config: IConfigInfo): void;
    setComponents(components: any): void;
    registerComponent(obj: any, component: any): void;
    render(config?: IConfigInfo): any;
}
export default Builder;
