<template>
  <component
    :is="tag"
    ref="el"
    contenteditable="true"
    :class="['ef', { 'ef--multiline': multiline }]"
    spellcheck="false"
    @input="onInput"
    @keydown="onKeydown"
    @focus="focused = true"
    @blur="focused = false"
  />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  tag: { type: String, default: 'span' },
  multiline: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

const el = ref(null)
const focused = ref(false)

onMounted(() => {
  el.value.innerText = props.modelValue
})

watch(
  () => props.modelValue,
  (val) => {
    if (!focused.value) {
      el.value.innerText = val
    }
  },
)

function onInput() {
  emit('update:modelValue', el.value.innerText)
}

function onKeydown(e) {
  if (e.key === 'Enter' && !props.multiline) {
    e.preventDefault()
    el.value.blur()
  }
}
</script>

<style scoped>
.ef {
  outline: none;
  border-radius: 2px;
  cursor: text;
  transition: background 0.12s, outline 0.12s;
  min-width: 4px;
  word-break: break-word;
}

.ef:hover {
  background: rgba(46, 116, 192, 0.07);
}

.ef:focus {
  background: rgba(46, 116, 192, 0.11);
  outline: 1px dashed rgba(46, 116, 192, 0.45);
}

.ef--multiline {
  display: block;
  white-space: pre-wrap;
}
</style>
