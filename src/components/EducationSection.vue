<template>
  <div class="section">
    <EditableField v-model="cv.sectionTitles.education" tag="div" class="section-title" />
    <div v-for="item in cv.education" :key="item.id" class="edu-item">
      <div class="edu-name">
        <EditableField v-model="item.name" />
        <DeleteButton @click="removeItem(item.id)" />
      </div>
      <EditableField v-model="item.detail" tag="div" class="edu-detail" />
    </div>
    <AddButton label="Certificate / Degree" block @click="addItem" />
  </div>
</template>

<script setup>
import { useCvData, uid } from '../composables/useCvData'
import EditableField from './EditableField.vue'
import DeleteButton from './DeleteButton.vue'
import AddButton from './AddButton.vue'

const cv = useCvData()

function addItem() {
  cv.education.push({ id: uid(), name: 'Certification / Degree', detail: 'Institution, Year' })
}

function removeItem(id) {
  const idx = cv.education.findIndex((e) => e.id === id)
  if (idx !== -1) cv.education.splice(idx, 1)
}
</script>
