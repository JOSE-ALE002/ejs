$(document).ready(function () {


    // SOLUCION # 1 - HECHO CON AJAX

    /* $(document).on("click", ".delete-peet", function () {
        console.log("diste click");
        let element = $(this)[0].parentElement.parentElement.parentElement.children[0].innerText;
        console.log(element);

        $.ajax({
            type: "DELETE",
            url: `/mascotas/${element}`,
            data: {element},
            success: function (response) {
                console.log(response);
                window.location.href = "/mascotas"
            }
        });
    }); */


    // SOLUCION # 2 - HECHO CON FETCH
    $(document).on("click", ".delete-peet", async function () {
        const btnDelete = $(this)[0];        
        const id = btnDelete.dataset.id;

        try {
            const data = await fetch(`/mascotas/${id}`, {
                method: "delete",
            });
            const resp = await data.json();
            
            if (resp.estado) {
                window.location.href = "/mascotas"
            } else {
                console.log(resp);
            }            
        } catch (error) {
            console.log("Ha ocurrido un error", error);
        }       
    });
}); 