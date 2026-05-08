import { ref } from 'vue'
import { useCvData, uid } from './useCvData'
import { enData } from '../data/cvDataEn'
import { viData } from '../data/cvDataVi'

const lang = ref('vi')

export function useLang() {
  function setLang(newLang) {
    if (newLang === lang.value) return
    const cv = useCvData()
    const avatar = cv.avatar
    Object.assign(cv, newLang === 'vi' ? viData(uid) : enData(uid))
    cv.avatar = avatar
    lang.value = newLang
  }

  return { lang, setLang }
}
