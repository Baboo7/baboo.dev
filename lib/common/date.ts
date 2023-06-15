export { formatDate };

function formatDate(date: string | number | Date) {
  if (!date) {
    return '-';
  }

  return new Date(date).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
