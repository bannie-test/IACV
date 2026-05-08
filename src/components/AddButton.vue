<template>
  <button class="add-btn" :class="{ 'section-add-btn': block }" @click.stop="$emit('click')">
    + {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Add' },
  block: { type: Boolean, default: false },
})
defineEmits(['click'])
</script>
