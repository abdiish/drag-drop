
interact('.resize-drag')
    .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            restrictEdges: {
            outer: 'parent',
            endOnly: true,
        },

        restrictSize: {
          min: { width: 100, height: 50 },
        },
        inertia: false,
    })

   .on('resizemove', function (event) {
    
        var wimg, himg;
    
        var target = event.target,
              x = (parseFloat(target.style.left) || 0),
              y = (parseFloat(target.style.top) || 0);
        
        wimg = target.style.width  = event.rect.width + 'px';
        himg = target.style.height = event.rect.height + 'px';
        
        x += event.deltaRect.left;
        y += event.deltaRect.top;
        
        target.style.left = x + "px";
        target.style.top  = y + "px";
        
        console.log('valor w:'+wimg+'|'+'Valor en h:'+himg);
    });

interact('.grid-snap')
    .draggable({
        inertia: false,
        restrict: {
          restriction: 'parent',
          endOnly: true,
          elementRect:{ top:0,left:0,bottom:1,right:1 }
        },/*
        snap: {
            targets: [
                interact.createSnapGrid({ x: 5, y: 5 })
            ],
            range: Infinity,
            relativePoints: [ { x: 0, y: 0 } ]
        },*/
        onmove: dragMoveListener
    });
function dragMoveListener(event) {
    /*
    var target = event.target,
         x = (parseInt(target.getAttribute('data-x')) || 0) + event.dx,
         y = (parseInt(target.getAttribute('data-y')) || 0) + event.dy;
    
        target.style.webkitTransform = 
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        console.log('Posición x: '+ x +'|'+'Posición y: '+y);
    */
    var target = event.target,
         x = (parseInt(target.style.left) || 0) + event.dx,
         y = (parseInt(target.style.top) || 0) + event.dy;
        
        target.style.left = x + "px";
        target.style.top  = y + "px";
        console.log('Posición x: '+ x +'|'+'Posición y: '+y);
}

////////////////////////////////////////////////////


