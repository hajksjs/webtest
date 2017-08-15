//================================//
//作业：利用onblur设置输入框为空的时候报警
if($("#inp1").val == null){
    $("#inp1").onblur="alert('input cannot be empty')";
}
//没成功onblur="alert('input cannot be empty')" 
//================================//

x=5+5;
document.write(x);
x=5+5;
document.write(x);
document.write("<br>");

for (i = 1; i < 10; i++)
{
  if (i == 5 || i == 6) continue;
  if (i == 8) break;
  document.write(i);
}
document.write("<br>");

var i=1;
while(i!=8)
{        
    document.write(i);
    i++;   
}
document.write("<br>");

function my_func(){
document.write(1);
}
my_func()
document.write("<br>");
function my_func(){
  document.write(2);
}
my_func()
document.write("<br>");

function click1()
{
    alert(111);
    //document.write("harry");
}
