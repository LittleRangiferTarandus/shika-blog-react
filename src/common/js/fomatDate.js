export default function formatDate(date,style="") {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if(style==="mmdd")
    return [month, day].join("")
  else
    return [year, month, day].join('-');
}