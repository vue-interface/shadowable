declare const _default: import("vue").DefineComponent<{
    /**
     * The drop shadow size.
     */
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * The shadow class prefix.
     */
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The shadow size.
     */
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * The shadow class prefix.
     */
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    shadowableClass(): {
        [x: string]: boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The drop shadow size.
     */
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * The shadow class prefix.
     */
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The shadow size.
     */
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * The shadow class prefix.
     */
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    shadow: string | boolean;
    dropShadow: string | boolean;
    dropShadowableClassPrefix: string;
    shadowableClassPrefix: string;
}>;
export default _default;
