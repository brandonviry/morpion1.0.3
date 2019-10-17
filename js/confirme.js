function reload(txt) {
  var RAM = confirm(txt);
  if (RAM == true) {
  	
     for (var i = 1; i <10; i++) {
     	$("[id='"+i+"']").attr("class","")
     } 
 }
}
