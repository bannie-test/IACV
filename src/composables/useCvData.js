import { reactive } from "vue";
import { viData } from "../data/cvDataVi";

let _id = 0;
export const uid = () => ++_id;

const cv = reactive({
  ...viData(uid),
  avatar:
    "https://plus.unsplash.com/premium_photo-1720253089384-6876aba379e7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
// Backwards-compatible: if data only provides `skills`, expose `skillGroups`
if (!cv.skillGroups) {
  const initialSkills = Array.isArray(cv.skills)
    ? cv.skills.map((s) => ({ ...s }))
    : [];
  cv.skillGroups = [
    {
      id: uid(),
      title: cv.sectionTitles?.skills || "Skills",
      defaultTitle: cv.sectionTitles?.skills || "Skills",
      layout: "grid",
      skills: initialSkills,
      defaultSkillItems: initialSkills.map((s) => ({
        label: s.label,
        value: s.value,
      })),
    },
  ];
} else {
  cv.skillGroups.forEach((group) => {
    if (!("layout" in group)) group.layout = "grid";
    if (!("defaultTitle" in group)) group.defaultTitle = group.title;
    if (!("defaultSkillItems" in group)) {
      group.defaultSkillItems = Array.isArray(group.skills)
        ? group.skills.map((s) => ({ label: s.label, value: s.value }))
        : [];
    }
  });
}

export function useCvData() {
  return cv;
}
