$(document).ready( function () {
    //Mover elemento por la página
    $(".elemento").draggable()

    //Redimencionar elementos
    $(".elemento").resizable()
    // $(".listaSelected").selectable()
    
    $(".listaSelected").sortable()


    $("#elemento-movido").draggable()
    $("#area").droppable({
        drop: ()=>{
            console.log("Has soltado algo dentro del area");
        }

    })

})  