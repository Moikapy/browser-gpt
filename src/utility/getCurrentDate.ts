export default function getCurrentDate() {
  const date = new Date();
  //
  const options: {
    month: string;
    day: string;
    year: string;
  } = {month: 'short', day: '2-digit', year: 'numeric'};
  //
  const formattedDate = date.toLocaleDateString('en-US', options as any);
  //
  return formattedDate;
}
