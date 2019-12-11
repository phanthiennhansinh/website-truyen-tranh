// JavaScript Document

//====================================slide tiêu de 
$(document).ready(function(){
	
	var stt = 0;
	var star= 0;
	var end= 2;
	$("span.slide").each(function(){
		if($(this).is(':visible'))
		{
			stt = $(this).attr("stt");
		}
	});
   
   $("#next").click(function(){
	   if(stt == end){
		   stt= -1;
	   }
        next = ++stt;
		$("span.slide").hide();
		$("span.slide").eq(next).show();
   });
   $("#prev").click(function(){
	   if(stt == 0){
		   stt = end;
		   prev =stt++;
	   }
        prev = --stt;
		$("span.slide").hide();
		$("span.slide").eq(prev).show();
   });
   /*setInterval(function(){
	   $("#next").click();
   },4000);*/

 	 
});
//====================================slide tiêu de 1 
$(document).ready(function(){
	
	var stt = 0;
	var star= 0;
	var end= 2;
	$("span.slide1").each(function(){
		if($(this).is(':visible'))
		{
			stt = $(this).attr("stt");
		}
	});
   
   $("#next").click(function(){
	   if(stt == end){
		   stt= -1;
	   }
        next = ++stt;
		$("span.slide1").hide();
		$("span.slide1").eq(next).show();
   });
   $("#prev").click(function(){
	   if(stt == 0){
		   stt = end;
		   prev =stt++;
	   }
        prev = --stt;
		$("span.slide1").hide();
		$("span.slide1").eq(prev).show();
   });
   /*setInterval(function(){
	   $("#next").click();
   },4000);*/

 	 
});

