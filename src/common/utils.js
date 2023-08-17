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
    ?.replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

export const formatUserType = (value) => {
  const typeMap = {
    INDIVIDUAL: '개인',
    PROFESSIONAL: '전문업체',
    SHELTER: '보호소',
  };

  return typeMap[value?.toUpperCase()] || '';
};

export const formatRequestType = (value) => {
  const typeMap = {
    WAIT: '대기',
    CANCEL: '거절',
    APPROVE: '승인',
  };

  return typeMap[value] || '';
};

/**
 * 주어진 JWT(JSON Web Token)를 해독하여 해당 토큰에 포함된 정보를 추출하는 함수입니다.
 *
 * @param {string} token JWT 형식의 인코딩된 토큰 문자열
 * @returns {Object|null} 토큰에 담긴 정보를 포함하는 객체 또는 토큰이 유효하지 않을 경우 null
 */
export const parseJwtPayload = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decodedPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );

    return JSON.parse(decodedPayload);
  } catch (error) {
    return null;
  }
};
