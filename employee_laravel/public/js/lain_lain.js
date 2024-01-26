jQuery(document).ready(function ()
{
	$.viewMap = {
		'' : $([]),
		'monitor' : $([]),
		'keyboard' : $([]),
		'mouse' : $([]),
		'processor' : $([]),
		'hardisk' : $([]),
		'ssd' : $([]),
		'pci_vga' : $([]),
		'pci_lan' : $([]),
		'pci_wifi' : $([]),
		'cpu' : $([]),
		'laptop' : $([]),
		'printer': $([]),
		'lain-lain' : $('lain-lain')
	};
	jQuery('select[name="item_name"]').on('change',function(){
		$.each($.viewMap, function() { this.hide(); });
		// show current
		$.viewMap[$(this).val()].show();
	}).change();
});
