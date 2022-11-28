import { defineComponent as s } from "vue";
const t = s({
  props: {
    dropShadow: {
      type: [Boolean, String],
      default: void 0
    },
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: {
      type: [Boolean, String],
      default: void 0
    },
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const o = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, a = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${o}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${a}`]: !!this.shadow
      };
    }
  }
});
export {
  t as Shadowable
};
