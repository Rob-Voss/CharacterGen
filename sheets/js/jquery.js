
window.onload = function() {
	// alert( "welcome" );
}


$(document).ready(function() {
	
	function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#print-picture').css('background', 'transparent url('+e.target.result +') center top no-repeat');
                $('#print-picture').css('background-size', '100% auto');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#picture-upload").change(function(){
        readURL(this);
    });
    
	
	$('.sk-input').change(
		function() {
			updateSkillPoints();
		}
	);

});


$( '.sk-input' ).change(function() {
	alert( "Handler for .change() called.");
});


