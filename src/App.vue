<template>
  <div class="toolbar no-print">
    <div class="lang-toggle">
      <button :class="{ active: lang === 'vi' }" @click="setLang('vi')">VI</button>
      <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
    </div>
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
import { useLang } from './composables/useLang'

const { lang, setLang } = useLang()

function print() {
  window.print()
}
</script>

<style>
.lang-toggle {
  display: flex;
  border: 1px solid #2e74c0;
  border-radius: 4px;
  overflow: hidden;
}

.lang-toggle button {
  padding: 5px 14px;
  border: none;
  background: transparent;
  color: #2e74c0;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.lang-toggle button + button {
  border-left: 1px solid #2e74c0;
}

.lang-toggle button.active {
  background: #2e74c0;
  color: #fff;
}

.lang-toggle button:not(.active):hover {
  background: rgba(46, 116, 192, 0.1);
}
</style>
