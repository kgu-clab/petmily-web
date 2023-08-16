/**
 * 입력값을 한국 통화 기준에 맞게 포맷팅하여 반환하는 함수입니다.
 * @param {number} value - 포맷팅할 숫자 값
 * @returns {string} 한국 통화 기준에 맞게 포맷팅된 문자열
 */
export const formatCurrency = (value) => {
  // 숫자를 한국 통화 기준에 맞게 포맷팅
  const formattedValue = value.toLocaleString('ko-KR');
  return formattedValue;
};

/**
 * 전화번호를 형식에 맞게 변환하는 함수입니다.
 * @param {string} value - 변환할 전화번호 값
 * @returns {string} - 형식에 맞게 변환된 전화번호
 */
export const formatPhone = (value) =>
  value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
