<template>
  <button class="m-2 text-primary-500 bg-yellow-500">{{ background }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "@vue/composition-api";
import "tailwindcss/tailwind.css";
export default defineComponent({
  props: {
    background: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
  },
  setup() {
    const text = ref("yes");
    return {
      text,
    };
  },
});
</script>

<style lang="scss" scoped>
button {
  @apply p-2;
}
</style>
