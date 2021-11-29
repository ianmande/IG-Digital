// Vendors
import { iModalContext, ModalContext } from 'context/ModalContext'
import { useContext, useCallback } from 'react'

export const useModal = () => {
  const { isOpen, modalContent, setModal } = useContext(ModalContext)

  const modalClose = () =>
    setModal(({ modalContent }: iModalContext) => ({
      isOpen: false,
      modalContent,
    }))

  const modalOpen = useCallback(
    (modalContent: undefined | JSX.Element) => {
      setModal({ isOpen: true, modalContent })
    },
    [setModal]
  )

  return { isOpen, modalClose, modalContent, modalOpen }
}
