import { ref } from "vue";
import { useCvData, uid } from "./useCvData";
import { enData } from "../data/cvDataEn";
import { viData } from "../data/cvDataVi";

const lang = ref("vi");

export function useLang() {
  function setLang(newLang) {
    if (newLang === lang.value) return;
    const cv = useCvData();
    const avatar = cv.avatar;
    const oldTitles =
      lang.value === "vi"
        ? viData(uid).sectionTitles
        : enData(uid).sectionTitles;
    const newTitles =
      newLang === "vi" ? viData(uid).sectionTitles : enData(uid).sectionTitles;
    Object.assign(cv, newLang === "vi" ? viData(uid) : enData(uid));
    cv.avatar = avatar;
    const oldSkills =
      lang.value === "vi" ? viData(uid).skills : enData(uid).skills;
    const newSkills =
      newLang === "vi" ? viData(uid).skills : enData(uid).skills;
    if (Array.isArray(cv.skillGroups)) {
      cv.skillGroups.forEach((group) => {
        if (group.title === oldTitles.skills) {
          group.title = newTitles.skills;
        }
        if (group.defaultTitle === oldTitles.skills) {
          group.defaultTitle = newTitles.skills;
        }
        if (Array.isArray(group.skills)) {
          group.skills.forEach((skill, index) => {
            const oldDefault =
              group.defaultSkillItems && group.defaultSkillItems[index]
                ? group.defaultSkillItems[index]
                : oldSkills[index];
            if (
              oldDefault &&
              skill.label === oldDefault.label &&
              skill.value === oldDefault.value &&
              newSkills[index]
            ) {
              skill.label = newSkills[index].label;
              skill.value = newSkills[index].value;
            }
          });
          group.defaultSkillItems = newSkills.map((s) => ({
            label: s.label,
            value: s.value,
          }));
        }
      });
    }
    lang.value = newLang;
  }

  return { lang, setLang };
}
