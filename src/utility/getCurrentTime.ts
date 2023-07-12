export default function getCurrentTime(){
 const time = new Date().toLocaleString('en-US', {
   hour: 'numeric',
   minute: '2-digit',
   hour12: true,
   timeZone: 'America/New_York',
 });
  return time;
}