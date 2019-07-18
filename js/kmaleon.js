var BaseURL = 'http://immsa.binarylemon.net/';
function Modal_Cerrar() { $("#n-modal").fadeOut(); }

jQuery(function ($) {
    $(".n-menu-v-dropdown > a").click(function() 
    {
        $(".n-menu-v-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) 
        {
            $(".n-menu-v-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } 
        else 
        {
            $(".n-menu-v-dropdown").removeClass("active");
            $(this).next(".n-menu-v-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }
    });

    $("#n-menu-v-close").click(function() {
        $(".n-menu-v-page-container").removeClass("n-toggled");
    });

    $("#n-menu-v-show").click(function() {
        $(".n-menu-v-page-container").addClass("n-toggled");
    });
});

$(document).ready(function () {
    $('.Mensaje').click(Mensaje_Modal);
    $('#btnMenu').click(Menu);

    function Menu() {
        $('.n-nav-block-items').toggle('height');
    }

    function Mensaje_Modal() {
		    var msj = $(this).attr('data');
        Mostrar_Modal("Camaleon | Advertencia!", "Mensaje", "Aceptar", msj, "", "", "");
    }

    function Mostrar_Modal(Titulo, TipoModal, Opciones, Mensaje, AFormulario, Formulario, ID) {
        var btnAceptar  = '<input type="button" class="n-btn btn-color-turquoise" value="Aceptar" onclick="Modal_Cerrar();" />';

        var Botones = "";
        switch (Opciones) {
            case "Aceptar": Botones = btnAceptar; break;
        }
        $("#n-modal .n-modal-footer").html(Botones);
        $("#n-modal .cl-sending").hide();
        $("#n-modal .n-modal-body p").html('').hide();

        $("#n-modal .n-modal-header b").html(Titulo);
        $("#n-modal form").attr("action", AFormulario);
        //Mostrar el mensaje o solicitar formulario
        if (TipoModal == "Mensaje") {
            $("#n-modal .n-modal-body").html(Mensaje).slideDown();
        } else {
            $.ajax({
                type: "POST",
                url: BaseURL + Formulario,
                dataType: "html",
                data: { id_registro: ID },
                beforeSend: function() {
                    $('#n-modal .bl-body').html('Cargando formulario...');
                },
                success: function(Formulario) {
                    $('#n-modal .bl-body').html(Formulario).fadeIn();
                },
                error: function() {
                    $('#n-modal .modal-header h4').html('Error');
                    $('#n-modal form').attr("action", "#");
                    $('#n-modal .bl-body').html('<div class="alert alert-danger" role="alert">No se pudo cargar el formulario. Por favor revise su conexi�n a Internet, intente m�s tarde o contacte a su administrador de sistemas.</div>').fadeIn();
                    $('#n-modal .bl-footer').html(btnAceptar);
                }
            });
        }
        //Mostrar formulario
        $("#n-modal").fadeIn();
    }
    
    $('#n-modal .n-modal-content').draggable( { handle: ".n-modal-header", cursor: "move" });


}); // END - Document.Ready.Function

/*
Dropdown Menu
==============================================================================
*/
// Elementos del menú estándar (sin íconos o etiquetas dentro del <a>)
// $('.n-nav-submenu .n-dropdown-button').on('click', (event) => {
//         $(event.target).siblings('.n-dropdown-menu').toggleClass('n-menu-opened');
//         alert('a clicked');
//     }
// );
// // Elementos del menú de bloque (n-block) con íconos y etiquetas dentro del <a>
// $('.n-dropdown-button span').click(function(event){
//     $(this).parents('.n-nav-submenu').find('.n-dropdown-menu').toggleClass('n-menu-opened');
//     alert('span clicked');
// });
// // $('a.n-dropdown-menu').click(function()
// // {
// //     event.preventDefault();
// //     var submenu = $(this).attr('data-target');
// //     if (!$(this).hasClass('n-menu-opened'))
// //     {
// //         $(this).addClass('n-menu-opened');
// //         $(this).next('ul').addClass('n-menu-opened');
// //     }
// // });
// $(document).click(function(e) 
// {
//     $('.n-nav-submenu')
//         .not($('.n-nav-submenu').has($(e.target)))
//         .children('.n-dropdown-menu')
//         .removeClass('n-menu-opened');
// });
/*
END - Dropdown Menu
==============================================================================
*/
