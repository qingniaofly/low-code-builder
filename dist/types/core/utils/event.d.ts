export default class EventUtil {
    map: Map<any, any>;
    addListener(name: string, callback: any): void;
    fire(name: string, ...data: any[]): void;
    removeListener(name: string, callback: any): void;
    clear(): void;
}
