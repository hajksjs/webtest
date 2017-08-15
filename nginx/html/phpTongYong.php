<!doctype html>
<html>
    <head>
        <title>JSTongYong</title>
        <link type="text/css" rel="stylesheet" href="css/CssTongYong.css"/>
  
        <script type="text/javascript" src="js/jquery.js"></script>        
        <script type="text/javascript" src="js/js0814.js"></script>
       
    </head>
    
    <body>
        <p>ss</p>
            
        <div id="my_div1" name="">my_div1</div>
        <input type="text"/>
        <input type="text"/>

        <p>This is a paragraph.</p>
        <button class="btn1">Toggle</button>
        
        
        <div id="divattr" class="class_1"></div>
        <br/>
        <span>before:<label id="before"></label></span>
        <script>document.write(document.getElementById("divattr").getAttribute("class"));</script>
        
        <br/>
        <span>after:</span>
        
        <script>
            document.getElementById("divattr").setAttribute("class","class_2");
            document.write(document.getElementById("divattr").getAttribute("class"));</script>
        <br/>
        
       
        <br/>
        <div id="divattr2" class="class_1"></div>
        <br/>
        <span >first:</span>
        <span id="first"></span>
        <br/>
        <span >second:</span>
        <span id="second"></span>
        <br/>
        
        <br/>
        <button id="btn2" >change color</button>
        <br/>
        
        
        <div class="demo-parent">
            <div id="demo">        
            </div>
        </div>

        <script>            document.write(document.getElementById("demo").parentNode.getAttribute("class"));
        </script>
        <br/>
        
        <script>
            var mydiv = document.createElement("div");
            mydiv.style.height = "100px";
            mydiv.style.background = "red";
            document.getElementsByTagName("body")[0].appendChild(mydiv);
        </script>
        <br/>
        
        <div>
            <div id="div_red" style="background:#F00; height:100px"></div>
            <div id="div_blue" style="background:#00F; height:100px"></div>
        </div>
        <script>
        function remove_red(){
            var obj = document.getElementById("div_red");
            obj.parentNode.removeChild(obj);
            }
        </script>
        <button onclick="remove_red()">removes red div</button>
        <br/>
        
    </body>
    
</html>