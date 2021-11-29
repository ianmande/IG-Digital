// Vendors
import ReactDOM from 'react-dom'

import { Modal } from '@mui/material'

// Context
import { useModal } from 'hooks/useModal'

export const AppModal = () => {
  const conatiner: HTMLElement | null = document.getElementById('root-modal')

  const { isOpen, modalClose, modalContent } = useModal()
  return ReactDOM.createPortal(
    <Modal
      open={isOpen}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex items-center py-10 px-4 "
    >
      <div className="w-full max-w-2xl bg-white m-auto rounded-2xl p-7 h-full overflow-auto">
        {modalContent}
      </div>
    </Modal>,
    conatiner || document.body
  )
}
