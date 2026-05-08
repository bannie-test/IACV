<template>
  <div class="section">
    <EditableField v-model="cv.sectionTitles.skills" tag="div" class="section-title" />
    <div class="skills-grid">
      <div v-for="skill in cv.skills" :key="skill.id" class="skill-row">
        <span class="skill-label"><EditableField v-model="skill.label" /></span>
        <span class="skill-value"><EditableField v-model="skill.value" /></span>
        <DeleteButton @click="removeSkill(skill.id)" />
      </div>
    </div>
    <AddButton label="Skill" block @click="addSkill" />
  </div>
</template>

<script setup>
import { useCvData, uid } from '../composables/useCvData'
import EditableField from './EditableField.vue'
import DeleteButton from './DeleteButton.vue'
import AddButton from './AddButton.vue'

const cv = useCvData()

function addSkill() {
  cv.skills.push({ id: uid(), label: 'Skill Category', value: 'Tool, Tool, Tool' })
}

function removeSkill(id) {
  const idx = cv.skills.findIndex((s) => s.id === id)
  if (idx !== -1) cv.skills.splice(idx, 1)
}
</script>
