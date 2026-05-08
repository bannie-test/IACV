<template>
  <div class="section summary">
    <EditableField v-model="cv.sectionTitles.summary" tag="div" class="section-title" />
    <EditableField v-model="cv.summary" tag="p" multiline />
  </div>
</template>

<script setup>
import { useCvData } from '../composables/useCvData'
import EditableField from './EditableField.vue'

const cv = useCvData()
</script>
