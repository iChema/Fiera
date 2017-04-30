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
                titulo: '¿Cuál es tu nombre?',
                respuesta: 'Leonardo',
                correcta: false
            },
            {
                titulo: '¿Cuál es tu apellido?',
                respuesta: 'Lira',
                correcta: false
            },
            {
                titulo: '¿Cuál es tu apellido segundo?',
                respuesta: 'Becerra',
                correcta: false
            }
        ];

        var choose = Math.floor(Math.random() * 2);
        if (!preguntas[choose].correcta) {
            var html = '' +
                '<div class="list-block">' +
                    '<ul>' +
                        '<li>' +
                            '<div class="item-content">' +
                                '<div class="item-inner">' +
                                    '<div class="item-title color-teal">' + preguntas[choose].titulo + '</div>' +
                                '</div>' +
                                '<div class="item-inner">' +
                                    '<div class="item-input">' +
                                        '<input type="text" name="name" onchange="' +
                                        ' if(this.val() == preguntas[choose].respuesta) {' +
                                            'preguntas[choose].correcta = true;' +
                                            'myApp.alert(\'Tu respuesa es correcta!\');' +
                                        '} else {' +
                                            'preguntas[choose].correcta = false;' +
                                            'myApp.alert(\'Tu respuesa es incorrecta.\');' +
                                        '} " placeholder="Respuesta">' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</li>' +
                    '</ul>'+
                '</div>';
            myApp.alert(html);
        }
    }
});

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
});