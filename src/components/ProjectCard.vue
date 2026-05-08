<template>
  <div class="project">
    <div class="project-header">
      <EditableField v-model="project.name" class="project-name" />
      <EditableField v-model="project.date" class="project-date" />
      <DeleteButton @click="$emit('delete')" />
    </div>

    <div class="project-meta">
      <span>Team:&nbsp;<EditableField v-model="project.team" /></span>
      <span class="project-meta-sep">&nbsp;|&nbsp;</span>
      <span>Client:&nbsp;<EditableField v-model="project.client" /></span>
      <span class="project-meta-sep">&nbsp;|&nbsp;</span>
      <span>Tools:&nbsp;<EditableField v-model="project.tools" /></span>
    </div>

    <EditableField v-model="project.description" tag="div" class="project-desc" multiline />

    <EditableField v-model="project.respTitle" tag="div" class="resp-title" />
    <ul class="resp-list">
      <li v-for="resp in project.responsibilities" :key="resp.id">
        <EditableField v-model="resp.text" multiline />
        <DeleteButton @click="removeResp(resp.id)" />
      </li>
    </ul>
    <AddButton label="Responsibility" @click="addResp" />
  </div>
</template>

<script setup>
import { uid } from '../composables/useCvData'
import EditableField from './EditableField.vue'
import DeleteButton from './DeleteButton.vue'
import AddButton from './AddButton.vue'

const props = defineProps({
  project: { type: Object, required: true },
})
defineEmits(['delete'])

function addResp() {
  props.project.responsibilities.push({ id: uid(), text: 'New responsibility.' })
}

function removeResp(id) {
  const idx = props.project.responsibilities.findIndex((r) => r.id === id)
  if (idx !== -1) props.project.responsibilities.splice(idx, 1)
}
</script>
