$(document).ready(function() {
    $.viewMap = {
        '' : $([]),
        'public' : $([]),
        'private' : $('#view1')
    };
    jQuery('select[name="privilege"]').on('change',function(){
        // hide all
        $.each($.viewMap, function() { this.hide(); });
        // show current
        $.viewMap[$(this).val()].show();
    }).change();
});