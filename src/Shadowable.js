export default {

    props: {

        /**
         * The drop shadow size.
         *
         * @property {Boolean|String}
         */
        dropShadow: [Boolean, String],
        
        /**
         * The shadow class prefix.
         *
         * @property {String}
         */
        dropShadowableClassPrefix: {
            type: String,
            default: 'drop-shadow'
        },

        /**
         * The shadow size.
         *
         * @property {Boolean|String}
         */
        shadow: [Boolean, String],
        
        /**
         * The shadow class prefix.
         *
         * @property {String}
         */
        shadowableClassPrefix: {
            type: String,
            default: 'shadow'
        }
    },

    computed: {

        shadowableClass() {
            const dropShadowClassName = this.dropShadow === true ? '' : (
                this.dropShadow && `-${this.dropShadow}`
            );

            const shadowClassName = this.shadow === true ? '' : (
                this.shadow && `-${this.shadow}`
            );

            return {
                [`${this.dropShadowableClassPrefix}${dropShadowClassName}`]: !!this.dropShadow,
                [`${this.shadowableClassPrefix}${shadowClassName}`]: !!this.shadow,
            };
        }

    }

};
