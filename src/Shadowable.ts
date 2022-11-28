import { defineComponent } from 'vue';

export default defineComponent({

    props: {

        /**
         * The drop shadow size.
         */
        dropShadow: {
            type: [Boolean, String],
            default: undefined
        },
        
        /**
         * The shadow class prefix.
         */
        dropShadowableClassPrefix: {
            type: String,
            default: 'drop-shadow'
        },

        /**
         * The shadow size.
         */
        shadow: {
            type: [Boolean, String],
            default: undefined
        },
        
        /**
         * The shadow class prefix.
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

});
