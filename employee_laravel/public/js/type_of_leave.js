
$("#date1").change(function(){
    setSecondDate();
});
$('#date2').change(function(){
  setTotal();
})
$('#user_type').change(function(){
  var user_type=jQuery(this).val();
  if(user_type=='User'){
    document.getElementById("device_type").style.visibility="visible";
    document.getElementById("text_device_type").style.visibility="visible";
  }
  else{
    document.getElementById("device_type").style.visibility="hidden";
    document.getElementById("text_device_type").style.visibility="hidden";
  }
});

$('input[name="cpu_maintenance"]').on('change', function() {
    $('textarea[name="cpu_fix"]').attr('disabled', false).focus();
});
$('input[name="monitor"]').on('change', function() {
    $('textarea[name="monitor_notes"]').attr('disabled', false).focus();
});
$('input[name="monitor_maintenance"]').on('change', function() {
    $('textarea[name="monitor_fix"]').attr('disabled', false).focus();
});
$('input[name="keyboard"]').on('change', function() {
    $('textarea[name="keyboard_notes"]').attr('disabled', false).focus();
});
$('input[name="keyboard_maintenance"]').on('change', function() {
    $('textarea[name="keyboard_fix"]').attr('disabled', false).focus();
});
$('input[name="mouse"]').on('change', function() {
    $('textarea[name="mouse_notes"]').attr('disabled', false).focus();
});
$('input[name="mouse_maintenance"]').on('change', function() {
    $('textarea[name="mouse_fix"]').attr('disabled', false).focus();
});
$('input[name="printer"]').on('change', function() {
    $('textarea[name="printer_notes"]').attr('disabled', false).focus();
});
$('input[name="printer_maintenance"]').on('change', function() {
    $('textarea[name="printer_fix"]').attr('disabled', false).focus();
});
$('input[name="scanner"]').on('change', function() {
    $('textarea[name="scanner_notes"]').attr('disabled', false).focus();
});
$('input[name="scanner_maintenance"]').on('change', function() {
    $('textarea[name="scanner_fix"]').attr('disabled', false).focus();
});
$('input[name="cctv"]').on('change', function() {
    $('textarea[name="cctv_notes"]').attr('disabled', false).focus();
});
$('input[name="cctv_maintenance"]').on('change', function() {
    $('textarea[name="cctv_fix"]').attr('disabled', false).focus();
});
$('input[name="cctv_maintenance"]').on('change', function() {
    $('textarea[name="cctv_fix"]').attr('disabled', false).focus();
});
$('input[name="telephone"]').on('change', function() {
    $('textarea[name="telephone_notes"]').attr('disabled', false).focus();
});
$('input[name="telephone_maintenance"]').on('change', function() {
    $('textarea[name="telephone_fix"]').attr('disabled', false).focus();
});
$('input[name="windows"]').on('change', function() {
    $('textarea[name="windows_notes"]').attr('disabled', false).focus();
});
$('input[name="windows_maintenance"]').on('change', function() {
    $('textarea[name="windows_fix"]').attr('disabled', false).focus();
});
$('input[name="antivirus"]').on('change', function() {
    $('textarea[name="antivirus_notes"]').attr('disabled', false).focus();
});
$('input[name="antivirus_maintenance"]').on('change', function() {
    $('textarea[name="antivirus_fix"]').attr('disabled', false).focus();
});
$('input[name="cache"]').on('change', function() {
    $('textarea[name="cache_notes"]').attr('disabled', false).focus();
});
$('input[name="cache_maintenance"]').on('change', function() {
    $('textarea[name="cache_fix"]').attr('disabled', false).focus();
});
$('input[name="wallpaper"]').on('change', function() {
    $('textarea[name="wallpaper_notes"]').attr('disabled', false).focus();
});
$('input[name="wallpaper_maintenance"]').on('change', function() {
    $('textarea[name="wallpaper_fix"]').attr('disabled', false).focus();
});
$('input[name="screen_saver"]').on('change', function() {
    $('textarea[name="screen_saver_notes"]').attr('disabled', false).focus();
});
$('input[name="screen_saver"]').on('change', function() {
    $('textarea[name="screen_saver_notes"]').attr('disabled', false).focus();
});
$('input[name="screen_saver_maintenance"]').on('change', function() {
    $('textarea[name="screen_saver_fix"]').attr('disabled', false).focus();
});
$('input[name="password"]').on('change', function() {
    $('textarea[name="password_notes"]').attr('disabled', false).focus();
});
$('input[name="password_maintenance"]').on('change', function() {
    $('textarea[name="password_fix"]').attr('disabled', false).focus();
});
$('input[name="fingerprint"]').on('change', function() {
    $('textarea[name="fingerprint_notes"]').attr('disabled', false).focus();
});
$('input[name="fingerprint_maintenance"]').on('change', function() {
    $('textarea[name="fingerprint_fix"]').attr('disabled', false).focus();
});

