import { Separator } from "./c_object-assist"

/*
 * ======================================================== Boundary 1 =========
 *
 *	INTERFACE ALTERATIONS
 *
 * =============================================================================
 */

declare global {

    interface Object {

        /**
         * Checks whether the cascaded objects exits. 
         * Allows callbacks for absence and presence of the cascade
         * */
        sniff: (
            path: string | string[],
            absent_func?: (last_available_step: any) => any,
            available_func?: (last_available_step: any) => any
        ) => any;

        /**
         * Tries to create the given cascade within the object. 
         * Allows two callbacks for cascade being occupiend and 
         * available (meaning successful cascade creation)
         * */
        pave: (
            path: string | string[],
            occupied?: (existing: any) => any,
            pave_success?: () => {},
        ) => any;

        /**
         * Returns true if the object is empty
         * */
        is_empty: () => boolean;

        /**
         * Returns true if the object can access object protype methods
         * */
        is_Object: () => boolean;

        /**
         * Returns if the object is a function
         * */
        has_Function: (func_name: string) => boolean;
    }

}


Object.prototype.sniff = function(
    sniffing_path: string | string[],
    absent_func: (last_available_step: any) => any = () => false,
    present_func: (last_available_step: any) => any = () => true,
): any {

    const pave_path = Array.isArray(sniffing_path)
        ? sniffing_path
        : sniffing_path.split(Separator.Expression);
    let current_step = this;

    for (const next_step of pave_path) {
        if ((current_step as any)[next_step] !== undefined) {
            current_step = (current_step as any)[next_step];
        } else {
            return absent_func(current_step);
        }
    }
    return present_func(current_step);
};

Object.prototype.pave = function (
    pave_path: string | string[],
    path_occupied_call: (path_content: any) => any = () => { },
    path_available_call: () => any = () => { },
): any {

    const leading_steps = Array.isArray(pave_path)
        ? pave_path
        : pave_path.split(Separator.Expression);
    const last_step: string = leading_steps.pop() as string;
    let current_step = this;

    const pave_LastElem = (elem: any) => {

        if (elem[last_step] === undefined) {

            const avail_call_result = path_available_call();
            elem[last_step] = avail_call_result === undefined
                ? {}
                : avail_call_result;

            return true;

        } else {

            const path_occupied_res = path_occupied_call(elem[last_step]);
            elem[last_step] = path_occupied_res === undefined
                ? elem[last_step]
                : path_occupied_res;

            return false;
        }
    };

    if (leading_steps.length > 0) {
        return current_step.sniff(leading_steps,
            () => {
                for (const next_step of leading_steps) {

                    (current_step as any)[next_step] =
                        (current_step as any)[next_step] === undefined
                            ? {}
                            : (current_step as any)[next_step];

                    current_step = (current_step as any)[next_step];
                }
                return pave_LastElem(current_step);
            },
            (paved_leading_path) => {
                return pave_LastElem(paved_leading_path);
            },
        );
    } else {
        return pave_LastElem(current_step);
    }
};

Object.prototype.is_empty = function() {
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};

Object.prototype.is_Object = function() {
    return this === Object(this);
};

Object.prototype.has_Function = function(func_name: string): boolean {
    return typeof (this as any)[func_name] === "function";
};
