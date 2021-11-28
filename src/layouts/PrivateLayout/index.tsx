// @Vendors
import React from 'react'

// Components
import { Header } from './parts/Header'

interface Props {
  readonly title: string
}

export const PrivateLayout: React.FC<Props> = ({
  title = 'Not title assigned',
  children,
}) => {
  document.title = title
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  )
}
