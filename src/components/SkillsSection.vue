<template>
  <span class="toolbar no-print lang-toggle" style="margin-bottom: 10px; width: fit-content">
    <button :class="{ active: layout === 'grid' }" @click="setLayout('grid')">Grid</button>
    <button :class="{ active: layout === 'row' }" @click="setLayout('row')">Row</button>
  </span>
  <div class="section">
    <EditableField v-model="cv.sectionTitles.skills" tag="div" class="section-title" />
    <div class="skills-grid">
      <div v-for="skill in cv.skills" :key="skill.id">
        <span v-if="layout === 'grid'" class="skill-row">
          <span class="skill-label"><EditableField v-model="skill.label" /></span>
          <span class="skill-value"><EditableField v-model="skill.value" /></span>
          <DeleteButton @click="removeSkill(skill.id)" />
        </span>
        <span v-else class="skill-row">
          <span><EditableField v-model="skill.value" /></span>
          <DeleteButton @click="removeSkill(skill.id)" />
        </span>
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
import {ref} from 'vue'

const cv = useCvData()
const layout = ref('grid')

function addSkill() {
  cv.skills.push({ id: uid(), label: 'Skill Category', value: 'Tool, Tool, Tool' })
}

function removeSkill(id) {
  const idx = cv.skills.findIndex((s) => s.id === id)
  if (idx !== -1) cv.skills.splice(idx, 1)
}
function setLayout(name) {
  layout.value = name;
}
</script>
