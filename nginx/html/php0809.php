
<html>
    <head>
        <title>JS2</title>
        <script type="text/javascript" src="js/js0809.js" ></script> 
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/CssTongYong.css" type="text/css"/>   
    </head>
    
    <body>
        <button onclick="click1()">click1</button>
        
        <div class="mouseOverOut"  onmouseover="this.innerHTML='good'"
            onmouseout="this.innerHTML='you have moved out'">
            move your mouse to here
        </div>

        <input type="text" id="inp1" onblur="alert('input cannot be empty')"  />
        
    </body>
    
</html>