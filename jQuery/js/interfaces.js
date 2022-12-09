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

    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake", 5000)
    })

    //Tooltip
    $(document).tooltip()

    //Dialog
$("#lanzar-popup").click(()=>{
    $("#popup").dialog()
})


//Datepicker
$("#calendario").datepicker()

//Tabs
$("#pestanas").tabs()


   

})  