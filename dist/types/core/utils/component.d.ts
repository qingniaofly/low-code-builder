export declare function getComponent(components: any, key: string): any;
export declare function registerComponent(components: any, obj: string | any, component?: any): void;
export declare class ComponentBuilder {
    creator: any;
    renderer: any;
    components: any;
    constructor(config: {
        creator: any;
        renderer: any;
    }, keyList: any[]);
    private create;
    get(key?: string): any;
    register(obj: string | any, component?: any): void;
}
