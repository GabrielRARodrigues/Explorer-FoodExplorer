import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const alerts = withReactContent(Swal)

export function Alert({ title, text }) {
  return alerts.fire({
    title,
    text,
    position: 'top',
    customClass: {
      popup: ['alerts', 'alert__container'],
      title: ['alerts__title', 'alert__title'],
      htmlContainer: ['alerts__text', 'alert__text'],
      actions: ['alerts__buttons-container', 'alert__buttons-container'],
      confirmButton: ['alerts__confirm-button', 'alert__confirm-button']
    }
  })
}

export function Error({ title, text }) {
  return alerts.fire({
    title,
    text,
    position: 'top',
    customClass: {
      popup: ['alerts', 'error__container'],
      title: ['alerts__title', 'error__title'],
      htmlContainer: ['alerts__text', 'error__text'],
      actions: ['alerts__buttons-container', 'error__buttons-container'],
      confirmButton: ['alerts__confirm-button', 'error__confirm-button']
    }
  })
}

export function Confirm({
  title,
  confirmButtonText = 'OK',
  text,
  cancelButtonText = 'Cancelar'
}) {
  return alerts.fire({
    title,
    text,
    position: 'top',
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      popup: ['alerts', 'confirm__container'],
      title: ['alerts__title', 'confirm__title'],
      htmlContainer: ['alerts__text', 'confirm__text'],
      actions: ['alerts__buttons-container', 'confirm__buttons-container'],
      confirmButton: ['alerts__confirm-button', 'confirm__confirm-button'],
      cancelButton: ['alerts__cancel-button', 'confirm__cancel-button']
    }
  })
}
