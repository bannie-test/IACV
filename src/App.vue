<template>
  <div class="toolbar no-print">
    <button class="toolbar-btn" @click="print">🖨 Print / Export PDF</button>
  </div>

  <div class="page">
    <CvHeader />
    <SummarySection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
  </div>
</template>

<script setup>
import CvHeader from './components/CvHeader.vue'
import SummarySection from './components/SummarySection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'

function print() {
  window.print()
}
</script>