function mostrarFormulario () {
    
    dummyCallApi(function(resp) {
        

        var html  = "";
			
			html += "<div id='div_rlogo' class='resize-drag grid-snap' style='position: absolute; border: 1px solid #DDD;" + 
                    "left:"    + resp.RLOGO.X + "px;" + 
                    "top:"     + resp.RLOGO.Y + "px;" + 
                    "width:"   + resp.RLOGO.W + "px;" + 
                    "height:"  + resp.RLOGO.H + "px;" + 
                    "display:" + (resp.RLOGO.O=="1"? "none" : "block") + ";" + 
                    "'><img src='" + resp.RLOGO.TEXTO + "' style='width:100%; height:100%;'/></div>";
        
            html += "<div id='div_rname' class='div-rname grid-snap' style='position:absolute; border:1px solid #DDD;" +
                    "left:"    + resp.RNAME.X + "px;" +
                    "top:"     + resp.RNAME.Y + "px;" +
                    "width:"   + resp.RNAME.W + "px;" +
                    "height:"  + resp.RNAME.H + "px;" +        
                    "'>" + resp.RNAME.TEXTO + "</div>";
        
            html += "<div id='div_raddr' class='div-direc grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.RADDR.X + "px;" +
                    "top:"     + resp.RADDR.Y + "px;" +
                    "width:"   + resp.RADDR.W + "px;" +
                    "height:"  + resp.RADDR.H + "px;" +        
                    "'>" + resp.RADDR.TEXTO + "</div>";
            
            html += "<div id='div_folio' class='div-folio grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.FOLIO.X + "px;" +
                    "top:"     + resp.FOLIO.Y + "px;" +
                    "width:"   + resp.FOLIO.W + "px;" +
                    "height:"  + resp.FOLIO.H + "px;" +        
                    "'>" + resp.FOLIO.TEXTO + "</div>";
            
            html += "<div id='div_fecha' class='div-fecha grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.FECHA.X + "px;" +
                    "top:"     + resp.FECHA.Y + "px;" +
                    "width:"   + resp.FECHA.W + "px;" +
                    "height:"  + resp.FECHA.H + "px;" +        
                    "'>" + resp.FECHA.TEXTO + "</div>";
        
            html += "<div id='div_segmt' class='div-segmt grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.SEGMT.X + "px;" +
                    "top:"     + resp.SEGMT.Y + "px;" +
                    "width:"   + resp.SEGMT.W + "px;" +
                    "height:"  + resp.SEGMT.H + "px;" +        
                    "'>" + resp.SEGMT.TEXTO + "</div>";
        
            html += "<div id='div_mname' class='div-residente grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.MNAME.X + "px;" +
                    "top:"     + resp.MNAME.Y + "px;" +
                    "width:"   + resp.MNAME.W + "px;" +
                    "height:"  + resp.MNAME.H + "px;" +        
                    "'>" + resp.MNAME.TEXTO + "</div>";
        
            html += "<div id='div_iextr' class='div-iextr grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.IEXTR.X + "px;" +
                    "top:"     + resp.IEXTR.Y + "px;" +
                    "width:"   + resp.IEXTR.W + "px;" +
                    "height:"  + resp.IEXTR.H + "px;" +        
                    "'>" + resp.IEXTR.TEXTO + "</div>";
        
            html += "<div id='div_descr' class='div-descr grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.DESCR.X + "px;" +
                    "top:"     + resp.DESCR.Y + "px;" +
                    "width:"   + resp.DESCR.W + "px;" +
                    "height:"  + resp.DESCR.H + "px;" +        
                    "'>" + resp.DESCR.TEXTO + "</div>";
        
            html += "<div id='div_monto' class='div-monto grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.MONTO.X + "px;" +
                    "top:"     + resp.MONTO.Y + "px;" +
                    "width:"   + resp.MONTO.W + "px;" +
                    "height:"  + resp.MONTO.H + "px;" +        
                    "'>" + resp.MONTO.TEXTO + "</div>";
        
            html += "<div id='div_letra' class='div-letra grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.LETRA.X + "px;" +
                    "top:"     + resp.LETRA.Y + "px;" +
                    "width:"   + resp.LETRA.W + "px;" +
                    "height:"  + resp.LETRA.H + "px;" +        
                    "'>" + resp.LETRA.TEXTO + "</div>";
        
            html += "<div id='div_firma' class='div-firma grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.FIRMA.X + "px;" +
                    "top:"     + resp.FIRMA.Y + "px;" +
                    "width:"   + resp.FIRMA.W + "px;" +
                    "height:"  + resp.FIRMA.H + "px;" +        
                    "'>" + resp.FIRMA.TEXTO + "</div>";
        
            html += "<div id='div_text1' class='div-text1 grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "left:"    + resp.TEXT1.X + "px;" +
                    "top:"     + resp.TEXT1.Y + "px;" +
                    "width:"   + resp.TEXT1.W + "px;" +
                    "height:"  + resp.TEXT1.H + "px;" +        
                    "'>" + resp.TEXT1.TEXTO + "</div>";
        
            html += "<div id='div_text2' class='div-text2 grid-snap' style='position:absolute; border:1px solid #DDD; " +
                    "text-align: right;" +
                    "left:"    + resp.TEXT2.X + "px;" +
                    "top:"     + resp.TEXT2.Y + "px;" +
                    "width:"   + resp.TEXT2.W + "px;" +
                    "height:"  + resp.TEXT2.H + "px;" +        
                    "'>" + resp.TEXT2.TEXTO + "</div>";
        
             html += "<div id='div_usarf' style='position:absolute; border-top:2px solid #111; " +
                    "left:"    + 30  + "px;" +
                    "top:"     + 110 + "px;" +
                    "width:"   + 550 + "px;" +
                    "height:"  + 0 + "px;" +        
                    "'></div>";
        
             html += "<div id='div_usarf' style='position:absolute; border-top:2px solid #111; " +
                    "left:"    + 30 +  "px;" +
                    "top:"     + 340 + "px;" +
                    "width:"   + 550 + "px;" +
                    "height:"  + 0 + "px;" +        
                    "'></div>";
        
            html += "<div id='div_usarf' style='position:absolute; border-top:2px solid #111; " +
                    "left:"    + 30 +  "px;" +
                    "top:"     + 340 + "px;" +
                    "width:"   + 550 + "px;" +
                    "height:"  + 0 + "px;" +        
                    "'></div>";

			
			html += "";
        
        let myForm = document.getElementById('myForm');
            myForm.innerHTML = html;
            myForm.style.display = "block";

	});

}

