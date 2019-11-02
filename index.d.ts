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