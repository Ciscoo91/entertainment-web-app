import { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode,
    extraClasses?: string
}

export default function Layout({children, extraClasses}: LayoutProps) {
  return (
    <div className={`w-11/12 ${extraClasses}`}>
        {children}
    </div>
  )
}