$("#total_leave").change(function(){
    setSecondDate();
});
    $("#type_of_leave").change(function(){
      var type_of_leave=jQuery(this).val();
      if(type_of_leave=='Tahunan'){
        $('#total_leave').val('');
        $(".myDiv").hide();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        setSecondDate();
      }
      else if(type_of_leave=='Menikah'){

        $('#total_leave').val('3');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Undangan / Bukti nikah';
        document.getElementById('attachment_label_2').innerHTML = 'Fotocopy KK';
        document.getElementById('attachment_label_3').innerHTML = 'Fc akte cerai (kalau nikah lebih dr sekali)';
        setSecondDate();
      }
      else if(type_of_leave=='Menikahkan anak'){
        $('#total_leave').val('2');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Undangan / Bukti nikah';
        document.getElementById('attachment_label_2').innerHTML = 'Fotocopy KK';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Istri melahirkan/kuguguran'){
        $('#total_leave').val('2');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Surat keterangan';
        document.getElementById('attachment_label_2').innerHTML = 'Fotocopy KK';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Khitanan/Baptis'){
        $('#total_leave').val('2');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Surat undangan / Bukti khitan';
        document.getElementById('attachment_label_2').innerHTML = 'Fotocopy KK';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Melahirkan'){
        $('#total_leave').val('90');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'USG';
        document.getElementById('attachment_label_2').innerHTML = 'Surat keterangan usia kehamilan';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Kematian keluarga inti'){
        $('#total_leave').val('2');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Surat kuning';
        document.getElementById('attachment_label_2').innerHTML = 'Fotocopy KK';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Kematian keluarga serumah'){
        $('#total_leave').val('1');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Surat kuning';
        document.getElementById('attachment_label_2').innerHTML = 'Fotocopy KK';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Sakit'){
        $('#total_leave').val('');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Surat Dokter';
        document.getElementById('attachment_label_2').innerHTML = 'Resep Dokter';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Haid'){
        $('#total_leave').val('');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'Surat sakit';
        document.getElementById('attachment_label_2').innerHTML = 'Diagnosa terlampir';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
      else if(type_of_leave=='Keguguran'){
        $('#total_leave').val('45');
        $(".myDiv").show();
        $('input[name=attachment_leaves1]')[0].value='';
        document.getElementById('imagePreview').innerHTML = '';
        $('input[name=attachment_leaves2]')[0].value='';
        document.getElementById('imagePreview2').innerHTML = '';
        $('input[name=attachment_leaves3]')[0].value='';
        document.getElementById('imagePreview3').innerHTML = '';
        document.getElementById('attachment_label_1').innerHTML = 'USG';
        document.getElementById('attachment_label_2').innerHTML = 'Hasil keguguran';
        document.getElementById('attachment_label_3').innerHTML = 'Lain-lain';
        setSecondDate();
      }
    });
    function setTotal(){
      var startDate = new Date(document.getElementById("date1").value);
      var endDate = new Date(document.getElementById("date2").value);
      var Difference_In_Time =  endDate.getTime() - startDate.getTime();
      var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24))+1;
      document.getElementById("total_leave").value = Difference_In_Days;
    }
    function setSecondDate() {
        var days = document.getElementById("total_leave").value;
        var startDate = new Date(document.getElementById("date1").value);
        function myCallback(response){
          window.holiday=new Array();
          for(var k in response) {
            response.forEach(function(element){
              holiday.push(new Date(element));
            });
          }
        }
        jQuery.ajax({
          url : '/holiday/getdate',
          type : "GET",
          dataType : "json",
          success:myCallback
        });
        if(parseInt(days)=='1'){
            document.getElementById("date2").valueAsDate=startDate;
        }
        else if(parseInt(days)=='90'){
            var dt = new Date(document.getElementById("date1").value);
            dt.setMonth( dt.getMonth() + 3 );
            document.getElementById("date2").valueAsDate=dt;
        }
        else if(parseInt(days)=='45'){
            var dt = new Date(document.getElementById("date1").value);
            dt.setMonth( dt.getMonth() + 1 );
            date2=add_weeks(dt,2);
            document.getElementById("date2").valueAsDate=date2;
        }
        else{
          var endDate = "", noOfDaysToAdd = parseInt(days), count = 1;
          while(count < noOfDaysToAdd){
            endDate = new Date(startDate.setDate(startDate.getDate() + 1));
            if (endDate.getDay() != 0 && endDate.getDay() != 6 && !isHoliday(endDate, window.holiday)) {
              count++;
            }
          }
          document.getElementById("date2").valueAsDate = endDate;
        }
    function add_weeks(dt, n) 
    {
      return new Date(dt.setDate(dt.getDate() + (n * 7)));      
    } 
    function isHoliday(dt, arr){
      var bln = false;
      for ( var i = 0; i < arr.length; i++) {
        if (compare(dt, arr[i])) { //If days are not holidays
          bln = true;
          break;
        }
      }
      return bln;
    }
    function compare(dt1, dt2){
      var equal = false;
      if(dt1.getDate() == dt2.getDate() && dt1.getMonth() == dt2.getMonth() && dt1.getFullYear() == dt2.getFullYear()) {
        equal = true;
      }
      return equal;
    }
  }