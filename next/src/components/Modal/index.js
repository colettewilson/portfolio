import React, { useState, useEffect, useRef } from 'react'

import { useModalStore } from '../../stores/modal'

import ModalContent from './ModalContent'

import styles from './modal.module.scss'

const Modal = () => {
  const container = useRef()
  const { modalDisplay, modalContent, closeModal } = useModalStore()

  const findActiveIndex = focusableElements => {
    let index = -1
    
    // If an element within the modal is already focused return it's index otherwise return -1
    focusableElements.forEach((el, i) => {
      if (el === document?.activeElement) index = i
    })

    return index
  }

  const handleEscape = evt => {
    if (!modalyDisplay) return
    if (evt.key === 'Escape') closeModal()
  }

  const handleTab = evt => {
    // Select all focusable elements
    const focusableElements = container.current.querySelectorAll(
      'a[href], button, textarea, input, select'
    )

    if (!evt.shiftKey) {
      let nextIndex = findActiveIndex(focusableElements)

      // If activeIndex + 1 larger than array length focus first element otherwise focus next element
      nextIndex + 1 === focusableElements.length
        ? (nextIndex = 0)
        : (nextIndex += 1)

      focusableElements[nextIndex].focus()

      return evt.preventDefault()
    }

    if (evt.shiftKey) {
      let prevIndex = findActiveIndex(focusableElements)

      // if activeIndex - 1 less than 0 focus last element otherwise focus previous element
      prevIndex - 1 < 0
        ? (prevIndex = focusableElements.length - 1)
        : (prevIndex -= 1)

      focusableElements[prevIndex].focus()

      return evt.preventDefault()
    }
  }

  // map of keyboard listeners
  const keyListenersMap = new Map([
    [27, handleEscape],
    [9, handleTab],
  ])

  const handleKeydown = evt => {
    // get the listener corresponding to the pressed key
    const listener = keyListenersMap.get(evt.keyCode)

    // call the listener if it exists
    return listener && listener(evt)
  }

  const handleClick = evt => {
    // Close modal on bg click
    if (evt) evt.preventDefault()
    closeModal()
  }

  // Close modal on 'esc' keypress
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  })

  useEffect(() => {
    // Cache current activeElement
    const { activeElement } = document

    return () => activeElement.focus()
  }, [])

  return (
    <>
      {modalDisplay && 
        <aside
          className={styles.modal}
          onClick={handleClick}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalInner}
            ref={container}
            onClick={evt => evt.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
            >
            </button>
            <ModalContent content={modalContent} />
          </div>
        </aside>
      }
    </>
  )
}

export default Modal