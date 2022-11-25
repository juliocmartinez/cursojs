$(document).ready(()=>{

    //Selectores de atributo
    let parrafo = $('p').css("cursor","pointer");
    parrafo.click(function(){
        let that = $(this)
        if(!that.hasClass("grande")){
            that.addClass("grande")
        }else{
            that.removeClass("grande")
        }
    })


    $('[title="Google"]').css("background", "#ccc")
    $('[title="Facebook"]').css("background", "blue")

    $('p, a').addClass("margin_superior")

    let busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);

})