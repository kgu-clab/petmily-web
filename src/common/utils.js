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
