


$(document).ready(function()
{
    $(document).click(n_dropdown_menu_close);
    function n_dropdown_menu_close()
    {
        var isMenu = false;
        var isSubMenu = false;
        // console.log('Click (document)');
        // if ($(e).hasClass('.n-menu-opened'))
        // {
        //     console.log('clase');
        // }
        // else {
        //     console.log(e);
        // }
        // Quitar las clases de enlaces que establecen los menús como activos (abierto)
        // $('.n-nav  a.n-dropdown-menu, .n-nav-block  a.n-dropdown-menu').removeClass('n-menu-opened');
        // Ocultar los sub menúes.
        // $('.n-nav ul.n-dropdown-menu, .n-nav-block ul.n-dropdown-menu').hide();
    }
    // Menú horizontal (cerrar al presionar la tecla ESC)
    // $(document).keyup(n_dropdown_menu_close_esc);
    // function n_dropdown_menu_close_esc(event)
    // {
        // if (event.which == 27) {
        //     n_dropdown_menu_close();
        // }
    // }
    // $(':not(a.n-dropdown-menu)').click(n_dropdown_menu_close);
    // Menú horizontal (apertura y cierre de sub menú)
    $('a.n-dropdown-button').click(n_dropdown_menu);
    // $('a.n-dropdown-menu').focus(n_dropdown_menu); // Capturar el uso de TAB.
    function n_dropdown_menu(event)
    {
        event.preventDefault();
        var submenu = $(this).attr('data-target');
        if (!$(this).hasClass('n-menu-opened'))
        {
            // $(this).removeClass('n-menu-opened');
            // $(this).next('ul').removeClass('n-menu-opened');
            $(this).addClass('n-menu-opened');
            $(this).next('ul').addClass('n-menu-opened');
        }
        else {
            n_dropdown_menu_close();
            $(this).addClass('n-menu-opened');
            $(this).next('ul').addClass('n-menu-opened');
        }
    }

    $(document).click(function(e) 
    {
        $('.n-nav-submenu')
            .not($('.n-nav-submenu').has($(e.target)))
            .children('.n-dropdown-button')
            .removeClass('n-menu-opened');
    });

    // Mostrar y ocultar el menú mobil en resoluciones bajas a través del botón MENU
    $('.n-nav .n-nav-menu-toggle button').click(n_dropdown_mobile);
    $('.n-nav-block .n-nav-menu-toggle button').click(n_dropdown_mobile);
    function n_dropdown_mobile()
    {
        var menu_container = $(this).parent().parent().find('.n-nav-menu-container');
        if ($(menu_container).hasClass('n-nav-mobile-active'))
        {
            $(menu_container).removeClass('n-nav-mobile-active');
            $(this).removeClass('fa-window-close');
            $(this).addClass('fa-bars');
        }
        else {
            $(menu_container).addClass(('n-nav-mobile-active'));
            $(this).removeClass('fa-bars');
            $(this).addClass('fa-window-close');
        }
    }
});