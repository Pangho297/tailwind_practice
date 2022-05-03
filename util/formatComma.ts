const formatter = Intl.NumberFormat('ko-KR');

const formatComma = (value: number | null) => {
  if (value === null || value === 0) {
    return '-';
  }
  return formatter.format(value);
};

export default formatComma;
