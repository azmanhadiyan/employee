jQuery.fn.dataTableExt.oApi.fnFilterClear  = function ( oSettings )
{
    var i, iLen;
 
    /* Remove global filter */
    oSettings.oPreviousSearch.sSearch = "";
 
    /* Remove the text of the global filter in the input boxes */
    if ( typeof oSettings.aanFeatures.f != 'undefined' )
    {
        var n = oSettings.aanFeatures.f;
        for ( i=0, iLen=n.length ; i<iLen ; i++ )
        {
            $('input', n[i]).val( '' );
        }
    }
 
    /* Remove the search text for the column filters - NOTE - if you have input boxes for these
     * filters, these will need to be reset
     */
    for ( i=0, iLen=oSettings.aoPreSearchCols.length ; i<iLen ; i++ )
    {
        oSettings.aoPreSearchCols[i].sSearch = "";
    }
 
    /* Redraw */
    oSettings.oApi._fnReDraw( oSettings );
};
    function filter_date_in(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_date_in").value);
        $('#employee_table').DataTable().column( 5 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_due_date(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_due_date").value);
        $('#employee_table').DataTable().column( 6 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filterGlobal () {
        $('#datatable').DataTable().search(
            $('#global_filter').val(),
            $('#global_regex').prop('checked'),
            $('#global_smart').prop('checked')
        ).draw();
    }
    function filterColumn ( i ) {
        $('#datatable').DataTable().column( i ).search(
            $('#col'+i+'_filter').val(),
            $('#col'+i+'_regex').prop('checked'),
            $('#col'+i+'_smart').prop('checked')
        ).draw();
    }
    function filter_request_date(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_request_date").value);
        $('#datatable').DataTable().column( 1 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }    
    function filter_start_date(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_start_date").value);
        console.log();
        $('#datatable').DataTable().column( 6 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_end_date(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_end_date").value);
        console.log();
        $('#datatable').DataTable().column( 7 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_request_time(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("request_time").value);
        $('#datatable').DataTable().column( 1 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_initial_time(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("initial_request_time").value);
        $('#datatable').DataTable().column( 5 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_end_time(i){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("end_time_request").value);
        $('#datatable').DataTable().column( 6 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_date_in_container(){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_tanggal_masuk_container").value);
        $('#datatable').DataTable().column( 4 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_date_in_container_2(){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_tanggal_masuk_container_2").value);
        $('#datatable').DataTable().column( 2 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_date_in_employee(){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_date_in_employee").value);
        $('#datatable').DataTable().column( 5 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_hak_cuti(){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_hak_cuti").value);
        $('#datatable').DataTable().column( 6 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function filter_date_visit(){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var thisdate=new Date(document.getElementById("filter_date_visit").value);
        $('#datatable').DataTable().column( 3 ).search(
            thisdate.toLocaleDateString("id-ID", options)
        ).draw();
    }
    function clear_filter(){
        $(document).ready(function() {
            var table = $('#datatable').dataTable();
            table.fnFilter('Win');
            table.fnFilter('Trident', 0);
            table.fnFilterClear();
            document.getElementById("filter_request_date").value='';
            document.getElementById("col2_filter").value='';
            document.getElementById("col3_filter").value='';
            document.getElementById("col4_filter").value='';
            document.getElementById("filter_start_date").value='';
            document.getElementById("filter_end_date").value='';
            document.getElementById("request_time").value='';
            document.getElementById("initial_request_time").value='';
            document.getElementById("end_time_request").value='';
            document.getElementById("filter_date_in").value='';
            document.getElementById("filter_due_date").value='';
            document.getElementById("filter_date_in_employee").value='';
            document.getElementById("filter_hak_cuti").value='';
            document.getElementById("filter_date_visit").value='';
            document.getElementById("filter_date_visit").value='';
        });
    }
    $(document).ready(function() {
        var table = $('#datatable').DataTable({
            dom: 'Bfrtip',
            buttons: [ {
                extend: 'excelHtml5',
                autoFilter: true,
                sheetName: 'Exported data'
            } ]
        });
        var table2 = $('#datatable2').DataTable({
            dom: 'Bfrtip',
            buttons: [ {
                extend: 'excelHtml5',
                autoFilter: true,
                sheetName: 'Exported data'
            } ]
        });
        $('input.global_filter').on( 'keyup click', function () {
            filterGlobal();
        });
        $('input.column_filter').on( 'keyup click', function () {
            filterColumn( $(this).parents('tr').attr('data-column') );
        });
        $('select.column_filter').on( 'keyup click', function () {
            filterColumn( $(this).parents('tr').attr('data-column') );
        });
        $('#filter_request_date').on('change', function() {
            filter_request_date( $(this).parents('tr').attr('data-column') );
        } );
        $('#filter_start_date').on('change', function() {
            filter_start_date( $(this).parents('tr').attr('data-column') );
        });
        $('#filter_end_date').on('change', function() {
            filter_end_date( $(this).parents('tr').attr('data-column') );
        } );
        $('#request_time').on('change', function() {
            filter_request_time( $(this).parents('tr').attr('data-column') );
        } );
        $('#initial_request_time').on('change', function() {
            filter_initial_time( $(this).parents('tr').attr('data-column') );
        } );
        $('#end_time_request').on('change', function() {
            filter_end_time( $(this).parents('tr').attr('data-column') );
        } );
        $('#filter_date_in').on('change', function() {
            filter_date_in( $(this).parents('tr').attr('data-column') );
        });
        $('#filter_due_date').on('change', function() {
            filter_due_date( $(this).parents('tr').attr('data-column') );
        });
        $('#filter_tanggal_masuk_container').on('change',function(){
            filter_date_in_container( $(this).parents('tr').attr('data-column'));
        });
        $('#filter_tanggal_masuk_container').on('change',function(){
            filter_date_in_container( $(this).parents('tr').attr('data-column'));
        });
        $('#filter_tanggal_masuk_container_2').on('change',function(){
            filter_date_in_container_2( $(this).parents('tr').attr('data-column'));
        });
        $('#filter_date_in_employee').on('change',function(){
            filter_date_in_employee( $(this).parents('tr').attr('data-column'));
        });
        $('#filter_hak_cuti').on('change',function(){
            filter_hak_cuti($(this).parents('tr').attr('data-column'));
        });
        $('#filter_date_visit').on('change',function(){
            filter_date_visit($(this).parents('tr').attr('data-column'));
        });
    });