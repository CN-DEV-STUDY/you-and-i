export function formatDateToKorean(date: Date | null) {
  if (!date) {
    return "";
  }

  const year = date.getFullYear();
  console.log(year);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
}
