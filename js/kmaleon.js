var BaseURL = 'http://immsa.binarylemon.net/';
function Modal_Cerrar() { $("#cl-modal").fadeOut(); }

$(document).ready(function () {
    $('.Mensaje').click(Mensaje_Modal);
    $('#btnMenu').click(Menu);

    function Menu() {
        $('.k-nav-items').toggle('height');
    }

    function Mensaje_Modal() {
		    var msj = $(this).attr('data');
        Mostrar_Modal("Camaleon | Advertencia!", "Mensaje", "Aceptar", msj, "", "", "");
    }

    function Mostrar_Modal(Titulo, TipoModal, Opciones, Mensaje, AFormulario, Formulario, ID) {
        var btnAceptar  = '<input type="button" class="cl-btn btn-color-turquoise" value="Aceptar" onclick="Modal_Cerrar();" />';

        var Botones = "";
        switch (Opciones) {
            case "Aceptar": Botones = btnAceptar; break;
        }
        $("#cl-modal .cl-footer").html(Botones);
        $("#cl-modal .cl-sending").hide();
        $("#cl-modal .cl-body p").html('').hide();

        $("#cl-modal .cl-head b").html(Titulo);
        $("#cl-modal form").attr("action", AFormulario);
        //Mostrar el mensaje o solicitar formulario
        if (TipoModal == "Mensaje") {
            $("#cl-modal .cl-body").html(Mensaje).slideDown();
        } else {
            $.ajax({
                type: "POST",
                url: BaseURL + Formulario,
                dataType: "html",
                data: { id_registro: ID },
                beforeSend: function() {
                    $('#cl-modal .bl-body').html('Cargando formulario...');
                },
                success: function(Formulario) {
                    $('#cl-modal .bl-body').html(Formulario).fadeIn();
                },
                error: function() {
                    $('#cl-modal .modal-header h4').html('Error');
                    $('#cl-modal form').attr("action", "#");
                    $('#cl-modal .bl-body').html('<div class="alert alert-danger" role="alert">No se pudo cargar el formulario. Por favor revise su conexi�n a Internet, intente m�s tarde o contacte a su administrador de sistemas.</div>').fadeIn();
                    $('#cl-modal .bl-footer').html(btnAceptar);
                }
            });
        }
        //Mostrar formulario
        $("#cl-modal").fadeIn();
    }
});
