<template>
  <div class="section">
    <EditableField
      v-model="cv.sectionTitles.projects"
      tag="div"
      class="section-title"
    />
    <div
      v-for="(project, index) in cv.projects"
      :key="project.id"
      draggable="true"
      @dragstart="dragStart(index)"
      @dragover.prevent
      @drop="drop(index)"
    >
      <ProjectCard
        :project="project"
        @delete="removeProject(project.id)"
        @duplicate="duplicateProject(project.id)"
      />
    </div>
    <AddButton label="Project" block @click="addProject" />
  </div>
</template>

<script setup>
import { useCvData, uid } from "../composables/useCvData";
import EditableField from "./EditableField.vue";
import ProjectCard from "./ProjectCard.vue";
import AddButton from "./AddButton.vue";
import { ref } from "vue";

const cv = useCvData();
const dragIndex = ref(null);

function addProject() {
  cv.projects.push({
    id: uid(),
    name: "Project Name",
    date: "Month Year – Month Year",
    team: "0",
    client: "Client",
    tools: "Tool, Tool",
    description: "Short project description.",
    respTitle: "Responsibilities",
    responsibilities: [{ id: uid(), text: "Describe your contribution here." }],
  });
}

function removeProject(id) {
  const idx = cv.projects.findIndex((p) => p.id === id);
  if (idx !== -1) cv.projects.splice(idx, 1);
}

function duplicateProject(id) {
  const idx = cv.projects.findIndex((p) => p.id === id);
  if (idx === -1) return;
  const src = cv.projects[idx];
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = uid();
  if (Array.isArray(copy.responsibilities)) {
    copy.responsibilities = copy.responsibilities.map((r) => ({
      id: uid(),
      text: r.text,
    }));
  }
  cv.projects.splice(idx + 1, 0, copy);
}

function dragStart(index) {
  dragIndex.value = index;
}

function drop(targetIndex) {
  if (dragIndex.value === null) return;
  if (dragIndex.value === targetIndex) {
    dragIndex.value = null;
    return;
  }
  const item = cv.projects.splice(dragIndex.value, 1)[0];
  const insertIndex =
    dragIndex.value < targetIndex ? targetIndex - 1 : targetIndex;
  cv.projects.splice(insertIndex, 0, item);
  dragIndex.value = null;
}
</script>
