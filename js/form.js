$('input:radio[name="priv"]').change(function(){
    if($(this).val() == 'company'){
       $('.company-block').css('display', 'block');
    }
    else{
    	 $('.company-block').css('display', 'none');
    }
});

$('#form-btn').click(function(){
	$('#form').css('display', 'none');
	$('.checked').css('display', 'block');
});
$('.checked').click(function(){
	$('#form').css('display', 'flex');
	$('.checked').css('display', 'none');
});