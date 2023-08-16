import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
    confirmButtonText: '확인',
  });
};
