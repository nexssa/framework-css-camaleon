


$(document).ready(function()
{
    // Menú horizontal (cerrar todos los menú abiertos al pulsar en otros elementos)
    $('a.n-dropdown-menu').blur(n_dropdown_menu_close);
    function n_dropdown_menu_close()
    {
        // Quitar las clases de enlaces que establecen los menús como activos (abierto)
        $('.n-nav  a.n-dropdown-menu, .n-nav-block  a.n-dropdown-menu').removeClass('n-menu-opened');
        // Ocultar los sub menúes.
        $('.n-nav ul.n-dropdown-menu, .n-nav-block ul.n-dropdown-menu').hide();
    }
    // Menú horizontal (cerrar al presionar la tecla ESC)
    // $(document).keyup(n_dropdown_menu_close_esc);
    // function n_dropdown_menu_close_esc(event)
    // {
    //     // if (event.which == 27) {
    //     //     n_dropdown_menu_close();
    //     // }
    // }
    // Menú horizontal (apertura y cierre de sub menú)
    $('a.n-dropdown-menu').click(n_dropdown_menu);
    function n_dropdown_menu(event)
    {
        event.preventDefault();
        n_dropdown_menu_close();
        var submenu = $(this).attr('data-target');
        if ($(this).hasClass('n-menu-opened'))
        {
            $(this).removeClass('n-menu-opened');
            $(submenu).hide();
        }
        else {
            $(this).addClass('n-menu-opened');
            $(submenu).show();
        }
    }

    $('.n-nav .n-nav-menu-toggle button').click(n_dropdown_mobile);
    $('.n-nav-block .n-nav-menu-toggle button').click(n_dropdown_mobile);
    function n_dropdown_mobile()
    {
        $(this).parent().parent().find('.n-nav-menu-container').toggle();
    }
});