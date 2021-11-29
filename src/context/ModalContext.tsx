import { createContext, FC, useState } from 'react'

export interface iModalContext {
  isOpen: boolean
  modalContent: JSX.Element | undefined | any
  setModal?: any
}

const initialContext: iModalContext = {
  isOpen: false,
  modalContent: undefined,
}

export const ModalContext = createContext<iModalContext>(initialContext)

export const ModalProvider: FC = ({ children }) => {
  const [{ isOpen, modalContent }, setModal] = useState(initialContext)

  return (
    <ModalContext.Provider value={{ isOpen, modalContent, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}
