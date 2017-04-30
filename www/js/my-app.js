// Initialize app
var myApp = new Framework7({
    swipePanel: 'left'
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    welcomescreen.open();
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
    myApp.closePanel();

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }

    if (page.name == 'login') {
        myApp.params.swipePanel = false;
    }

    if (page.name == 'fairplay') {
        var preguntas = [
            {
                titulo: '¿Cuántas tarjetas amarillas se necesitan para una expulsión?',
                respuesta: '2',
                correcta: false
            },
            {
                titulo: '¿Cuándo un jugador sobrepasa la línea defensiva, qué violación se marca?',
                respuesta: 'Fuera de lugar',
                correcta: false
            },
            {
                titulo: '¿Qué significado tiene la tarjeta roja?',
                respuesta: 'Expulsión',
                correcta: false
            }
        ];

        var choose = Math.floor(Math.random() * 2);
        if (!preguntas[choose].correcta) {
            myApp.prompt(preguntas[choose].titulo, 'Pregunta', function (value) {
                if (value == preguntas[choose].respuesta) {
                    preguntas[choose].correcta = true;
                    myApp.alert('Tu respuesta es correcta', '¡Felicidades!');
                } else {
                    myApp.alert('Tu respuesta es incorrecta', '¡Lo siento!');
                }
            });
        }
    }

    if (page.name == 'salud') {
        var preguntas = [
            {
                titulo: '¿Cuántos litros de agua debes tomar diariamente?',
                respuesta: '2',
                correcta: false
            },
            {
                titulo: '¿Cuántos minutos de ejercicio debes realizar al día?',
                respuesta: '30',
                correcta: false
            },
            {
                titulo: '¿Es bueno para los jugadores consumir sustancias ajenas a su dieta?',
                respuesta: 'No',
                correcta: false
            }
        ];

        var choose = Math.floor(Math.random() * 2);
        if (!preguntas[choose].correcta) {
            myApp.prompt(preguntas[choose].titulo, 'Pregunta', function (value) {
                if (value == preguntas[choose].respuesta) {
                    preguntas[choose].correcta = true;
                    myApp.alert('Tu respuesta es correcta', '¡Felicidades!');
                } else {
                    myApp.alert('Tu respuesta es incorrecta', '¡Lo siento!');
                }
            });
        }
    }

    if (page.name == 'nutricion') {
        var preguntas = [
            {
                titulo: '¿Cuántos calorias son recomendadas para una buena salud en una persona deportista promedio?',
                respuesta: '2600',
                correcta: false
            },
            {
                titulo: '¿Crees que los fútbolistas lleven alguna dieta para su salud?',
                respuesta: 'Si',
                correcta: false
            },
            {
                titulo: '¿Es bueno para los jugadores consumir alimentos altos en carbohídratos',
                respuesta: 'No',
                correcta: false
            }
        ];

        var choose = Math.floor(Math.random() * 2);
        if (!preguntas[choose].correcta) {
            myApp.prompt(preguntas[choose].titulo, 'Pregunta', function (value) {
                if (value == preguntas[choose].respuesta) {
                    preguntas[choose].correcta = true;
                    myApp.alert('Tu respuesta es correcta', '¡Felicidades!');
                } else {
                    myApp.alert('Tu respuesta es incorrecta', '¡Lo siento!');
                }
            });
        }
    }
});

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
});