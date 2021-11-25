// @Vendors
import React from 'react'

interface Props {
  readonly title: string
}

export const PublicLayout: React.FC<Props> = ({
  title = 'Not title assigned',
  children,
}) => {
  document.title = title
  return <main className="">{children}</main>
}
