import Link from 'next/link'

export const BrandRoot = () => {
  return (
    <Link href="/" className="text-2xl font-semibold text-white">
      <span className="bg-gradient-to-r from-purple-600 to-purple-300 bg-clip-text text-transparent">
        JHS
      </span>{' '}
      Store
    </Link>
  )
}
