$(()=>{
    $("#filtroVestidos").append(
        `<button id=soloVestidos  class="btnFiltros"> Ver Vestidos</button>`
    )
    $("#filtroZapatos").append(
        `<button id=soloZapatos class="btnFiltros"> Ver Zapatos</button>`
    )
    $("#filtroAccesorios").append(
        `<button id=soloAccesorios class="btnFiltros"> Ver Accesorios</button>`
    )
    $("#verTodos").append(
        `<button id=verTodos class="btnFiltros"> Ver Todos</button>`
    )

        $("#soloVestidos").click(()=>{
            $("#productosZapatos").fadeOut(500)
            $("#productosAccesorios").fadeOut(500)
            $("#productosVestidos").fadeIn("fast")
        })
   
        $("#soloZapatos").click(()=>{
            $("#productosVestidos").fadeOut(500)
            $("#productosAccesorios").fadeOut(500)
            $("#productosZapatos").fadeIn("fast")
        })

        
        $("#soloAccesorios").click(()=>{
            $("#productosZapatos").fadeOut(500)
            $("#productosVestidos").fadeOut(500)
            $("#productosAccesorios").fadeIn("fast")
        })

        $("#verTodos").click(()=>{
            $("#productosVestidos").fadeIn("fast")
            $("#productosZapatos").fadeIn("fast")
            $("#productosAccesorios").fadeIn("fast")
        })
})