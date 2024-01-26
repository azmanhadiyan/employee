$('.tab-com a').click(function(e){
    //make all tabs inactive
    $('.pdf_documents a').removeClass('active');
    //then make the clicked tab active
    $(this).addClass('active');    
    $('.pdf_box .legales').hide();
    $('.pdf_box .comerciales').show();
});


$('.tab-leg a').click(function(e){
    //make all tabs inactive
    $('.pdf_documents a').removeClass('active');
    //then make the clicked tab active
    $(this).addClass('active');
    $('.pdf_box .comerciales').hide();
    $('.pdf_box .legales').show();
});