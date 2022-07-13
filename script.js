const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[close-modal-button]')
// const overlay = document.getElementById('overlay')

// OPENING MODAL
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})


function openModal(modal) {
    //   if (modal == null) return
      modal.classList.add('active')
    //   overlay.classList.add('active')
    }

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// CLOSING MODAL
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function closeModal(modal) {
//   if (modal == null) return
  modal.classList.remove('active')
//   overlay.classList.remove('active')
}