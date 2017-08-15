//=====================================//
//作业：
//参考“删除节点”的方式，在一个页面内实现：
//
//通过按钮改变页面颜色，通过按钮创建和插入节点等本节实验中的功能。
//=====================================//

var getready;
var changeflag=1;

$(document).ready(function(){
    getready = window.setInterval(setMydiv1,1000);
    
    my_init();    
    //document.write(document.getElementById("div1").getAttribute("class"));
});
                  
function setMydiv1(){
    document.getElementById("my_div1").style.background="yellow";
    //$('#my_div1').backgroundColor="blue";
    //$("#my_div1").style.backgroundColor="red";
}

function my_init(){
    $(".btn1").click(function(){
        $("#my_div1").slideToggle();
    }); 
    
    document.getElementsByTagName("input")[0].value="hello";
    
    //改变方框divattr2 颜色
    $("#btn2").click(function(){           

        if(1 == changeflag){           $("#divattr2").attr("class","class_1"); $("#first").html($("#divattr2").attr("class"));
            $("#second").html(" ");       
            
            changeflag = 2;
           }
        else{                                           $("#divattr2").attr("class","class_2"); 
            $("#first").html(" ");
               $("#second").html($("#divattr2").attr("class"));
               changeflag = 1;
           }
    }); 
           
    

}
