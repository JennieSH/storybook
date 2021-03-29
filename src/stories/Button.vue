<template>
  <button
    class="m-2 text-primary-500"
    :class="[`btn--${buttonSize}`,rounded? 'rounded' : '']"
    :style="`backgroundColor:${background}`"
  >{{ title }}{{buttonSize}}</button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";
import { ButtonSize } from "./ButtonType";
import "tailwindcss/tailwind.css";

export default defineComponent({
  props: {
    background: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    size: {
      type: String as PropType<ButtonSize>,
      validator: (value: ButtonSize) =>
        Object.values(ButtonSize).indexOf(value) !== -1,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const buttonSize = computed(() => props.size || ButtonSize.SM);
    return { buttonSize };
  },
});
</script>

<style lang="scss" scoped>
button {
  @apply p-2;

  &.rounded {
    @apply rounded-full;
  }
}

.btn {
  &--sm {
    width: 200px;
  }
  &--md {
    width: 250px;
  }
  &--lg {
    width: 300px;
  }
}
</style>
