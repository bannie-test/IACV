<template>
  <div class="section">
    <EditableField v-model="cv.sectionTitles.experience" tag="div" class="section-title" />
    <div v-for="job in cv.experience" :key="job.id" class="job">
      <EditableField v-model="job.title" class="job-title" />
      <EditableField v-model="job.date" class="job-date" />
      <DeleteButton @click="removeJob(job.id)" />
    </div>
    <AddButton label="Job" block @click="addJob" />
  </div>
</template>

<script setup>
import { useCvData, uid } from '../composables/useCvData'
import EditableField from './EditableField.vue'
import DeleteButton from './DeleteButton.vue'
import AddButton from './AddButton.vue'

const cv = useCvData()

function addJob() {
  cv.experience.push({ id: uid(), title: 'Job Title — Company', date: 'Month Year – Present' })
}

function removeJob(id) {
  const idx = cv.experience.findIndex((j) => j.id === id)
  if (idx !== -1) cv.experience.splice(idx, 1)
}
</script>
