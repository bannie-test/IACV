<template>
  <div class="section">
    <EditableField v-model="cv.sectionTitles.projects" tag="div" class="section-title" />
    <ProjectCard
      v-for="project in cv.projects"
      :key="project.id"
      :project="project"
      @delete="removeProject(project.id)"
    />
    <AddButton label="Project" block @click="addProject" />
  </div>
</template>

<script setup>
import { useCvData, uid } from '../composables/useCvData'
import EditableField from './EditableField.vue'
import ProjectCard from './ProjectCard.vue'
import AddButton from './AddButton.vue'

const cv = useCvData()

function addProject() {
  cv.projects.push({
    id: uid(),
    name: 'Project Name',
    date: 'Month Year – Month Year',
    team: '0',
    client: 'Client',
    tools: 'Tool, Tool',
    description: 'Short project description.',
    respTitle: 'Responsibilities',
    responsibilities: [{ id: uid(), text: 'Describe your contribution here.' }],
  })
}

function removeProject(id) {
  const idx = cv.projects.findIndex((p) => p.id === id)
  if (idx !== -1) cv.projects.splice(idx, 1)
}
</script>
