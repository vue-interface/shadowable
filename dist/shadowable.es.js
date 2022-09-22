const s = {
  props: {
    dropShadow: [Boolean, String],
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: [Boolean, String],
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const a = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, o = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${a}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${o}`]: !!this.shadow
      };
    }
  }
};
export {
  s as Shadowable
};
