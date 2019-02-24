$(function(){


    $(".main__produtos>div").hover(function(){

        $(".j_section").css("blackground-color","black");
 
        });


        $(".j_image").click(function(){
            
            $(".alert_zoom_image").css("display","none");
            $(".j_image").css("transform","scale(2)");
            $(".j_image").css("opacity","1");

        });

    });




