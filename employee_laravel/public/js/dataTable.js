
$(document).ready(function() {
  //focusin berfungsi ketika cursor berada di dalam textbox modal langsung aktif
  $(".pencarian").focusin(function() {
    $("#myModal").modal('show'); // ini fungsi untuk menampilkan modal
  });

  $('#example').DataTable();
  $('#table_3').Datatable(); // fungsi ini untuk memanggil datatable
});

// function in berfungsi untuk memindahkan data kolom yang di klik menuju text box
function masuk(txt, data1,data2,data3,data4,data5,data6) {
  document.getElementById('textbox').value = data1; 
  document.getElementById('textbox5').value = data2;
  document.getElementById('textbox3').value = data3;
  document.getElementById('textbox4').value = data4;
  document.getElementById('textbox5').value = data5;
  document.getElementById('textbox6').value = data6; // ini berfungsi mengisi value  yang ber id textbox
  $("#myModal").modal('hide'); // ini berfungsi untuk menyembunyikan modal
}
function filterDestructionDate ( i ) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var thisdate=new Date(document.getElementById("filter_destruction_date").value);
  $('#example').DataTable().column( 3 ).search(
    thisdate.toLocaleDateString("id-ID", options)
    ).draw();
}
$(document).ready(function() {
  $('input.global_filter').on( 'keyup click', function () {
    filterGlobal();
  });
  $('filtermaterialinput1').on('change',function(){
    var destruction=jQuery(this).val();
    $('#destruction').val(destruction);
    filterMaterialInput1( $(this).parents('tr').attr('data-column') );
  });
  $('#filter_destruction_date').on('change',function(){
  var destruction=jQuery(this).val();
  $('#destruction').val(destruction);
    filterDestructionDate( $(this).parents('tr').attr('data-column') );
  });
});