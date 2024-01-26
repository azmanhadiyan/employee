
          $(document).ready(function() {
  //focusin berfungsi ketika cursor berada di dalam textbox modal langsung aktif
  $(".cari_user").focusin(function() {
    $("#myModal").modal('show'); // ini fungsi untuk menampilkan modal
  });

  $('#example').DataTable();
  $('#example2').DataTable();
  $('#table_2').DataTable(); // fungsi ini untuk memanggil datatable
});

// function in berfungsi untuk memindahkan data kolom yang di klik menuju text box
function masuk(txt, data, data2,data3,data4, _data5, _data6) {
  document.getElementById('textbox').value = data;
  document.getElementById('textbox2').value = data2;
  document.getElementById('textbox3').value = data3;
  document.getElementById('textbox4').value = data4;
  document.getElementById('textbox5').value = _data5;
  document.getElementById('textbox6').value = _data6;
  $("#myModal").modal('hide');
   // ini berfungsi untuk menyembunyikan modal
}
function izin_masuk(txt, data, data2,data3,data4,data5,data6,data7){
  document.getElementById('textbox').value = data;
  document.getElementById('textbox2').value = data2;
  document.getElementById('textbox3').value = data3;
  document.getElementById('textbox4').value = data4;
  document.getElementById('textbox5').value = data5;
  $('#textbox8').text(data2);
  $('#textbox9').text(data3);
  $('#textbox10').text(data4);
  $('#textbox11').text(data5);
  $('#textbox12').val(data7);
  $('#textbox6').attr("src","/user_page/storage/images/"+data6);
  $("#myModal").modal('hide');
}
function checklist_asset_masuk(txt, data,data2){
  document.getElementById('textbox').value = data;
  document.getElementById('textbox2').value = data+' | '+data2;
  $("#myModal").modal('hide');
}
function asset_masuk(txt, data,data2){
  document.getElementById('textbox').value = data;
  document.getElementById('textbox2').value = data+' | '+data2;
  $("#myModal").modal('hide');
}
function checklist_masuk(txt, data,data2,data3,data4,data5){
  document.getElementById('textbox').value = data2;
  document.getElementById('textbox2').value = data3; 
  document.getElementById('textbox3').value = data4; 
  document.getElementById('textbox4').value = data5;
  var asset_type=data5;
  var id=data;

  if(asset_type=='Monitor'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Monitor</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="monitor2" id="monitor2" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="monitor2" id="monitor2" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"> <input type="text" id="monitor2_notes" class="form-control" name="monitor2_notes"></div></div><div class="row mx-1"><div class="col-3 border border-dark border-top-0 border-bottom-0 border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-top-0 border-bottom-0 border-dark border-left-0 border-right-0 pt-2"><input type=radio name="monitor2_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="monitor2_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-bottom-0 border-dark border-left-0 py-1"><input type="text" id="monitor2_fix" class="form-control" name="monitor2_fix"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Manager Analysis</label></div><div class="col-3 border border-top-0 border-dark border-left-0 border-right-0 pt-2"><input type=radio name="monitor_analysis" value="ya">&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="monitor_analysis" value="tidak" >&nbsp;No</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="monitor_analysis_notes" class="form-control" name="monitor_analysis_notes"></div></div>')
    $('input[name="monitor2"]').on('change',function(){
      var monitor2=jQuery(this).val();
      $('#this_monitor2').val(monitor2);
    });
    $('input[name="monitor2_notes"]').on('change',function(){
      var monitor2_notes=jQuery(this).val();
      $('#this_monitor2_notes').val(monitor2_notes);
    });
    $('input[name="monitor2_maintenance"]').on('change',function(){
      var monitor2_maintenance=jQuery(this).val();
      $('#this_monitor2_maintenance').val(monitor2_maintenance);
    });
    $('input[name="monitor2_fix"]').on('change',function(){
      var monitor2_fix=jQuery(this).val();
      $('#this_monitor2_fix').val(monitor2_fix);
    });
    $('input[name="monitor_analysis"]').on('change',function(){
      var monitor_analysis=jQuery(this).val();
      $('#this_monitor_analysis').val(monitor_analysis);
    });
    $('input[name="monitor_analysis_notes"]').on('change',function(){
      var monitor_analysis_notes=jQuery(this).val();
      $('#this_monitor_analysis_notes').val(monitor_analysis_notes);
    });
    $('#asset_checklist_2').empty().append('');
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='Switch'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Switch</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="switchies" id="switchies" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="switchies" id="switchies" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="switchies_notes" class="form-control" name="switchies_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-top-0 border-dark border-left-0 border-right-0 pt-2"><input type=radio name="switchies_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="switchies_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="switchies_fix" class="form-control" name="switchies_fix"></div></div>')
    $('input[name="switchies"]').on('change',function(){
      var switchies=jQuery(this).val();
      $('#this_switchies').val(switchies);
    });
    $('input[name="switchies_notes"]').on('change',function(){
      var switchies_notes=jQuery(this).val();
      $('#this_switchies_notes').val(switchies_notes);
    });
    $('input[name="switchies_maintenance"]').on('change',function(){
      var switchies_maintenance=jQuery(this).val();
      $('#this_switchies_maintenance').val(switchies_maintenance);
    });
    $('input[name="switchies_fix"]').on('change',function(){
      var switchies_fix=jQuery(this).val();
      $('#this_switchies_fix').val(switchies_fix);
    });
    $('#asset_checklist_2').empty().append('');
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='Scanner'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Scanner</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="scanner" id="scanner" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="scanner" id="scanner" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="scanner_notes" class="form-control" name="scanner_notes"></div></div><div class="row mx-1"><div class="col-3 border border-dark border-top-0 border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-top-0 border-dark border-left-0 border-right-0 pt-2"><input type=radio name="scanner_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="scanner_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="scanner_fix" class="form-control" name="scanner_fix"></div></div>')
    $('input[name="scanner"]').on('change',function(){
      var scanner=jQuery(this).val();
      $('#this_scanner').val(scanner);
    });
    $('input[name="scanner_notes"]').on('change',function(){
      var scanner_notes=jQuery(this).val();
      $('#this_scanner_notes').val(scanner_notes);
    });
    $('input[name="scanner_maintenance"]').on('change',function(){
      var scanner_maintenance=jQuery(this).val();
      $('#this_scanner_maintenance').val(scanner_maintenance);
    });
    $('input[name="scanner_fix"]').on('change',function(){
      var scanner_fix=jQuery(this).val();
      $('#this_scanner_fix').val(scanner_fix);
    });
    $('#asset_checklist_2').empty().append('');
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='Printer'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Printer</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="printer" id="printer" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="printer" id="printer" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="printer_notes" class="form-control" name="printer_notes"></div></div><div class="row mx-1"><div class="col-3 border border-dark border-top-0 border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-top-0 border-dark border-left-0 border-right-0 pt-2"><input type=radio name="printer_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="printer_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="printer_fix" class="form-control" name="printer_fix"></div></div>')
    $('input[name="printer"]').on('change',function(){
      var printer=jQuery(this).val();
      $('#this_printer').val(printer);
    });
    $('input[name="printer_notes"]').on('change',function(){
      var printer_notes=jQuery(this).val();
      $('#this_printer_notes').val(printer_notes);
    });
    $('input[name="printer_maintenance"]').on('change',function(){
      var printer_maintenance=jQuery(this).val();
      $('#this_printer_maintenance').val(printer_maintenance);
    });
    $('input[name="printer_fix"]').on('change',function(){
      var printer_fix=jQuery(this).val();
      $('#this_printer_fix').val(printer_fix);
    });
    $('#asset_checklist_2').empty().append('');
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='IP Phone'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">IP Phone</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="ip_phone" id="ip_phone" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="ip_phone" id="ip_phone" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="ip_phone_notes" class="form-control" name="ip_phone_notes"></div></div><div class="row mx-1"><div class="col-3 border border-dark border-top-0 border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-top-0 border-dark border-left-0 border-right-0 pt-2"><input type=radio name="ip_phone_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="ip_phone_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="ip_phone_fix" class="form-control" name="ip_phone_fix"></div></div>')
    $('input[name="ip_phone"]').on('change',function(){
      var ip_phone=jQuery(this).val();
      $('#this_ip_phone').val(ip_phone);
    });
    $('input[name="ip_phone_notes"]').on('change',function(){
      var ip_phone_notes=jQuery(this).val();
      $('#this_ip_phone_notes').val(ip_phone_notes);
    });
    $('input[name="ip_phone_maintenance"]').on('change',function(){
      var ip_phone_maintenance=jQuery(this).val();
      $('#this_ip_phone_maintenance').val(ip_phone_maintenance);
    });
    $('input[name="ip_phone_fix"]').on('change',function(){
      var ip_phone_fix=jQuery(this).val();
      $('#this_ip_phone_fix').val(ip_phone_fix);
    });
    $('#asset_checklist_2').empty().append('');
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='Router'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Router</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="router" id="router" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="router" id="router" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="router_notes" class="form-control" name="router_notes"></div></div><div class="row mx-1"><div class="col-3 border border-dark border-top-0 border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-top-0 border-dark border-left-0 border-right-0 pt-2"><input type=radio name="router_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="router_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-dark border-top-0 border-left-0 py-1"><input type="text" id="router_fix" class="form-control" name="router_fix"></div></div>')
    $('input[name="router"]').on('change',function(){
      var router=jQuery(this).val();
      $('#this_router').val(router);
    });
    $('input[name="router_notes"]').on('change',function(){
      var router_notes=jQuery(this).val();
      $('#this_router_notes').val(router_notes);
    });
    $('input[name="router_maintenance"]').on('change',function(){
      var router_maintenance=jQuery(this).val();
      $('#this_router_maintenance').val(router_maintenance);
    });
    $('input[name="router_fix"]').on('change',function(){
      var router_fix=jQuery(this).val();
      $('#this_router_fix').val(router_fix);
    });
    $('#asset_checklist_2').empty().append('');
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='Camera'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Camera</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="camera" id="camera" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="camera" id="camera" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="camera_notes" class="form-control" name="camera_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-left-0 border-top-0 border-right-0 pt-2"><input type=radio name="camera_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="camera_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-dark border-top-0 border-left-0 py-1"><input type="text" id="camera_fix" class="form-control" name="camera_fix"></div></div>')
    $('input[name="camera"]').on('change',function(){
      var camera=jQuery(this).val();
      $('#this_camera').val(camera);
    });
    $('input[name="camera_notes"]').on('change',function(){
      var camera_notes=jQuery(this).val();
      $('#this_camera_notes').val(camera_notes);
    });
    $('input[name="camera_maintenance"]').on('change',function(){
      var camera_maintenance=jQuery(this).val();
      $('#this_camera_maintenance').val(camera_maintenance);
    });
    $('input[name="camera_fix"]').on('change',function(){
      var camera_fix=jQuery(this).val();
      $('#this_camera_fix').val(camera_fix);
    });
    $('#asset_checklist_2').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Camera Position</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="camera_position" id="camera_position" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="camera_position" id="camera_position" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="camera_position_notes" class="form-control" name="camera_position_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-left-0 border-top-0 border-right-0 pt-2"><input type=radio name="camera_position_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="camera_position_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-dark border-top-0 border-left-0 py-1"><input type="text" id="camera_position_fix" class="form-control" name="camera_position_fix"></div></div>')
    $('input[name="camera_position"]').on('change',function(){
      var camera_position=jQuery(this).val();
      $('#this_camera_position').val(camera_position);
    });
    $('input[name="camera_position_notes"]').on('change',function(){
      var camera_position_notes=jQuery(this).val();
      $('#this_camera_position_notes').val(camera_position_notes);
    });
    $('input[name="camera_position_maintenance"]').on('change',function(){
      var camera_position_maintenance=jQuery(this).val();
      $('#this_camera_position_maintenance').val(camera_position_maintenance);
    });
    $('input[name="camera_position_fix"]').on('change',function(){
      var camera_position_fix=jQuery(this).val();
      $('#this_camera_position_fix').val(camera_position_fix);
    });
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='NVR'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">NVR</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="nvr" id="nvr" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="nvr" id="nvr" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="nvr_notes" class="form-control" name="nvr_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="nvr_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="nvr_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="nvr_fix" class="form-control" name="nvr_fix"></div></div>')
    $('input[name="nvr"]').on('change',function(){
      var nvr=jQuery(this).val();
      $('#this_nvr').val(nvr);
    });
    $('input[name="nvr_notes"]').on('change',function(){
      var nvr_notes=jQuery(this).val();
      $('#this_nvr_notes').val(nvr_notes);
    });
    $('input[name="nvr_maintenance"]').on('change',function(){
      var nvr_maintenance=jQuery(this).val();
      $('#this_nvr_maintenance').val(nvr_maintenance);
    });
    $('input[name="nvr_fix"]').on('change',function(){
      var nvr_fix=jQuery(this).val();
      $('#this_nvr_fix').val(nvr_fix);
    });
    $('#asset_checklist_2').empty().append('');
    $('#asset_checklist_3').empty().append('');
    $('#asset_checklist_4').empty().append('');
    $('#asset_checklist_5').empty().append('');
    $('#asset_checklist_6').empty().append('');
    $('#asset_checklist_7').empty().append('');
    $('#asset_checklist_8').empty().append('');
    $('#asset_checklist_9').empty().append('');
    $('#asset_checklist_10').empty().append('');
    $('#asset_checklist_11').empty().append('');
    $('#asset_checklist_12').empty().append('');
    $('#asset_checklist_13').empty().append('');
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='CPU'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Memory</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="memory" id="memory" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="memory" id="memory" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="memory_notes" class="form-control" name="memory_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="memory_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="memory_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="memory_fix" class="form-control" name="memory_fix"></div></div>')
    $('input[name="memory"]').on('change',function(){
      var memory=jQuery(this).val();
      $('#this_memory').val(memory);
    });
    $('input[name="memory_notes"]').on('change',function(){
      var memory_notes=jQuery(this).val();
      $('#this_memory_notes').val(memory_notes);
    });
    $('input[name="memory_maintenance"]').on('change',function(){
      var memory_maintenance=jQuery(this).val();
      $('#this_memory_maintenance').val(memory_maintenance);
    });
    $('input[name="memory_fix"]').on('change',function(){
      var memory_fix=jQuery(this).val();
      $('#this_memory_fix').val(memory_fix);
    });
    $('#asset_checklist_2').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">CPU</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="cpu" id="cpu" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="cpu" id="cpu" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="cpu_notes" class="form-control" name="cpu_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="cpu_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="cpu_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="cpu_fix" class="form-control" name="cpu_fix"></div></div>')
    $('input[name="cpu"]').on('change',function(){
      var cpu=jQuery(this).val();
      $('#this_cpu').val(cpu);
    });
    $('input[name="cpu_notes"]').on('change',function(){
      var cpu_notes=jQuery(this).val();
      $('#this_cpu_notes').val(cpu_notes);
    });
    $('input[name="cpu_maintenance"]').on('change',function(){
      var cpu_maintenance=jQuery(this).val();
      $('#this_cpu_maintenance').val(cpu_maintenance);
    });
    $('input[name="cpu_fix"]').on('change',function(){
      var cpu_fix=jQuery(this).val();
      $('#this_cpu_fix').val(cpu_fix);
    });
    $('#asset_checklist_3').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Hardisk</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="hardisk" id="hardisk" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="hardisk" id="hardisk" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="hardisk_notes" class="form-control" name="hardisk_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="hardisk_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="hardisk_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="hardisk_fix" class="form-control" name="hardisk_fix"></div></div>')
    $('input[name="hardisk"]').on('change',function(){
      var hardisk=jQuery(this).val();
      $('#this_hardisk').val(hardisk);
    });
    $('input[name="hardisk_notes"]').on('change',function(){
      var hardisk_notes=jQuery(this).val();
      $('#this_hardisk_notes').val(hardisk_notes);
    });
    $('input[name="hardisk_maintenance"]').on('change',function(){
      var hardisk_maintenance=jQuery(this).val();
      $('#this_hardisk_maintenance').val(hardisk_maintenance);
    });
    $('input[name="hardisk_fix"]').on('change',function(){
      var hardisk_fix=jQuery(this).val();
      $('#this_hardisk_fix').val(hardisk_fix);
    });
    $('#asset_checklist_4').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">SSD</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="ssd" id="ssd" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="ssd" id="ssd" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="ssd_notes" class="form-control" name="ssd_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="ssd_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="ssd_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="ssd_fix" class="form-control" name="ssd_fix"></div></div>')
    $('input[name="ssd"]').on('change',function(){
      var ssd=jQuery(this).val();
      $('#this_ssd').val(ssd);
    });
    $('input[name="ssd_notes"]').on('change',function(){
      var ssd_notes=jQuery(this).val();
      $('#this_ssd_notes').val(ssd_notes);
    });
    $('input[name="ssd_maintenance"]').on('change',function(){
      var ssd_maintenance=jQuery(this).val();
      $('#this_ssd_maintenance').val(ssd_maintenance);
    });
    $('input[name="ssd_fix"]').on('change',function(){
      var ssd_fix=jQuery(this).val();
      $('#this_ssd_fix').val(ssd_fix);
    });
    $('#asset_checklist_5').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Motherboard</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="motherboard" id="motherboard" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="motherboard" id="motherboard" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="motherboard_notes" class="form-control" name="motherboard_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="motherboard_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="motherboard_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="motherboard_fix" class="form-control" name="motherboard_fix"></div></div>')
    $('input[name="motherboard"]').on('change',function(){
      var motherboard=jQuery(this).val();
      $('#this_motherboard').val(motherboard);
    });
    $('input[name="motherboard_notes"]').on('change',function(){
      var motherboard_notes=jQuery(this).val();
      $('#this_motherboard_notes').val(motherboard_notes);
    });
    $('input[name="motherboard_maintenance"]').on('change',function(){
      var motherboard_maintenance=jQuery(this).val();
      $('#this_motherboard_maintenance').val(motherboard_maintenance);
    });
    $('input[name="motherboard_fix"]').on('change',function(){
      var motherboard_fix=jQuery(this).val();
      $('#this_motherboard_fix').val(motherboard_fix);
    });
    $('#asset_checklist_6').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">PCI VGA</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pci_vga" id="pci_vga" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pci_vga" id="pci_vga" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pci_vga_notes" class="form-control" name="pci_vga_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pci_vga_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pci_vga_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pci_vga_fix" class="form-control" name="pci_vga_fix"></div></div>')
    $('input[name="pci_vga"]').on('change',function(){
      var pci_vga=jQuery(this).val();
      $('#this_pci_vga').val(pci_vga);
    });
    $('input[name="pci_vga_notes"]').on('change',function(){
      var pci_vga_notes=jQuery(this).val();
      $('#this_pci_vga_notes').val(pci_vga_notes);
    });
    $('input[name="pci_vga_maintenance"]').on('change',function(){
      var pci_vga_maintenance=jQuery(this).val();
      $('#this_pci_vga_maintenance').val(pci_vga_maintenance);
    });
    $('input[name="pci_vga_fix"]').on('change',function(){
      var pci_vga_fix=jQuery(this).val();
      $('#this_pci_vga_fix').val(pci_vga_fix);
    });
    $('#asset_checklist_7').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">PCI WIFI</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pci_wifi" id="pci_wifi" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pci_wifi" id="pci_wifi" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pci_wifi_notes" class="form-control" name="pci_wifi_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pci_wifi_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pci_wifi_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pci_wifi_fix" class="form-control" name="pci_wifi_fix"></div></div>')
    $('input[name="pci_wifi"]').on('change',function(){
      var pci_wifi=jQuery(this).val();
      $('#this_pci_wifi').val(pci_wifi);
    });
    $('input[name="pci_wifi_notes"]').on('change',function(){
      var pci_wifi_notes=jQuery(this).val();
      $('#this_pci_wifi_notes').val(pci_wifi_notes);
    });
    $('input[name="pci_wifi_maintenance"]').on('change',function(){
      var pci_wifi_maintenance=jQuery(this).val();
      $('#this_pci_wifi_maintenance').val(pci_wifi_maintenance);
    });
    $('input[name="pci_wifi_fix"]').on('change',function(){
      var pci_wifi_fix=jQuery(this).val();
      $('#this_pci_wifi_fix').val(pci_wifi_fix);
    });
    $('#asset_checklist_8').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">PCI LAN</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pci_lan" id="pci_lan" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pci_lan" id="pci_lan" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pci_lan_notes" class="form-control" name="pci_lan_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pci_lan_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pci_lan_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pci_lan_fix" class="form-control" name="pci_lan_fix"></div></div>')
    $('input[name="pci_lan"]').on('change',function(){
      var pci_lan=jQuery(this).val();
      $('#this_pci_lan').val(pci_lan);
    });
    $('input[name="pci_lan_notes"]').on('change',function(){
      var pci_lan_notes=jQuery(this).val();
      $('#this_pci_lan_notes').val(pci_lan_notes);
    });
    $('input[name="pci_lan_maintenance"]').on('change',function(){
      var pci_lan_maintenance=jQuery(this).val();
      $('#this_pci_lan_maintenance').val(pci_lan_maintenance);
    });
    $('input[name="pci_lan_fix"]').on('change',function(){
      var pci_lan_fix=jQuery(this).val();
      $('#this_pci_lan_fix').val(pci_lan_fix);
    });
    $('#asset_checklist_9').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Password Account</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="password_account" id="password_account" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="password_account" id="password_account" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="password_account_notes" class="form-control" name="password_account_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="password_account_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="password_account_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="password_account_fix" class="form-control" name="password_account_fix"></div></div>')
    $('input[name="password_account"]').on('change',function(){
      var password_account=jQuery(this).val();
      $('#this_password_account').val(password_account);
    });
    $('input[name="password_account_notes"]').on('change',function(){
      var password_account_notes=jQuery(this).val();
      $('#this_password_account_notes').val(password_account_notes);
    });
    $('input[name="password_account_maintenance"]').on('change',function(){
      var password_account_maintenance=jQuery(this).val();
      $('#this_password_account_maintenance').val(password_account_maintenance);
    });
    $('input[name="password_account_fix"]').on('change',function(){
      var password_account_fix=jQuery(this).val();
      $('#this_password_account_fix').val(memory_fix);
    });
    $('#asset_checklist_10').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">IP Address</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="ip_address" id="ip_address" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="ip_address" id="ip_address" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="ip_address_notes" class="form-control" name="ip_address_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="ip_address_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="ip_address_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="ip_address_fix" class="form-control" name="ip_address_fix"></div></div>')
    $('input[name="ip_address"]').on('change',function(){
      var ip_address=jQuery(this).val();
      $('#this_ip_address').val(ip_address);
    });
    $('input[name="ip_address_notes"]').on('change',function(){
      var ip_address_notes=jQuery(this).val();
      $('#this_ip_address_notes').val(ip_address_notes);
    });
    $('input[name="ip_address_maintenance"]').on('change',function(){
      var ip_address_maintenance=jQuery(this).val();
      $('#this_ip_address_maintenance').val(ip_address_maintenance);
    });
    $('input[name="ip_address_fix"]').on('change',function(){
      var ip_address_fix=jQuery(this).val();
      $('#this_ip_address_fix').val(ip_address_fix);
    });
    $('#asset_checklist_11').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Operating System</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="operating_system" id="operating_system" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="operating_system" id="operating_system" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="operating_system_notes" class="form-control" name="operating_system_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="operating_system_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="operating_system_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="operating_system_fix" class="form-control" name="operating_system_fix"></div></div>')
    $('input[name="operating_system"]').on('change',function(){
      var operating_system=jQuery(this).val();
      $('#this_operating_system').val(operating_system);
    });
    $('input[name="operating_system_notes"]').on('change',function(){
      var operating_system_notes=jQuery(this).val();
      $('#this_operating_system_notes').val(operating_system_notes);
    });
    $('input[name="operating_system_maintenance"]').on('change',function(){
      var operating_system_maintenance=jQuery(this).val();
      $('#this_operating_system_maintenance').val(operating_system_maintenance);
    });
    $('input[name="operating_system_fix"]').on('change',function(){
      var operating_system_fix=jQuery(this).val();
      $('#this_operating_system_fix').val(operating_system_fix);
    });
    $('#asset_checklist_12').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Microsoft Office</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="microsoft_office" id="microsoft_office" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="microsoft_office" id="microsoft_office" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="microsoft_office_notes" class="form-control" name="microsoft_office_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="microsoft_office_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="microsoft_office_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="microsoft_office_fix" class="form-control" name="microsoft_office_fix"></div></div>')
    $('input[name="microsoft_office"]').on('change',function(){
      var microsoft_office=jQuery(this).val();
      $('#this_microsoft_office').val(microsoft_office);
    });
    $('input[name="microsoft_office_notes"]').on('change',function(){
      var microsoft_office_notes=jQuery(this).val();
      $('#this_microsoft_office_notes').val(microsoft_office_notes);
    });
    $('input[name="microsoft_office_maintenance"]').on('change',function(){
      var microsoft_office_maintenance=jQuery(this).val();
      $('#this_microsoft_office_maintenance').val(microsoft_office_maintenance);
    });
    $('input[name="microsoft_office_fix"]').on('change',function(){
      var microsoft_office_fix=jQuery(this).val();
      $('#this_microsoft_office_fix').val(microsoft_office_fix);
    });
    $('#asset_checklist_13').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Antivirus</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="antivirus" id="antivirus" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="antivirus" id="antivirus" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="antivirus_notes" class="form-control" name="antivirus_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="antivirus_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="antivirus_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="antivirus_fix" class="form-control" name="antivirus_fix"></div></div>')
    $('input[name="antivirus"]').on('change',function(){
      var antivirus=jQuery(this).val();
      $('#this_antivirus').val(antivirus);
    });
    $('input[name="antivirus_notes"]').on('change',function(){
      var antivirus_notes=jQuery(this).val();
      $('#this_antivirus_notes').val(antivirus_notes);
    });
    $('input[name="antivirus_maintenance"]').on('change',function(){
      var antivirus_maintenance=jQuery(this).val();
      $('#this_antivirus_maintenance').val(antivirus_maintenance);
    });
    $('input[name="antivirus_fix"]').on('change',function(){
      var antivirus_fix=jQuery(this).val();
      $('#this_antivirus_fix').val(antivirus_fix);
    });
    $('#asset_checklist_14').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Cache</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="cache" id="cache" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="cache" id="cache" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="cache_notes" class="form-control" name="cache_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="cache_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="cache_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="cache_fix" class="form-control" name="cache_fix"></div></div>')
    $('input[name="cache"]').on('change',function(){
      var cache=jQuery(this).val();
      $('#this_cache').val(cache);
    });
    $('input[name="cache_notes"]').on('change',function(){
      var cache_notes=jQuery(this).val();
      $('#this_cache_notes').val(cache_notes);
    });
    $('input[name="cache_maintenance"]').on('change',function(){
      var cache_maintenance=jQuery(this).val();
      $('#this_cache_maintenance').val(cache_maintenance);
    });
    $('input[name="cache_fix"]').on('change',function(){
      var cache_fix=jQuery(this).val();
      $('#this_cache_fix').val(cache_fix);
    });
    $('#asset_checklist_15').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Wallpaper</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="wallpaper" id="wallpaper" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="wallpaper" id="wallpaper" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="wallpaper_notes" class="form-control" name="wallpaper_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="wallpaper_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="wallpaper_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="wallpaper_fix" class="form-control" name="wallpaper_fix"></div></div>')
    $('input[name="wallpaper"]').on('change',function(){
      var wallpaper=jQuery(this).val();
      $('#this_wallpaper').val(wallpaper);
    });
    $('input[name="wallpaper_notes"]').on('change',function(){
      var wallpaper_notes=jQuery(this).val();
      $('#this_wallpaper_notes').val(wallpaper_notes);
    });
    $('input[name="wallpaper_maintenance"]').on('change',function(){
      var wallpaper_maintenance=jQuery(this).val();
      $('#this_wallpaper_maintenance').val(wallpaper_maintenance);
    });
    $('input[name="wallpaper_fix"]').on('change',function(){
      var wallpaper_fix=jQuery(this).val();
      $('#this_wallpaper_fix').val(wallpaper_fix);
    });
    $('#asset_checklist_16').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Screen Saver</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="screen_saver" id="screen_saver" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="screen_saver" id="screen_saver" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="screen_saver_notes" class="form-control" name="screen_saver_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="screen_saver_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="screen_saver_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="screen_saver_fix" class="form-control" name="screen_saver_fix"></div></div>')
    $('input[name="screen_saver"]').on('change',function(){
      var screen_saver=jQuery(this).val();
      $('#this_screen_saver').val(screen_saver);
    });
    $('input[name="screen_saver_notes"]').on('change',function(){
      var screen_saver_notes=jQuery(this).val();
      $('#this_screen_saver_notes').val(screen_saver_notes);
    });
    $('input[name="screen_saver_maintenance"]').on('change',function(){
      var screen_saver_maintenance=jQuery(this).val();
      $('#this_screen_saver_maintenance').val(screen_saver_maintenance);
    });
    $('input[name="screen_saver_fix"]').on('change',function(){
      var screen_saver_fix=jQuery(this).val();
      $('#this_screen_saver_fix').val(screen_saver_fix);
    });
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='Laptop'){
    $('#asset_checklist_1').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Memory</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="memory_laptop" id="memory_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="memory_laptop" id="memory_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="memory_laptop_notes" class="form-control" name="memory_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="memory_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="memory_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="memory_laptop_fix" class="form-control" name="memory_laptop_fix"></div></div>')
    $('input[name="memory_laptop"]').on('change',function(){
      var memory_laptop=jQuery(this).val();
      $('#this_memory_laptop').val(memory_laptop);
    });
    $('input[name="memory_laptop_notes"]').on('change',function(){
      var memory_laptop_notes=jQuery(this).val();
      $('#this_memory_laptop_notes').val(memory_laptop_notes);
    });
    $('input[name="memory_laptop_maintenance"]').on('change',function(){
      var memory_laptop_maintenance=jQuery(this).val();
      $('#this_memory_laptop_maintenance').val(memory_laptop_maintenance);
    });
    $('input[name="memory_laptop_fix"]').on('change',function(){
      var memory_laptop_fix=jQuery(this).val();
      $('#this_memory_laptop_fix').val(memory_laptop_fix);
    });
    $('#asset_checklist_2').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Processor</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="processor_laptop" id="processor_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="processor_laptop" id="processor_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="processor_laptop_notes" class="form-control" name="processor_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="processor_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="processor_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="processor_laptop_fix" class="form-control" name="processor_laptop_fix"></div></div>')
    $('input[name="processor_laptop"]').on('change',function(){
      var processor_laptop=jQuery(this).val();
      $('#this_processor_laptop').val(processor_laptop);
    });
    $('input[name="processor_laptop_notes"]').on('change',function(){
      var processor_laptop_notes=jQuery(this).val();
      $('#this_processor_laptop_notes').val(processor_laptop_notes);
    });
    $('input[name="processor_laptop_maintenance"]').on('change',function(){
      var processor_laptop_maintenance=jQuery(this).val();
      $('#this_processor_laptop_maintenance').val(processor_laptop_maintenance);
    });
    $('input[name="processor_laptop_fix"]').on('change',function(){
      var processor_laptop_fix=jQuery(this).val();
      $('#this_processor_laptop_fix').val(processor_laptop_fix);
    });
    $('#asset_checklist_3').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Hardisk</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="hardisk_laptop" id="hardisk_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="hardisk_laptop" id="hardisk_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="hardisk_laptop_notes" class="form-control" name="hardisk_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="hardisk_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="hardisk_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="hardisk_laptop_fix" class="form-control" name="hardisk_laptop_fix"></div></div>')
    $('input[name="hardisk_laptop"]').on('change',function(){
      var hardisk_laptop=jQuery(this).val();
      $('#this_hardisk_laptop').val(hardisk_laptop);
    });
    $('input[name="hardisk_laptop_notes"]').on('change',function(){
      var hardisk_laptop_notes=jQuery(this).val();
      $('#this_hardisk_laptop_notes').val(hardisk_laptop_notes);
    });
    $('input[name="hardisk_laptop_maintenance"]').on('change',function(){
      var hardisk_laptop_maintenance=jQuery(this).val();
      $('#this_hardisk_laptop_maintenance').val(hardisk_laptop_maintenance);
    });
    $('input[name="hardisk_laptop_fix"]').on('change',function(){
      var hardisk_laptop_fix=jQuery(this).val();
      $('#this_hardisk_laptop_fix').val(hardisk_laptop_fix);
    });
    $('#asset_checklist_4').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">ssd</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="ssd_laptop" id="ssd_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="ssd_laptop" id="ssd_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="ssd_laptop_notes" class="form-control" name="ssd_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="ssd_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="ssd_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="ssd_laptop_fix" class="form-control" name="ssd_laptop_fix"></div></div>')
    $('input[name="ssd_laptop"]').on('change',function(){
      var ssd_laptop=jQuery(this).val();
      $('#this_ssd_laptop').val(ssd_laptop);
    });
    $('input[name="ssd_laptop_notes"]').on('change',function(){
      var ssd_laptop_notes=jQuery(this).val();
      $('#this_ssd_laptop_notes').val(ssd_laptop_notes);
    });
    $('input[name="ssd_laptop_maintenance"]').on('change',function(){
      var ssd_laptop_maintenance=jQuery(this).val();
      $('#this_ssd_laptop_maintenance').val(ssd_laptop_maintenance);
    });
    $('input[name="ssd_laptop_fix"]').on('change',function(){
      var ssd_laptop_fix=jQuery(this).val();
      $('#this_ssd_laptop_fix').val(ssd_laptop_fix);
    });
    $('#asset_checklist_5').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">LED</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="led_laptop_inch" id="led_laptop_inch" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="led_laptop_inch" id="led_laptop_inch" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="led_laptop_inch_notes" class="form-control" name="led_laptop_inch_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="led_laptop_inch_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="led_laptop_inch_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="led_laptop_inch_fix" class="form-control" name="led_laptop_inch_fix"></div></div>')
    $('input[name="led_laptop_inch"]').on('change',function(){
      var led_laptop_inch=jQuery(this).val();
      $('#this_led_laptop_inch').val(led_laptop_inch);
    });
    $('input[name="led_laptop_inch_notes"]').on('change',function(){
      var led_laptop_inch_notes=jQuery(this).val();
      $('#this_led_laptop_inch_notes').val(led_laptop_inch_notes);
    });
    $('input[name="led_laptop_inch_maintenance"]').on('change',function(){
      var led_laptop_inch_maintenance=jQuery(this).val();
      $('#this_led_laptop_inch_maintenance').val(led_laptop_inch_maintenance);
    });
    $('input[name="led_laptop_inch_fix"]').on('change',function(){
      var led_laptop_inch_fix=jQuery(this).val();
      $('#this_led_laptop_inch_fix').val(led_laptop_inch_fix);
    });
    $('#asset_checklist_6').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Password Account</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="password_account_laptop" id="password_account_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="password_account_laptop" id="password_account_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="password_account_laptop_notes" class="form-control" name="password_account_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="password_account_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="password_account_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="password_account_laptop_fix" class="form-control" name="password_account_laptop_fix"></div></div>')
    $('input[name="password_account_laptop"]').on('change',function(){
      var password_account_laptop=jQuery(this).val();
      $('#this_password_account_laptop').val(password_account_laptop);
    });
    $('input[name="password_account_laptop_notes"]').on('change',function(){
      var password_account_laptop_notes=jQuery(this).val();
      $('#this_password_account_laptop_notes').val(password_account_laptop_notes);
    });
    $('input[name="password_account_laptop_maintenance"]').on('change',function(){
      var password_account_laptop_maintenance=jQuery(this).val();
      $('#this_password_account_laptop_maintenance').val(password_account_laptop_maintenance);
    });
    $('input[name="password_account_laptop_fix"]').on('change',function(){
      var password_account_laptop_fix=jQuery(this).val();
      $('#this_password_account_laptop_fix').val(password_account_laptop_fix);
    });
    $('#asset_checklist_7').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">IP Address</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="ip_address_laptop" id="ip_address_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="ip_address_laptop" id="ip_address_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="ip_address_laptop_notes" class="form-control" name="ip_address_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="ip_address_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="ip_address_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="ip_address_laptop_fix" class="form-control" name="ip_address_laptop_fix"></div></div>')
    $('input[name="ip_address_laptop"]').on('change',function(){
      var ip_address_laptop=jQuery(this).val();
      $('#this_ip_address_laptop').val(ip_address_laptop);
    });
    $('input[name="ip_address_laptop_notes"]').on('change',function(){
      var ip_address_laptop_notes=jQuery(this).val();
      $('#this_ip_address_laptop_notes').val(ip_address_laptop_notes);
    });
    $('input[name="ip_address_laptop_maintenance"]').on('change',function(){
      var ip_address_laptop_maintenance=jQuery(this).val();
      $('#this_ip_address_laptop_maintenance').val(ip_address_laptop_maintenance);
    });
    $('input[name="ip_address_laptop_fix"]').on('change',function(){
      var ip_address_laptop_fix=jQuery(this).val();
      $('#this_ip_address_laptop_fix').val(ip_address_laptop_fix);
    });
    $('#asset_checklist_8').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Operating System</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="operating_system_laptop" id="operating_system_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="operating_system_laptop" id="operating_system_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="operating_system_laptop_notes" class="form-control" name="operating_system_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="operating_system_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="operating_system_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="operating_system_laptop_fix" class="form-control" name="operating_system_laptop_fix"></div></div>')
    $('input[name="operating_system_laptop"]').on('change',function(){
      var operating_system_laptop=jQuery(this).val();
      $('#this_operating_system_laptop').val(operating_system_laptop);
    });
    $('input[name="operating_system_laptop_notes"]').on('change',function(){
      var operating_system_laptop_notes=jQuery(this).val();
      $('#this_operating_system_laptop_notes').val(operating_system_laptop_notes);
    });
    $('input[name="operating_system_laptop_maintenance"]').on('change',function(){
      var operating_system_laptop_maintenance=jQuery(this).val();
      $('#this_operating_system_laptop_maintenance').val(operating_system_laptop_maintenance);
    });
    $('input[name="operating_system_laptop_fix"]').on('change',function(){
      var operating_system_laptop_fix=jQuery(this).val();
      $('#this_operating_system_laptop_fix').val(operating_system_laptop_fix);
    });
    $('#asset_checklist_9').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Microsoft Office</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="microsoft_office_laptop" id="microsoft_office_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="microsoft_office_laptop" id="microsoft_office_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="microsoft_office_laptop_notes" class="form-control" name="microsoft_office_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="microsoft_office_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="microsoft_office_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="microsoft_office_laptop_fix" class="form-control" name="microsoft_office_laptop_fix"></div></div>')
    $('input[name="microsoft_office_laptop"]').on('change',function(){
      var microsoft_office_laptop=jQuery(this).val();
      $('#this_microsoft_office_laptop').val(microsoft_office_laptop);
    });
    $('input[name="microsoft_office_laptop_notes"]').on('change',function(){
      var microsoft_office_laptop_notes=jQuery(this).val();
      $('#this_microsoft_office_laptop_notes').val(microsoft_office_laptop_notes);
    });
    $('input[name="microsoft_office_laptop_maintenance"]').on('change',function(){
      var microsoft_office_laptop_maintenance=jQuery(this).val();
      $('#this_microsoft_office_laptop_maintenance').val(microsoft_office_laptop_maintenance);
    });
    $('input[name="microsoft_office_laptop_fix"]').on('change',function(){
      var microsoft_office_laptop_fix=jQuery(this).val();
      $('#this_microsoft_office_laptop_fix').val(microsoft_office_laptop_fix);
    });
    $('#asset_checklist_10').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Antivirus</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="antivirus_laptop" id="antivirus_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="antivirus_laptop" id="antivirus_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="antivirus_laptop_notes" class="form-control" name="antivirus_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="antivirus_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="antivirus_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="antivirus_laptop_fix" class="form-control" name="antivirus_laptop_fix"></div></div>')
    $('input[name="antivirus_laptop"]').on('change',function(){
      var antivirus_laptop=jQuery(this).val();
      $('#this_antivirus_laptop').val(antivirus_laptop);
    });
    $('input[name="antivirus_laptop_notes"]').on('change',function(){
      var antivirus_laptop_notes=jQuery(this).val();
      $('#this_antivirus_laptop_notes').val(antivirus_laptop_notes);
    });
    $('input[name="antivirus_laptop_maintenance"]').on('change',function(){
      var antivirus_laptop_maintenance=jQuery(this).val();
      $('#this_antivirus_laptop_maintenance').val(antivirus_laptop_maintenance);
    });
    $('input[name="antivirus_laptop_fix"]').on('change',function(){
      var antivirus_laptop_fix=jQuery(this).val();
      $('#this_antivirus_laptop_fix').val(antivirus_laptop_fix);
    });
    $('#asset_checklist_11').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Cache</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="cache_laptop" id="cache_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="cache_laptop" id="cache_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="cache_laptop_notes" class="form-control" name="cache_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="cache_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="cache_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="cache_laptop_fix" class="form-control" name="cache_laptop_fix"></div></div>')
    $('input[name="cache_laptop"]').on('change',function(){
      var cache_laptop=jQuery(this).val();
      $('#this_cache_laptop').val(cache_laptop);
    });
    $('input[name="cache_laptop_notes"]').on('change',function(){
      var cache_laptop_notes=jQuery(this).val();
      $('#this_cache_laptop_notes').val(cache_laptop_notes);
    });
    $('input[name="cache_laptop_maintenance"]').on('change',function(){
      var cache_laptop_maintenance=jQuery(this).val();
      $('#this_cache_laptop_maintenance').val(cache_laptop_maintenance);
    });
    $('input[name="cache_laptop_fix"]').on('change',function(){
      var cache_laptop_fix=jQuery(this).val();
      $('#this_cache_laptop_fix').val(cache_laptop_fix);
    });
    $('#asset_checklist_12').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Wallpaper</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="wallpaper_laptop" id="wallpaper_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="wallpaper_laptop" id="wallpaper_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="wallpaper_laptop_notes" class="form-control" name="wallpaper_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="wallpaper_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="wallpaper_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="wallpaper_laptop_fix" class="form-control" name="wallpaper_laptop_fix"></div></div>')
    $('input[name="wallpaper_laptop"]').on('change',function(){
      var wallpaper_laptop=jQuery(this).val();
      $('#this_wallpaper_laptop').val(wallpaper_laptop);
    });
    $('input[name="wallpaper_laptop_notes"]').on('change',function(){
      var wallpaper_laptop_notes=jQuery(this).val();
      $('#this_wallpaper_laptop_notes').val(wallpaper_laptop_notes);
    });
    $('input[name="wallpaper_laptop_maintenance"]').on('change',function(){
      var wallpaper_laptop_maintenance=jQuery(this).val();
      $('#this_wallpaper_laptop_maintenance').val(wallpaper_laptop_maintenance);
    });
    $('input[name="wallpaper_laptop_fix"]').on('change',function(){
      var wallpaper_laptop_fix=jQuery(this).val();
      $('#this_wallpaper_laptop_fix').val(wallpaper_laptop_fix);
    });
    $('#asset_checklist_13').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Screen Saver</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="screen_saver_laptop" id="screen_saver_laptop" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="screen_saver_laptop" id="screen_saver_laptop" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="screen_saver_laptop_notes" class="form-control" name="screen_saver_laptop_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="screen_saver_laptop_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="screen_saver_laptop_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="screen_saver_laptop_fix" class="form-control" name="screen_saver_laptop_fix"></div></div>')
    $('input[name="screen_saver_laptop"]').on('change',function(){
      var screen_saver_laptop=jQuery(this).val();
      $('#this_screen_saver_laptop').val(screen_saver_laptop);
    });
    $('input[name="screen_saver_laptop_notes"]').on('change',function(){
      var screen_saver_laptop_notes=jQuery(this).val();
      $('#this_screen_saver_laptop_notes').val(screen_saver_laptop_notes);
    });
    $('input[name="screen_saver_laptop_maintenance"]').on('change',function(){
      var screen_saver_laptop_maintenance=jQuery(this).val();
      $('#this_screen_saver_laptop_maintenance').val(screen_saver_laptop_maintenance);
    });
    $('input[name="screen_saver_laptop_fix"]').on('change',function(){
      var screen_saver_laptop_fix=jQuery(this).val();
      $('#this_screen_saver_laptop_fix').val(screen_saver_laptop_fix);
    });
    $('#asset_checklist_14').empty().append('');
    $('#asset_checklist_15').empty().append('');
    $('#asset_checklist_16').empty().append('');
    $('#asset_checklist_17').empty().append('');
    $('#asset_checklist_18').empty().append('');
    $('#asset_checklist_19').empty().append('');
  }
  else if(asset_type=='PC'){
    $('input[name="pc_monitor"]').on('change',function(){
      var pc_monitor=jQuery(this).val();
      $('#this_pc_monitor').val(pc_monitor);
    });
    $('input[name="pc_monitor_notes"]').on('change',function(){
      var pc_monitor_notes=jQuery(this).val();
      $('#this_pc_monitor_notes').val(pc_monitor_notes);
    });
    $('input[name="pc_monitor_maintenance"]').on('change',function(){
      var pc_monitor_maintenance=jQuery(this).val();
      $('#this_pc_monitor_maintenance').val(pc_monitor_maintenance);
    });
    $('input[name="pc_monitor_fix"]').on('change',function(){
      var pc_monitor_fix=jQuery(this).val();
      $('#this_pc_monitor_fix').val(pc_monitor_fix);
    });
    $('#asset_checklist_2').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Keyboard</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_keyboard" id="pc_keyboard" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_keyboard" id="pc_keyboard" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_keyboard_notes" class="form-control" name="pc_keyboard_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_keyboard_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_keyboard_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_keyboard_fix" class="form-control" name="pc_keyboard_fix"></div></div>')
    $('input[name="pc_keyboard"]').on('change',function(){
      var pc_keyboard=jQuery(this).val();
      $('#this_pc_keyboard').val(pc_keyboard);
    });
    $('input[name="pc_keyboard_notes"]').on('change',function(){
      var pc_keyboard_notes=jQuery(this).val();
      $('#this_pc_keyboard_notes').val(pc_keyboard_notes);
    });
    $('input[name="pc_keyboard_maintenance"]').on('change',function(){
      var pc_keyboard_maintenance=jQuery(this).val();
      $('#this_pc_keyboard_maintenance').val(pc_keyboard_maintenance);
    });
    $('input[name="pc_keyboard_fix"]').on('change',function(){
      var pc_keyboard_fix=jQuery(this).val();
      $('#this_pc_keyboard_fix').val(pc_keyboard_fix);
    });
    $('#asset_checklist_3').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Mouse</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_mouse" id="pc_mouse" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_mouse" id="pc_mouse" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_mouse_notes" class="form-control" name="pc_mouse_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_mouse_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_mouse_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_mouse_fix" class="form-control" name="pc_mouse_fix"></div></div>')
    $('input[name="pc_mouse"]').on('change',function(){
      var pc_mouse=jQuery(this).val();
      $('#this_pc_mouse').val(pc_mouse);
    });
    $('input[name="pc_mouse_notes"]').on('change',function(){
      var pc_mouse_notes=jQuery(this).val();
      $('#this_pc_mouse_notes').val(pc_mouse_notes);
    });
    $('input[name="pc_mouse_maintenance"]').on('change',function(){
      var pc_mouse_maintenance=jQuery(this).val();
      $('#this_pc_mouse_maintenance').val(pc_mouse_maintenance);
    });
    $('input[name="pc_mouse_fix"]').on('change',function(){
      var pc_mouse_fix=jQuery(this).val();
      $('#this_pc_mouse_fix').val(pc_mouse_fix);
    });
    
    $('#asset_checklist_4').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Memory</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_memory" id="pc_memory" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_memory" id="pc_memory" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_memory_notes" class="form-control" name="pc_memory_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_memory_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_memory_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_memory_fix" class="form-control" name="pc_memory_fix"></div></div>')
    $('input[name="pc_memory"]').on('change',function(){
      var pc_memory=jQuery(this).val();
      $('#this_pc_memory').val(pc_memory);
    });
    $('input[name="pc_memory_notes"]').on('change',function(){
      var pc_memory_notes=jQuery(this).val();
      $('#this_pc_memory_notes').val(pc_memory_notes);
    });
    $('input[name="pc_memory_maintenance"]').on('change',function(){
      var pc_memory_maintenance=jQuery(this).val();
      $('#this_pc_memory_maintenance').val(pc_memory_maintenance);
    });
    $('input[name="pc_memory_fix"]').on('change',function(){
      var pc_memory_fix=jQuery(this).val();
      $('#this_pc_memory_fix').val(pc_memory_fix);
    });
    
    $('#asset_checklist_5').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Processor</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_processor" id="pc_processor" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_processor" id="pc_processor" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_processor_notes" class="form-control" name="pc_processor_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_processor_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_processor_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_processor_fix" class="form-control" name="pc_processor_fix"></div></div>')
    $('input[name="pc_processor"]').on('change',function(){
      var pc_processor=jQuery(this).val();
      $('#this_pc_processor').val(pc_processor);
    });
    $('input[name="pc_processor_notes"]').on('change',function(){
      var pc_processor_notes=jQuery(this).val();
      $('#this_pc_processor_notes').val(pc_processor_notes);
    });
    $('input[name="pc_processor_maintenance"]').on('change',function(){
      var pc_processor_maintenance=jQuery(this).val();
      $('#this_pc_processor_maintenance').val(pc_processor_maintenance);
    });
    $('input[name="pc_processor_fix"]').on('change',function(){
      var pc_processor_fix=jQuery(this).val();
      $('#this_pc_processor_fix').val(pc_processor_fix);
    });
    
    $('#asset_checklist_6').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Hardisk</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_hardisk" id="pc_hardisk" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_hardisk" id="pc_hardisk" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_hardisk_notes" class="form-control" name="pc_hardisk_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_hardisk_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_hardisk_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_hardisk_fix" class="form-control" name="pc_hardisk_fix"></div></div>')
    $('input[name="pc_hardisk"]').on('change',function(){
      var pc_hardisk=jQuery(this).val();
      $('#this_pc_hardisk').val(pc_hardisk);
    });
    $('input[name="pc_hardisk_notes"]').on('change',function(){
      var pc_hardisk_notes=jQuery(this).val();
      $('#this_pc_hardisk_notes').val(pc_hardisk_notes);
    });
    $('input[name="pc_hardisk_maintenance"]').on('change',function(){
      var pc_hardisk_maintenance=jQuery(this).val();
      $('#this_pc_hardisk_maintenance').val(pc_hardisk_maintenance);
    });
    $('input[name="pc_hardisk_fix"]').on('change',function(){
      var pc_hardisk_fix=jQuery(this).val();
      $('#this_pc_hardisk_fix').val(pc_hardisk_fix);
    });
    
    $('#asset_checklist_7').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">SSD</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_ssd" id="pc_ssd" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_ssd" id="pc_ssd" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_ssd_notes" class="form-control" name="pc_ssd_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_ssd_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_ssd_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_ssd_fix" class="form-control" name="pc_ssd_fix"></div></div>')
    $('input[name="pc_ssd"]').on('change',function(){
      var pc_ssd=jQuery(this).val();
      $('#this_pc_ssd').val(pc_ssd);
    });
    $('input[name="pc_ssd_notes"]').on('change',function(){
      var pc_ssd_notes=jQuery(this).val();
      $('#this_pc_ssd_notes').val(pc_ssd_notes);
    });
    $('input[name="pc_ssd_maintenance"]').on('change',function(){
      var pc_ssd_maintenance=jQuery(this).val();
      $('#this_pc_ssd_maintenance').val(pc_ssd_maintenance);
    });
    $('input[name="pc_ssd_fix"]').on('change',function(){
      var pc_ssd_fix=jQuery(this).val();
      $('#this_pc_ssd_fix').val(pc_ssd_fix);
    });
    
    $('#asset_checklist_8').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Motherboard</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_motherboard" id="pc_motherboard" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_motherboard" id="pc_motherboard" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_motherboard_notes" class="form-control" name="pc_motherboard_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_motherboard_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_motherboard_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_motherboard_fix" class="form-control" name="pc_motherboard_fix"></div></div>')
    $('input[name="pc_motherboard"]').on('change',function(){
      var pc_motherboard=jQuery(this).val();
      $('#this_pc_motherboard').val(pc_motherboard);
    });
    $('input[name="pc_motherboard_notes"]').on('change',function(){
      var pc_motherboard_notes=jQuery(this).val();
      $('#this_pc_motherboard_notes').val(pc_motherboard_notes);
    });
    $('input[name="pc_motherboard_maintenance"]').on('change',function(){
      var pc_motherboard_maintenance=jQuery(this).val();
      $('#this_pc_motherboard_maintenance').val(pc_motherboard_maintenance);
    });
    $('input[name="pc_motherboard_fix"]').on('change',function(){
      var pc_motherboard_fix=jQuery(this).val();
      $('#this_pc_motherboard_fix').val(pc_motherboard_fix);
    });
    
    $('#asset_checklist_9').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">PCI VGA</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_pci_vga" id="pc_pci_vga" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_pci_vga" id="pc_pci_vga" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_pci_vga_notes" class="form-control" name="pc_pci_vga_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_pci_vga_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_pci_vga_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_pci_vga_fix" class="form-control" name="pc_pci_vga_fix"></div></div>')
    $('input[name="pc_pci_vga"]').on('change',function(){
      var pc_pci_vga=jQuery(this).val();
      $('#this_pc_pci_vga').val(pc_pci_vga);
    });
    $('input[name="pc_pci_vga_notes"]').on('change',function(){
      var pc_pci_vga_notes=jQuery(this).val();
      $('#this_pc_pci_vga_notes').val(pc_pci_vga_notes);
    });
    $('input[name="pc_pci_vga_maintenance"]').on('change',function(){
      var pc_pci_vga_maintenance=jQuery(this).val();
      $('#this_pc_pci_vga_maintenance').val(pc_pci_vga_maintenance);
    });
    $('input[name="pc_pci_vga_fix"]').on('change',function(){
      var pc_pci_vga_fix=jQuery(this).val();
      $('#this_pc_pci_vga_fix').val(pc_pci_vga_fix);
    });
    
    $('#asset_checklist_10').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">PCI LAN</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_pci_lan" id="pc_pci_lan" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_pci_lan" id="pc_pci_lan" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_pci_lan_notes" class="form-control" name="pc_pci_lan_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_pci_lan_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_pci_lan_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_pci_lan_fix" class="form-control" name="pc_pci_lan_fix"></div></div>')
    $('input[name="pc_pci_lan"]').on('change',function(){
      var pc_pci_lan=jQuery(this).val();
      $('#this_pc_pci_lan').val(pc_pci_lan);
    });
    $('input[name="pc_pci_lan_notes"]').on('change',function(){
      var pc_pci_lan_notes=jQuery(this).val();
      $('#this_pc_pci_lan_notes').val(pc_pci_lan_notes);
    });
    $('input[name="pc_pci_lan_maintenance"]').on('change',function(){
      var pc_pci_lan_maintenance=jQuery(this).val();
      $('#this_pc_pci_lan_maintenance').val(pc_pci_lan_maintenance);
    });
    $('input[name="pc_pci_lan_fix"]').on('change',function(){
      var pc_pci_lan_fix=jQuery(this).val();
      $('#this_pc_pci_lan_fix').val(pc_pci_lan_fix);
    });
    
    $('#asset_checklist_11').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">PCI Wifi</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_pci_wifi" id="pc_pci_wifi" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_pci_wifi" id="pc_pci_wifi" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_pci_wifi_notes" class="form-control" name="pc_pci_wifi_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_pci_wifi_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_pci_wifi_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_pci_wifi_fix" class="form-control" name="pc_pci_wifi_fix"></div></div>')
    $('input[name="pc_pci_wifi"]').on('change',function(){
      var pc_pci_wifi=jQuery(this).val();
      $('#this_pc_pci_wifi').val(pc_pci_wifi);
    });
    $('input[name="pc_pci_wifi_notes"]').on('change',function(){
      var pc_pci_wifi_notes=jQuery(this).val();
      $('#this_pc_pci_wifi_notes').val(pc_pci_wifi_notes);
    });
    $('input[name="pc_pci_wifi_maintenance"]').on('change',function(){
      var pc_pci_wifi_maintenance=jQuery(this).val();
      $('#this_pc_pci_wifi_maintenance').val(pc_pci_wifi_maintenance);
    });
    $('input[name="pc_pci_wifi_fix"]').on('change',function(){
      var pc_pci_wifi_fix=jQuery(this).val();
      $('#this_pc_pci_wifi_fix').val(pc_pci_wifi_fix);
    });
    
    $('#asset_checklist_12').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Password Account</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_password_account" id="pc_password_account" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_password_account" id="pc_password_account" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_password_account_notes" class="form-control" name="pc_password_account_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_password_account_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_password_account_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_password_account_fix" class="form-control" name="pc_password_account_fix"></div></div>')
    $('input[name="pc_password_account"]').on('change',function(){
      var pc_password_account=jQuery(this).val();
      $('#this_pc_password_account').val(pc_password_account);
    });
    $('input[name="pc_password_account_notes"]').on('change',function(){
      var pc_password_account_notes=jQuery(this).val();
      $('#this_pc_password_account_notes').val(pc_password_account_notes);
    });
    $('input[name="pc_password_account_maintenance"]').on('change',function(){
      var pc_password_account_maintenance=jQuery(this).val();
      $('#this_pc_password_account_maintenance').val(pc_password_account_maintenance);
    });
    $('input[name="pc_password_account_fix"]').on('change',function(){
      var pc_password_account_fix=jQuery(this).val();
      $('#this_pc_password_account_fix').val(pc_password_account_fix);
    });
    
    $('#asset_checklist_13').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">IP Address</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_ip_address" id="pc_ip_address" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_ip_address" id="pc_ip_address" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_ip_address_notes" class="form-control" name="pc_ip_address_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_ip_address_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_ip_address_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_ip_address_fix" class="form-control" name="pc_ip_address_fix"></div></div>')
    $('input[name="pc_ip_address"]').on('change',function(){
      var pc_ip_address=jQuery(this).val();
      $('#this_pc_ip_address').val(pc_ip_address);
    });
    $('input[name="pc_ip_address_notes"]').on('change',function(){
      var pc_ip_address_notes=jQuery(this).val();
      $('#this_pc_ip_address_notes').val(pc_ip_address_notes);
    });
    $('input[name="pc_ip_address_maintenance"]').on('change',function(){
      var pc_ip_address_maintenance=jQuery(this).val();
      $('#this_pc_ip_address_maintenance').val(pc_ip_address_maintenance);
    });
    $('input[name="pc_ip_address_fix"]').on('change',function(){
      var pc_ip_address_fix=jQuery(this).val();
      $('#this_pc_ip_address_fix').val(pc_ip_address_fix);
    });
    
    $('#asset_checklist_14').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Operating System</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_operating_system" id="pc_operating_system" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_operating_system" id="pc_operating_system" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_operating_system_notes" class="form-control" name="pc_operating_system_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_operating_system_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_operating_system_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_operating_system_fix" class="form-control" name="pc_operating_system_fix"></div></div>')
    $('input[name="pc_operating_system"]').on('change',function(){
      var pc_operating_system=jQuery(this).val();
      $('#this_pc_operating_system').val(pc_operating_system);
    });
    $('input[name="pc_operating_system_notes"]').on('change',function(){
      var pc_operating_system_notes=jQuery(this).val();
      $('#this_pc_operating_system_notes').val(pc_operating_system_notes);
    });
    $('input[name="pc_operating_system_maintenance"]').on('change',function(){
      var pc_operating_system_maintenance=jQuery(this).val();
      $('#this_pc_operating_system_maintenance').val(pc_operating_system_maintenance);
    });
    $('input[name="pc_operating_system_fix"]').on('change',function(){
      var pc_operating_system_fix=jQuery(this).val();
      $('#this_pc_operating_system_fix').val(pc_operating_system_fix);
    });
    
    $('#asset_checklist_15').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Microsoft Office</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_microsoft_office" id="pc_microsoft_office" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_microsoft_office" id="pc_microsoft_office" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_microsoft_office_notes" class="form-control" name="pc_microsoft_office_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_microsoft_office_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_microsoft_office_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_microsoft_office_fix" class="form-control" name="pc_microsoft_office_fix"></div></div>')
    $('input[name="pc_microsoft_office"]').on('change',function(){
      var pc_microsoft_office=jQuery(this).val();
      $('#this_pc_microsoft_office').val(pc_microsoft_office);
    });
    $('input[name="pc_microsoft_office_notes"]').on('change',function(){
      var pc_microsoft_office_notes=jQuery(this).val();
      $('#this_pc_microsoft_office_notes').val(pc_microsoft_office_notes);
    });
    $('input[name="pc_microsoft_office_maintenance"]').on('change',function(){
      var pc_microsoft_office_maintenance=jQuery(this).val();
      $('#this_pc_microsoft_office_maintenance').val(pc_microsoft_office_maintenance);
    });
    $('input[name="pc_microsoft_office_fix"]').on('change',function(){
      var pc_microsoft_office_fix=jQuery(this).val();
      $('#this_pc_microsoft_office_fix').val(pc_microsoft_office_fix);
    });
    
    $('#asset_checklist_16').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Antivirus</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_antivirus" id="pc_antivirus" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_antivirus" id="pc_antivirus" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_antivirus_notes" class="form-control" name="pc_antivirus_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_antivirus_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_antivirus_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_antivirus_fix" class="form-control" name="pc_antivirus_fix"></div></div>')
    $('input[name="pc_antivirus"]').on('change',function(){
      var pc_antivirus=jQuery(this).val();
      $('#this_pc_antivirus').val(pc_antivirus);
    });
    $('input[name="pc_antivirus_notes"]').on('change',function(){
      var pc_antivirus_notes=jQuery(this).val();
      $('#this_pc_antivirus_notes').val(pc_antivirus_notes);
    });
    $('input[name="pc_antivirus_maintenance"]').on('change',function(){
      var pc_antivirus_maintenance=jQuery(this).val();
      $('#this_pc_antivirus_maintenance').val(pc_antivirus_maintenance);
    });
    $('input[name="pc_antivirus_fix"]').on('change',function(){
      var pc_antivirus_fix=jQuery(this).val();
      $('#this_pc_antivirus_fix').val(pc_antivirus_fix);
    });
    
    $('#asset_checklist_17').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Cache</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_cache" id="pc_cache" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_cache" id="pc_cache" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_cache_notes" class="form-control" name="pc_cache_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_cache_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_cache_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_cache_fix" class="form-control" name="pc_cache_fix"></div></div>')
    $('input[name="pc_cache"]').on('change',function(){
      var pc_cache=jQuery(this).val();
      $('#this_pc_cache').val(pc_cache);
    });
    $('input[name="pc_cache_notes"]').on('change',function(){
      var pc_cache_notes=jQuery(this).val();
      $('#this_pc_cache_notes').val(pc_cache_notes);
    });
    $('input[name="pc_cache_maintenance"]').on('change',function(){
      var pc_cache_maintenance=jQuery(this).val();
      $('#this_pc_cache_maintenance').val(pc_cache_maintenance);
    });
    $('input[name="pc_cache_fix"]').on('change',function(){
      var pc_cache_fix=jQuery(this).val();
      $('#this_pc_cache_fix').val(pc_cache_fix);
    });
    $('#asset_checklist_18').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Wallpaper</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_wallpaper" id="pc_wallpaper" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_wallpaper" id="pc_wallpaper" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_wallpaper_notes" class="form-control" name="pc_wallpaper_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_wallpaper_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_wallpaper_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_wallpaper_fix" class="form-control" name="pc_wallpaper_fix"></div></div>')
    $('input[name="pc_wallpaper"]').on('change',function(){
      var pc_wallpaper=jQuery(this).val();
      $('#this_pc_wallpaper').val(pc_wallpaper);
    });
    $('input[name="pc_wallpaper_notes"]').on('change',function(){
      var pc_wallpaper_notes=jQuery(this).val();
      $('#this_pc_wallpaper_notes').val(pc_wallpaper_notes);
    });
    $('input[name="pc_wallpaper_maintenance"]').on('change',function(){
      var pc_wallpaper_maintenance=jQuery(this).val();
      $('#this_pc_wallpaper_maintenance').val(pc_wallpaper_maintenance);
    });
    $('input[name="pc_wallpaper_fix"]').on('change',function(){
      var pc_wallpaper_fix=jQuery(this).val();
      $('#this_pc_wallpaper_fix').val(pc_wallpaper_fix);
    });
    $('#asset_checklist_19').empty().append('<div class="row mx-1"><div class="col-12 pt-2 mt-2 bg bg-dark"><label class="form-label">Screen Saver</label></div></div><div class="row mx-1"><div class="col-3 border border-dark border-bottom-0 border-right-0 pt-2"><label class="form-label">Condition</label></div><div class="col-3 border border-dark border-bottom-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_screen_saver" id="pc_screen_saver" value="baik" >&nbsp;Good&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=radio name="pc_screen_saver" id="pc_screen_saver" value="buruk">&nbsp;Bad</div><div class="col-6 border border-dark border-bottom-0 border-left-0 py-1"><input type="text" id="pc_screen_saver_notes" class="form-control" name="pc_screen_saver_notes"></div></div><div class="row mx-1"><div class="col-3 border border-top-0 border-dark border-right-0 pt-2"><label class="form-label">Maintenance</label></div><div class="col-3 border border-dark border-top-0 border-left-0 border-right-0 pt-2"><input type=radio name="pc_screen_saver_maintenance" value="sudah" >&nbsp;Already&nbsp;&nbsp;<input type=radio name="pc_screen_saver_maintenance" value="belum" >&nbsp;Not Yet</div><div class="col-6 border border-top-0 border-dark border-left-0 py-1"><input type="text" id="pc_screen_saver_fix" class="form-control" name="pc_screen_saver_fix"></div></div>')
    $('input[name="pc_screen_saver"]').on('change',function(){
      var pc_screen_saver=jQuery(this).val();
      $('#this_pc_screen_saver').val(pc_screen_saver);
    });
    $('input[name="pc_screen_saver_notes"]').on('change',function(){
      var pc_screen_saver_notes=jQuery(this).val();
      $('#this_pc_screen_saver_notes').val(pc_screen_saver_notes);
    });
    $('input[name="pc_screen_saver_maintenance"]').on('change',function(){
      var pc_screen_saver_maintenance=jQuery(this).val();
      $('#this_pc_screen_saver_maintenance').val(pc_screen_saver_maintenance);
    });
    $('input[name="pc_screen_saver_fix"]').on('change',function(){
      var pc_screen_saver_fix=jQuery(this).val();
      $('#this_pc_screen_saver_fix').val(pc_screen_saver_fix);
    });
    
    
  }
  $("#myModal").modal('hide');
}