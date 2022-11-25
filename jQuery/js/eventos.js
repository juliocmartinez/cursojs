$(document).ready(()=>{

    //Mouseover y MouserOut
    let caja = $('#caja');
   
   /* caja.mouseover(function(){
        $(this).css("background","red")
    });

    caja.mouseout(function(){
        $(this).css("background","#ccc")
    })*/

    //Hover
    function cambiarRojo(){
        $(this).css("background","red")
    }
    function cambiarVerde(){
        $(this).css("background","green")
    }

    caja.hover(cambiarRojo, cambiarVerde)
    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white")
    })
    caja.dblclick(function(){
        $(this).css("background","pink")
                .css("color","green")
    })

    let nombre = $("#nombre");
    let datos =$("#datos");
    let sigueme= $("#sigueme")

   nombre.focus(function(){
        $(this).css("border","4px solid yellow")
    });

    nombre.blur(function(){
        $(this).css("border","1px solid #ccc")
        $("#datos").text(nombre.val()).show()
    })

    // Mousedown mouseup

    datos.mousedown(function(){
        $(this).css("border-color","gray")
    })

    datos.mouseup(function(){
        $(this).css("border-color","black")
    })

    $(document).mousemove(function(){
        $('body').css("cursor","none")
        sigueme.css("left", event.clientX)     
                .css("top", event.clientY)     

    })


    


















    //Focus y blur



})