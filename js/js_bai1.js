// JavaScript Document
/*-------------------------------doi hinh -------------*/
          window.onload = function(){
            setTimeout("switch_Image()", 3000);
          }
          var current = 1;
          var num_image = 5;
          function switch_Image(){
              current++;
              document.images['image'].src ='../images/h' + current + '.jpg';
             if(current < num_image){
               setTimeout("switch_Image()", 3000);
             }else if(current == num_image){
               current = 0;
               setTimeout("switch_Image()", 3000);
             }
         }
/*-------------------------------------------------------------*/
