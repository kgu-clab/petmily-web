import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import server from './server';

const MySwal = withReactContent(Swal);

export const Alert = (option) => {
  return MySwal.fire({
    ...option,
    showCancelButton: true,
    confirmButtonText: '확인',
    cancelButtonText: '취소',
  });
};

export const SuccessAlert = (option) => {
  return MySwal.fire({
    ...option,
    icon: 'success',
    confirmButtonText: '확인',
  });
};

export const InputAlert = async (option) => {
  return MySwal.fire({
    ...option,
    input: 'text',
    showCancelButton: true,
    confirmButtonText: '확인',
    cancelButtonText: '취소',
  }).then((result) => {
    if (result.value) {
      return result.value;
    }
  });
};
