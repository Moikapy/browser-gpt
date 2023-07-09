export default function getCurrentDate() {
  const date = new Date();
  //
  const options = {month: 'short', day: '2-digit', year: 'numeric'};
  //
  const formattedDate = date.toLocaleDateString('en-US', options);
  //
  return formattedDate;
}
