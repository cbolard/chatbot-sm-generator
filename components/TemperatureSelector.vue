<script setup lang="ts">
defineProps<{
  modelValue: number;
}>();
defineEmits<{
  (e: "update:modelValue", payload: number): void;
}>();
</script>
<template>
  <input
    :value="modelValue"
    @input="
      $emit(
        'update:modelValue',
        Number(($event.target as HTMLInputElement).value)
      )
    "
    max="1"
    min="0"
    step=".1"
    type="range"
    class="w-full range range-secondary"
  />
  Température: {{ modelValue }}
  <span class="font-bold" v-if="modelValue >= 0.5">
    - Plus aléatoire, créatif et risqué</span
  >
  <span class="font-bold" v-else> - Plus ciblé, déterministe et sûr</span>
</template>
