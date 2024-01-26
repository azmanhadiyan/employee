    $('#to_department').on('change',function(e){
        console.log(e);
        var id_department=e.target.value;
        $.get('/json-request_type?id_department='+id_department,function(data){
        	console.log(data);
        	$('#request_type').empty();
        	$('#request_type').append('<option value="" selected hidden>Select Request</option>');
        	$.each(data, function(index, request_typeObj){
        		$('#request_type').append('<option value="'+request_typeObj.id_request+'">'+request_typeObj.request_name+'</option>');
        	})
        });
    });