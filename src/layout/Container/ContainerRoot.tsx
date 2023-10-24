import { HtmlHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ContainerRootProps = HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const ContainerRoot = ({ children, ...props }: ContainerRootProps) => {
  return (
    <div
      className={twMerge(
        'mx-auto flex w-full max-w-7xl items-center px-4',
        props.className,
      )}
    >
      {children}
    </div>
  )
}
