// JavaScript Document

$(function(){

	//------------------------------------------------kiem tra dang ki
  function kiemtra_hoten(txt,er){
	  var kt = /^[a-zA-Z ]{3,25}$/;
	  
	  if(!kt.test(txt.val()))
	  {
		  $(er).html("Dữ Liệu Không Hợp Lệ ! Vui Lòng Nhập Lại !");
		 
		  return false;
	  }
	  else
	  {
		  $(er).remove();
		  return true;
	  }
   }
   
   $("#txthoten").on("blur",function(){
	  kiemtra_hoten($("#txthoten"),$("#loi"));
   });
   
  $('input:radio[name=gioitinh]')[0].checked = true;  // mac dinh la nam
  
  /*$('input:radio[name=gioitinh]').attr('checked',false); // xoa het radiobutton dang chon
  });*/ 
  
   function kiemtraemail(txt,er){
	   var kt= /[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*/;
	   if(!kt.test(txt.val())){
		   $(er).html("Dữ Liệu Không Hợp Lệ ! Vui Lòng Nhập Lại !");
			return false;
	   }
	   else
	   {
		   $(er).remove();
		   return true;
	   }		   
   }
	
	$("#email").on("blur",function(){
		kiemtraemail($("#email"),$("#loi1"));
	});
 
	function kiemtrapass1(txt,er){
		var kt=/[a-zA-Z0-9]{6,}/;
		if(!kt.test(txt.val())){
			$(er).html("Mật Khẩu Phải Có Ít Nhất 6 Kí Tự !");
			return false;
		}
		else
		{
			$(er).remove();
			return true;
		}
	}
	
	$("#pass1").on("blur",function(){
		kiemtrapass1($("#pass1"),$("#loi2"));
	});
	
	function kiemtrapass2(txt1,er){
		var p1 = $("#pass1").val();
		if( ($(txt1).val()) != p1 ){
			$(er).html("Phải Giống Ô Mật Khẩu !");
			return false;
		}
		else
		{		
			$(er).remove();
			return true;
		}
	}
	
	$("#pass2").on("blur",function(){
		kiemtrapass2($("#pass2"),$("#loi3"));	
	});
	
	$("#btndk").on("click",function(){
		var hoten = $("#txthoten").val();
		var email = $("#email").val();
		var pass1 = $("#pass1").val();
		var pass2 = $("#pass2").val();
		
		if(hoten==""){
			$("#loi").html("Họ Tên Không Được Trống !");
		}
		else if(email==""){
			$("#loi1").html("Email Không Được Trống !");
		}
		else if(pass1==""){
			$("#loi2").html("Password Không Được Trống");
		}
		else if(pass2==""){
			$("#loi3").html("Password Không Được Trống");
		}
		else
		{
			alert("Chức Năng Đăng Kí Đang Trong Thời Gian Bảo Trì ! Xin Lỗi Bạn Vì Sự Cố Này !");
		}
	});
   
   //------------------------------------kiem tra dang nhap
   function kiemtraemaildn(txt,er){
	   var kt= /[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*/;
	   if(!kt.test(txt.val())){
		   $(er).html("Dữ Liệu Không Hợp Lệ ! Vui Lòng Nhập Lại !");
			return false;
	   }
	   else
	   {
		   $(er).remove();
		   return true;
	   }		   
   }
	
	$("#emaildn").on("blur",function(){
		kiemtraemail($("#emaildn"),$("#loi11"));
	});
	
	function kiemtrapassdn(txt,er){
		var kt=/[a-zA-Z0-9]{6,}/;
		if(!kt.test(txt.val())){
			$(er).html("Mật Khẩu Phải Có Ít Nhất 6 Kí Tự !");
			return false;
		}
		else
		{
			$(er).remove();
			return true;
		}
	}
	
	$("#passdn").on("blur",function(){
		kiemtrapass1($("#passdn"),$("#loi12"));
	});
	
	$("#btndn").on("click",function(){
		
		var email = $("#emaildn").val();
		var pass = $("#passdn").val();
	
		if(email==""){
			$("#loi11").html("Email Không Được Trống !");
		}
		else if(pass==""){
			$("#loi12").html("Password Không Được Trống");
		}
		else
		{
			alert("Chức Năng Đăng Nhập Đang Trong Thời Qian Bảo Trì ! Xin Lỗi Bạn Vì Sự Cố Này !");
		}
	});
	/*-------------------------------mui tên đi lên----------------*/
		$(function() { $(window).scroll(function() {
			 if($(this).scrollTop()>200) {
				  $('#ScrollToTop').fadeIn()
			} else { 
				$('#ScrollToTop').fadeOut();
			}
		});
		$('#ScrollToTop').click(function(){
			$('html,body').animate({scrollTop:0},1000);return false})
		});
		
		/*---------------------------------------------------------------*/
});