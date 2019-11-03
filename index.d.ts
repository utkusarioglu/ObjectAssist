declare global {
    interface Object {
        sniff: (path: string | string[], absent_func?: (last_available_step: any) => any, available_func?: (last_available_step: any) => any) => any;
        pave: (path: string | string[], occupied?: () => any, pave_success?: () => {}) => any;
        is_empty: () => boolean;
        is_Object: () => boolean;
        has_Function: (func_name: string) => boolean;
    }
}