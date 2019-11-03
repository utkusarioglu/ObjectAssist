import {
    pave_Object,
    sniff_Object,
    is_ObjectEmpty,
    is_ObjectObject,
    has_ObjectFunction
} from "./extension_functions"

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
            occupied?: () => any,
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


Object.prototype.sniff = sniff_Object;
Object.prototype.pave = pave_Object;
Object.prototype.is_empty = is_ObjectEmpty;
Object.prototype.is_Object = is_ObjectObject;
Object.prototype.has_Function = has_ObjectFunction;