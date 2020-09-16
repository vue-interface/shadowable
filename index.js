import { prefix } from '@vue-interface/utils';

export default {

    props: {

        /**
         * The shadow size.
         *
         * @property String
         */
        shadow: {
            type: String,
            validate(value) {
                return [
                    'shadow-sm',
                    'shadow-md',
                    'shadow-lg'
                ].indexOf(prefix(value, this.shadowableClassPrefix)) !== -1;
            }
        },
        
        /**
         * The shadow class prefix.
         *
         * @property String
         */
        shadowableClassPrefix: {
            type: String,
            default: 'shadow'
        }
    },

    computed: {

        shadowableClass() {
            return prefix(this.shadow, this.shadowableClassPrefix);
        }

    }

};
