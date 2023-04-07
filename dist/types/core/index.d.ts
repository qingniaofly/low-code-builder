import { IConfigInfo, Model } from './utils/model';
declare class Builder {
    model: Model | any;
    constructor(model: any, config: IConfigInfo, components?: any);
    setComponents(components: any): void;
    registerComponent(obj: any, component: any): void;
    render(): any;
}
export default Builder;
