import { useState } from 'react'

function useOpen(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => {
    setIsOpen(true);
  }
  const close = () => {
    setIsOpen(false)
  }

  return { isOpen, open, close }
}

export default useOpen