import { prefix } from '@vue-interface/utils';

export default {

    props: {

        /**
         * The shadow size.
         *
         * @property {Boolean|String}
         */
        shadow: {
            type: [Boolean, String],
            validate(value) {
                return value === true || [
                    'shadow-sm',
                    'shadow-lg'
                ].indexOf(prefix(value, this.shadowableClassPrefix)) !== -1;
            }
        },
        
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
            return this.shadow === true
                ? this.shadowableClassPrefix
                : prefix(this.shadow, this.shadowableClassPrefix);
        }

    }

};
