jQuery(document).ready(function ()
{
	$.viewMap = {
		'' : $([]),
		'R-001' : $('#leave'),
		'R-002' : $('#car_request'),
		'R-004' : $('#email_request'),
		'R-009' : $('#room_booking'),
		'R-010' : $('#email_access'),
		'R-011' : $('#ink_request'),
		'R-012' : $('#mobile_use'),
		'R-013' : $('#item_request'),
		'R-014' : $('#access_vpn'),
		'R-015' : $('#access_ftp')
	};
	jQuery('select[name="request_type"]').on('change',function(){
		$.each($.viewMap, function() { this.hide(); });
		// show current
		$.viewMap[$(this).val()].show();
	}).change();
});
