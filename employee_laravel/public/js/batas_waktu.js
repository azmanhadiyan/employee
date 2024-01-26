var thisdate=new Date();
var formatted_date=thisdate.getFullYear()+"-"+(thisdate.getMonth()+1)+"-"+thisdate.getDate();
var other_date=new Date('2020-10-18');
if (thisdate.toString()<=other_date.toString()){
	console.log('masih kemarin')
}
else{
	console.log('sudah sekarang')
}