import React from 'react'
import { appName } from 'config/constants'

export const Copyright: React.FC = () => {
  return (
    <span className="block mx-auto my-4 px-4 text-center text-base text-black-light-400">
      {`© Copyright ${appName} 2021.  Diseñado por `}
      <a href="/" target="_blank">
        @ianisaacmdz
      </a>
    </span>
  )
}
