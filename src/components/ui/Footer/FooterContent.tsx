import copyright from '@/data/footer/copyright.json'
import { metadata } from '@/app/layout'

export const FooterContent = () => {
  const { year, text } = copyright
  const { title } = metadata

  return (
    <p className="text-center text-sm font-normal text-gray-300">
      {`Copyright © ${year} - ${title}. ${text}`}
    </p>
  )
}
