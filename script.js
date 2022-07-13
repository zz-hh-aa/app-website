const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]');
// const overlay = document.getElementsByClassName(overlay)
const modal = document.querySelector(button.dataset.modalTarget)

// OPEN MODAL
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        openModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    // overlay.classList.add('active')
}

// CLOSE MODAL
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
    closeModal(modal)
    })
})

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
//     overlay.active.classList.remove('active')
}

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })
