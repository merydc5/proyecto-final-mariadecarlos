/* 
    Interacción: 
    menú desplegable del navegador, al hacer click en el botón abrir, se abre y al hacer click en el botón cerrar, se recoge

    Estructura:
    constantes
    funciones
    */
//selección del nav con la clase ".navpeq"
const navegacion = document.querySelector(".navpeq");

//selección del botón con la clase ".abrir"
const abrir = document.querySelector(".abrir");

//selección del botón con la clase ".cerrar"
const cerrar = document.querySelector(".cerrar");

abrir.addEventListener("click", () => {
    navegacion.classList.add("desplegado");
});
//al hacer click en abrir se añade la clase desplegado
cerrar.addEventListener("click", () => {
    navegacion.classList.remove("desplegado");
//al hacer click en cerrar se quita la clase desplegado
});

/* 
    Interacción: 
    galería de fotos que al hacer click se aumenta la imagen y con flechas se puede pasar de una a otra

    Estructura:
    constantes
    variable 
    funciones
        forEach
        if/else
    */
//selección de todos los enlaces que tengan la clase .porfolio
const enlaces = document.querySelectorAll(".porfolio a");

//selección del div con la clase .modal
const modal = document.querySelector(".modal");

//selección de la imagen con la clase .modal
const imgModal = document.querySelector(".modal img");

//selección de todos los botones que tengan la clase .modal
const navegacionImg = document.querySelectorAll(".modal button");

//variable que dice que la imagen actual es igual a cero (false), se quita
let imgActual = 0;

enlaces.forEach((enlace, i) => {
    enlace.addEventListener("click", evento => {
    //al hacer click en en el enlace se aplica la función "evento"
        evento.preventDefault();
        imgActual = i;
        imgModal.setAttribute("src", enlaces[imgActual].getAttribute ("href"));
        //la función evento abre la imagen en la modal
        modal.classList.add("visible");
        //añade a la modal la clase visible
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});
//al hacer click se quita la clase "visible" de la "modal"

navegacionImg.forEach((flecha, i) =>{
    flecha.addEventListener("click", evento => {
    // al hacer click los botones "navegacionImg" (flechas dentro de modal) se aplica la función "flecha", que a su vez, activa la función evento

        evento.stopPropagation();
        //hace que pare la continuidad del evento
        if(i==0){
            imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
           //darle a la flecha para pasar a la anterior fotografía, y si está en la primera, vuelve a la última
        }else{
            imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
            //darle a la flecha para pasar a la siguiente fotografía, y vuelve a empezar al llegar a la última
        }
        imgModal.setAttribute("src", enlaces[imgActual].getAttribute ("href"));
        //según pasas de imagen en la modal, cambia también su enlace y su ruta
    });
});
