declare global {
    interface Object {
        sniff: (path: string | string[], absent_func?: (last_available_step: any) => any, available_func?: (last_available_step: any) => any) => any;
        pave: (path: string | string[], occupied?: () => any, pave_success?: () => {}) => any;
        is_empty: () => boolean;
        is_Object: () => boolean;
        has_Function: (func_name: string) => boolean;
    }
}

export declare function sniff_Object(this: any, sniffing_path: string | string[], absent_func?: (last_available_step: any) => any, present_func?: (last_available_step: any) => any): any;
export declare function pave_Object(this: any, pave_path: string | string[], path_occupied_call?: () => any, path_paved_call?: () => any): any;
export declare function is_ObjectEmpty(this: any): boolean;
export declare function is_ObjectObject(this: any): boolean;
export declare function has_ObjectFunction(this: any, func_name: string): boolean;
