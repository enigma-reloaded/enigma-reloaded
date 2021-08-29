import {toast} from 'react-toastify';

export function feedbackError(message) {
  toast.error(message);
}