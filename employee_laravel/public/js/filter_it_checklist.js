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
    function filterGlobal () {
        $('#datatable').DataTable().search(
            $('#global_filter').val(),
            $('#global_regex').prop('checked'),
            $('#global_smart').prop('checked')
        ).draw();
    }
    function filterColumn ( i ) {
        $('#datatable2').DataTable().column( i ).search(
            $('#col'+i+'_filter').val(),
            $('#col'+i+'_regex').prop('checked'),
            $('#col'+i+'_smart').prop('checked')
        ).draw();
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
    });
    