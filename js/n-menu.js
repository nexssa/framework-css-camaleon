


$(document).ready(function()
{
    // Menú horizontal (apertura y cierre de sub menú)
    $('a.n-dropdown-menu').click(n_dropdown_menu);

    function n_dropdown_menu(event)
    {
        event.preventDefault();
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
});