function dummyCallApi (callbackFunction) {
	
    var resp = {};
	resp.RLOGO = {};
	resp.RLOGO.X = 190;
	resp.RLOGO.Y = 10;
	resp.RLOGO.O = 0;
	resp.RLOGO.W = 200;
	resp.RLOGO.H = 75;
	resp.RLOGO.TEXTO = "https://abc.residentia.net/pub/logo.jpg";

    resp.RNAME = {};
    resp.RNAME.X = 280;
    resp.RNAME.Y = 90;
    resp.RNAME.O = 0;
    resp.RNAME.W = 100;
    resp.RNAME.H = 20;
    resp.RNAME.TEXTO = "RNAME";
    
    resp.RADDR = {};
    resp.RADDR.X = 210;
    resp.RADDR.Y = 125;
    resp.RADDR.O = 0;
    resp.RADDR.W = 100;
    resp.RADDR.H = 20;
    resp.RADDR.TEXTO = "RADDR";
    
    resp.FOLIO = {};
    resp.FOLIO.X = 450;
    resp.FOLIO.Y = 55;
    resp.FOLIO.O = 0;
    resp.FOLIO.W = 100;
    resp.FOLIO.H = 20;
    resp.FOLIO.TEXTO = "FOLIO";
    
    resp.FECHA = {};
    resp.FECHA.X = 450;
    resp.FECHA.Y = 90;
    resp.FECHA.O = 0;
    resp.FECHA.W = 100;
    resp.FECHA.H = 20;
    resp.FECHA.TEXTO = "FECHA";
    
    resp.SEGMT = {};
    resp.SEGMT.X = 50;
    resp.SEGMT.Y = 175;
    resp.SEGMT.O = 0;
    resp.SEGMT.W = 100;
    resp.SEGMT.H = 20;
    resp.SEGMT.TEXTO = "SEGMT";
    
    resp.MNAME = {};
    resp.MNAME.X = 50;
    resp.MNAME.Y = 140;
    resp.MNAME.O = 0;
    resp.MNAME.W = 100;
    resp.MNAME.H = 20;
    resp.MNAME.TEXTO = "MNAME";
    
    resp.IEXTR = {};
    resp.IEXTR.X = 50;
    resp.IEXTR.Y = 245;
    resp.IEXTR.O = 0;
    resp.IEXTR.W = 100;
    resp.IEXTR.H = 20;
    resp.IEXTR.TEXTO = "IEXTR";
    
    resp.DESCR = {};
    resp.DESCR.X = 50;
    resp.DESCR.Y = 210;
    resp.DESCR.O = 0;
    resp.DESCR.W = 100;
    resp.DESCR.H = 20;
    resp.DESCR.TEXTO = "DESCR";
    
    resp.MONTO = {};
    resp.MONTO.X = 565;
    resp.MONTO.Y = 180;
    resp.MONTO.O = 0;
    resp.MONTO.W = 100;
    resp.MONTO.H = 20;
    resp.MONTO.TEXTO = "MONTO";
    
    resp.LETRA = {};
    resp.LETRA.X = 50;
    resp.LETRA.Y = 320;
    resp.LETRA.O = 0;
    resp.LETRA.W = 100;
    resp.LETRA.H = 20;
    resp.LETRA.TEXTO = "LETRA";
    
    resp.FIRMA = {};
    resp.FIRMA.X = 60;
    resp.FIRMA.Y = 280;
    resp.FIRMA.O = 0;
    resp.FIRMA.W = 100;
    resp.FIRMA.H = 20;
    resp.FIRMA.TEXTO = "FIRMA";
    
    resp.TEXT1 = {};
    resp.TEXT1.X = 50;
    resp.TEXT1.Y = 360;
    resp.TEXT1.O = 0;
    resp.TEXT1.W = 100;
    resp.TEXT1.H = 20;
    resp.TEXT1.TEXTO = "TEXTO 1";
    
    resp.TEXT2 = {};
    resp.TEXT2.X = 565;
    resp.TEXT2.Y = 360;
    resp.TEXT2.O = 0;
    resp.TEXT2.W = 100;
    resp.TEXT2.H = 20;
    resp.TEXT2.TEXTO = "TEXTO 2";
	callbackFunction(resp);
}

function hideShow (cboxString) {
    var elem = document.getElementById(cboxString);
    if (elem.style.display == "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

function saveParams () {
    
    var sufijos = [ 
          "rlogo"
        , "rname"
        , "raddr"
        , "folio"
        , "fecha"
        , "mname"
        , "segmt"
        , "iextr"
        , "descr"
        , "monto"
        , "letra"
        , "firma"
        , "text1"
        , "text2"
        
    ];
    
    var stringBD = "";
    
    for (var i=0; i<sufijos.length; i++) {
        
        var sufijo = sufijos[i];
        var cbox = document.getElementById("cbox_" + sufijo);
        var div = document.getElementById("div_" + sufijo);
        var isChecked = cbox.checked==true? 1 : 0;
        var x = div.style.left.replace("px", "");
        var y = div.style.top.replace("px", "");
        var wh = "";
        
        if (sufijo == "rlogo") {
            wh = ";" + div.style.width.replace("px", "") + ";" + div.style.height.replace("px", "") + ";";
            
        } else if (sufijo == "text1") {
            wh = ";0;0;" + document.getElementById("input_text1").value;
            
        } else if (sufijo == "text2") {
            wh = ";0;0;" + document.getElementById("input_text2").value;
            
        }
        
        stringBD += sufijo.toUpperCase() + "~" + isChecked + ";" + x + ";" + y + wh + "|";
        
        //console.log(sufijo + ": " + isChecked + ", " + x + ", " + y + ", " + w + ", " + h);
        
    }
    
    console.log(stringBD);
    
}

/*#########TEXTO 1 Y 2###########*/
function duplicarTexto(inputId, divId) {
    document.getElementById(divId).innerHTML = 
        document.getElementById(inputId).value;
}
