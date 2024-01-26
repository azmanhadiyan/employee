jQuery(document).ready(function ()
{
    $.viewMap = {'' : $([]),
    'PC' : $('#pc'),
    'Monitor' : $('#monitor'),
    'CPU' : $('#cpu'),
    'NVR' : $('#NVR'),
    'Projector' : $('#Projector'),
    'Camera' : $('#camera'),
    'Switch' : $('#switch'),
    'Router' : $('#router'),
    'IP Phone' : $('#ip_phone'),
    'Telephone' : $('#telephone'),
    'Scanner' : $('#scanner'),
    'Laptop' : $('#laptop'),
    'Printer' : $('#printer'),
    'Tablet' : $('#tablet'),
    'EAC' : $('#eac'),
    'IDS' : $('#ids')
};
jQuery('select[name="it_asset_type"]').on('change',function(){
	    $.each($.viewMap, function() { this.hide(); });
	    // show current
	    $.viewMap[$(this).val()].show();
	}).change();
});
