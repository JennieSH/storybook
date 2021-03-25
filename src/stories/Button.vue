<template>
  <button class="m-2 text-primary-500 bg-yellow-500">text</button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "@vue/composition-api";
import "tailwindcss/tailwind.css";
export default defineComponent({
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
