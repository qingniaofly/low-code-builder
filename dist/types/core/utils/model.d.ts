import { ComponentBuilder } from './component';
export declare class BaseModel {
    __data: any;
    constructor(id: string, props: {
        [key: string]: any;
    });
    getState(k: string): any;
    setState(k: string, v: any): void;
    setListener(component: {
        getState: (k: string) => any;
        setState: (k: string, v: any) => void;
    }): void;
    fireEvent(name: string, data: any): void;
    addEventListener(name: string, fn: any): void;
    removeEventListener(name: string, fn: any): void;
}
export declare class ViewModel extends BaseModel {
}
export interface IConfigInfo {
    id: string;
    props?: {
        style?: any;
        className?: string;
        [key: string]: any;
    };
    componentType: string;
    component?: any;
    children?: IConfigInfo[];
}
export declare class Model {
    modelMap: Map<string, ViewModel>;
    config: IConfigInfo;
    componentBuilder: ComponentBuilder;
    constructor(config: IConfigInfo, componentBuilder: ComponentBuilder);
    get(key: string): ViewModel;
    init(): any[];
    getComponent(key: string): any;
    install(configList?: IConfigInfo[]): any[];
}
