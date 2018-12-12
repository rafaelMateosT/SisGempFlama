﻿
//Aqui cargamos 
window.onload = inicializaPagina;

function inicializaPagina() {

    getListadoPersonas();
}

/*
 
 Funcion ejemplo para crear una tabla

 */ 

function tableCreate(ListadoPersonas) {

    // var body = document.getElementsByTagName('body')[0];//Cogemos el primer elemento del array para que solo haya un body
    var div = document.getElementById('divDeTabla');
    div.setAttribute('class', 'table-responsive-vertical shadow-z-1');
    var tbl = document.createElement('table');
    tbl.setAttribute('class', 'mdl-data-table mdl-js-data-table mdl-shadow--2dp');
    tbl.setAttribute('border', '1');


    var tbdy = document.createElement('tbody');

    for (var i = 0; i < ListadoPersonas.length; i++) {

        //Añadimos las filas segun la longitud del array
        //Al crear las filas tenemos que tener en cuenta la cantidad de personas que vamos a tener en nuestro array.
        var hilera = document.createElement('tr');

        for (var prop in ListadoPersonas[0]) {

            var celda = document.createElement('td');
            var textocelda = document.createTextNode(ListadoPersonas[i][prop])


            celda.appendChild(textocelda);
            hilera.appendChild(celda);
          
        }
        var botonEditar = document.createElement("td");


        tbdy.appendChild(hilera);
    }

    tbl.appendChild(tbdy);
    document.getElementById('divDeTabla').appendChild(tbl);
  
}


/*
 Funcion JS la cual hara una llamada a la api y nos devolvera un listado de las personas.
 */
function getListadoPersonas() {

    //alert('Hellow da'):
    var millamada = new XMLHttpRequest();
    //millamada.open('GET', "/Default/Index");
    millamada.open('GET', "https://rafaapirestpersona.azurewebsites.net/api/personas/");

    //Mientras vienen los datos
    millamada.onreadystatechange = function () {

        var ArrayPersonas;

        //alert(millamada.readyState);
        if (millamada.readyState < 4) {

            //TODO

        } else if (millamada.readyState == 4 && millamada.status == 200) {

            //var oPersona = new Persona();
            ArrayPersonas = JSON.parse(millamada.responseText);
            tableCreate(ArrayPersonas);
        
        }
        
    }

    millamada.send();
    

  

}