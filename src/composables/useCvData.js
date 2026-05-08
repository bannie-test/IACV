import { reactive } from 'vue'
import { viData } from '../data/cvDataVi'

let _id = 0
export const uid = () => ++_id

const cv = reactive({
  ...viData(uid),
  avatar: 'https://i.imgur.com/1n9Xh7s.jpg',
})

export function useCvData() {
  return cv
}
