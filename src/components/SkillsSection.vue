<template>
  <span
    class="toolbar no-print lang-toggle"
    style="margin-bottom: 10px; width: fit-content"
  >
    <button :class="{ active: layout === 'grid' }" @click="setLayout('grid')">
      Grid
    </button>
    <button :class="{ active: layout === 'row' }" @click="setLayout('row')">
      Row
    </button>
  </span>

  <div>
    <div
      v-for="(group, gIndex) in cv.skillGroups"
      :key="group.id"
      class="section"
      draggable="true"
      @dragstart="dragStartGroup(gIndex)"
      @dragover.prevent
      @drop="dropGroup(gIndex)"
    >
      <div style="display: flex; align-items: center; gap: 8px">
        <EditableField v-model="group.title" tag="div" class="section-title" />
        <button
          class="dup-btn"
          title="Duplicate Section"
          @click.stop="duplicateGroup(group.id)"
        >
          ⎘
        </button>
        <DeleteButton @click="removeGroup(group.id)" />
      </div>

      <div class="skills-grid">
        <div
          v-for="(skill, sIndex) in group.skills"
          :key="skill.id"
          draggable="true"
          @dragstart="dragStartSkill(gIndex, sIndex)"
          @dragover.prevent
          @drop="dropSkill(gIndex, sIndex)"
        >
          <span v-if="layout === 'grid'" class="skill-row">
            <span class="skill-label"
              ><EditableField v-model="skill.label"
            /></span>
            <span class="skill-value"
              ><EditableField v-model="skill.value"
            /></span>
            <DeleteButton @click="removeSkill(group.id, skill.id)" />
            <button
              class="dup-btn"
              title="Duplicate"
              @click.stop="duplicateSkill(group.id, skill.id)"
            >
              ⎘
            </button>
          </span>
          <span v-else class="skill-row">
            <span><EditableField v-model="skill.value" /></span>
            <DeleteButton @click="removeSkill(group.id, skill.id)" />
            <button
              class="dup-btn"
              title="Duplicate"
              @click.stop="duplicateSkill(group.id, skill.id)"
            >
              ⎘
            </button>
          </span>
        </div>
      </div>

      <AddButton label="Skill" block @click="addSkill(group.id)" />
    </div>

    <AddButton
      label="Add Skill Group"
      class="section-add-btn"
      block
      @click="addGroup"
    />
  </div>
</template>

<script setup>
import { useCvData, uid } from "../composables/useCvData";
import EditableField from "./EditableField.vue";
import DeleteButton from "./DeleteButton.vue";
import AddButton from "./AddButton.vue";
import { ref } from "vue";

const cv = useCvData();
const layout = ref("grid");
const groupDragIndex = ref(null);
const skillDrag = ref(null); // { g: number, s: number }

function addGroup() {
  cv.skillGroups.push({
    id: uid(),
    title: cv.sectionTitles.skills || "Skills",
    skills: [],
  });
}

function removeGroup(id) {
  const idx = cv.skillGroups.findIndex((g) => g.id === id);
  if (idx !== -1) cv.skillGroups.splice(idx, 1);
}

function addSkill(groupId) {
  const g = cv.skillGroups.find((gr) => gr.id === groupId);
  if (!g) return;
  g.skills.push({
    id: uid(),
    label: "Skill Category",
    value: "Tool, Tool, Tool",
  });
}

function removeSkill(groupId, id) {
  const g = cv.skillGroups.find((gr) => gr.id === groupId);
  if (!g) return;
  const idx = g.skills.findIndex((s) => s.id === id);
  if (idx !== -1) g.skills.splice(idx, 1);
}

function duplicateSkill(groupId, id) {
  const g = cv.skillGroups.find((gr) => gr.id === groupId);
  if (!g) return;
  const idx = g.skills.findIndex((s) => s.id === id);
  if (idx === -1) return;
  const src = g.skills[idx];
  const copy = { ...JSON.parse(JSON.stringify(src)), id: uid() };
  g.skills.splice(idx + 1, 0, copy);
}

function duplicateGroup(id) {
  const idx = cv.skillGroups.findIndex((g) => g.id === id);
  if (idx === -1) return;
  const src = cv.skillGroups[idx];
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = uid();
  copy.skills = copy.skills.map((s) => ({ ...s, id: uid() }));
  cv.skillGroups.splice(idx + 1, 0, copy);
}

function setLayout(name) {
  layout.value = name;
}

function dragStartGroup(index) {
  groupDragIndex.value = index;
}

function dropGroup(targetIndex) {
  if (groupDragIndex.value === null) return;
  if (groupDragIndex.value === targetIndex) {
    groupDragIndex.value = null;
    return;
  }
  const item = cv.skillGroups.splice(groupDragIndex.value, 1)[0];
  const insertIndex =
    groupDragIndex.value < targetIndex ? targetIndex - 1 : targetIndex;
  cv.skillGroups.splice(insertIndex, 0, item);
  groupDragIndex.value = null;
}

function dragStartSkill(gIndex, sIndex) {
  skillDrag.value = { g: gIndex, s: sIndex };
}

function dropSkill(targetG, targetS) {
  if (!skillDrag.value) return;
  const { g: srcG, s: srcS } = skillDrag.value;
  // same position
  if (srcG === targetG && srcS === targetS) {
    skillDrag.value = null;
    return;
  }

  const srcGroup = cv.skillGroups[srcG];
  const item = srcGroup.skills.splice(srcS, 1)[0];

  const destGroup = cv.skillGroups[targetG];
  const insertIndex =
    srcG < targetG || (srcG === targetG && srcS < targetS)
      ? targetS - 1
      : targetS;
  destGroup.skills.splice(insertIndex, 0, item);
  skillDrag.value = null;
}
</script>
const src = cv.skillGroups[idx];
