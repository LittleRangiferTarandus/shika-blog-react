export const getDateOfMonth = function(){
  //本月第一天
  function showFirstDay()
  {
      var Nowdate=new Date();
      var MonthFirstDay=new Date(Nowdate.getYear(),Nowdate.getMonth(),1).getDate();
      return MonthFirstDay;
  }
  //本月最后一天
  function showLastDay()
  {
      var Nowdate=new Date();
      var tmpDate=new Date(Nowdate.getYear(),Nowdate.getMonth()+1,1);
      var MonthLastDay=new Date(tmpDate-86400000).getDate();
      return MonthLastDay;
  }
  var last = showLastDay();
  var start = showFirstDay();
  var date = new Date();
  var a = new Array();
  for(var i=start;i<=last;i++){
      a[i-1] =  (date.getMonth()+1)+"-"+i;
  }
  var res = {
      firstDay: showFirstDay(),
      lastDay: showLastDay(),
      allDay: a
  }
  return res;
}