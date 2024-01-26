jQuery(document).ready(function ()
{
    $.viewMap = {'' : $([]),
    'User' : $('#User'),
    'Department' : $('#Department')
};
jQuery('select[name="user_type"]').on('change',function(){
    $.each($.viewMap, function() { this.hide(); });
    // show current
    $.viewMap[$(this).val()].show();
}).change();
});
