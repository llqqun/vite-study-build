export function getFormattedDate(date) {
  return new Intl.DateTimeFormat('en-US').format(date);
}