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
  cv.skillGroups = [
    {
      id: uid(),
      title: cv.sectionTitles?.skills || "Skills",
      skills: Array.isArray(cv.skills) ? cv.skills.map((s) => ({ ...s })) : [],
    },
  ];
}

export function useCvData() {
  return cv;
}
