import { ReactNode } from 'react'

type ButtonRootProps = {
  children: ReactNode
}

export const ButtonRoot = ({ children }: ButtonRootProps) => {
  return (
    <button className="h-10 rounded-lg bg-purple-600 px-4 font-bold uppercase text-white transition-colors hover:bg-purple-300">
      {children}
    </button>
  )
}
