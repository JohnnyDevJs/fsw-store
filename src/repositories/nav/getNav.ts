import { NavProps } from '@/schemas/Nav/NavSchema'
import items from '@/data/nav.json'

export const getNav = () => {
  return items as NavProps[]
}
