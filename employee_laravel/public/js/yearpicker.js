let startYear2 = 1800;
let endYear2 = new Date().getFullYear();
for (i = endYear2; i > startYear2; i--)
{
	$('#yearpicker2').append($('<option />').val(i).html(i));
}