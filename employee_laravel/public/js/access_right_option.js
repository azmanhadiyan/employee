jQuery(document).ready(function ()
{
	$.viewMap = {
		'' : $([]),
		'Mobile Phone' : $('#mobile_phone'),
		'Fingerprint' : $('#fingerprint'),
		'FTP' : $('#ftp')
	};
	jQuery('select[name="option"]').on('change',function(){
		$.each($.viewMap, function() { this.hide(); });
		// show current
		$.viewMap[$(this).val()].show();
	}).change();
});
