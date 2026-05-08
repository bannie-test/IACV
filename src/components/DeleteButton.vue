<template>
  <button class="delete-btn" title="Delete" @click.stop="$emit('click')">×</button>
</template>

<script setup>
defineEmits(['click'])
</script>
