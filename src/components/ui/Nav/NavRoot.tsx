import { getNav } from '@/repositories/nav/getNav'
import Link from 'next/link'

export const NavRoot = () => {
  const items = getNav()

  console.log(items)

  return (
    <nav className="flex items-center gap-7 [&>*:last-child]:after:content-none">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.slug}
          className="font-bold text-white transition-colors after:border-r-2 after:border-gray-800 after:pl-7 after:content-[''] hover:text-purple-300"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
