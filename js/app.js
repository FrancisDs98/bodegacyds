/*Slider*/
if(document.querySelector('.contenedor-slider')){

    let index=1;
    let selectedIndex=1;

    const slides=document.querySelector('.slider');
    const slide=slides.children;
    const slidesTotal=slides.childElementCount;

    const dots=document.querySelector('.dots');
    const prev=document.querySelector('.prev');
    const next=document.querySelector('.next');


    //agregamos los punto de acuerdo a la cantidad de slides
    for (let i = 0; i < slidesTotal; i++) {
        dots.innerHTML +='<span class="dot"></span>';
    }
    
    //ejecutamos la funcion
    mostrarSlider(index);

    //hacemos que nuestro slide sea automatico
    setInterval(()=>{
        mostrarSlider(index=selectedIndex);
    },5000); //rempresentados en milesegundos

    //funcion para mostrar el slider
    function mostrarSlider(num){
        if(selectedIndex > slidesTotal){
            selectedIndex=1;
        }else{
            selectedIndex++;
        }

        if(num > slidesTotal){
            index=1;
        }

        if(num<1){
            index=slidesTotal;
        }

        //removemos la clase active de todos los slide
        for(let i=0; i<slidesTotal;i++){
            slide[i].classList.remove('active');
        }

        //removemos la clase active de los puntos

        for (let x = 0; x < dots.children.length; x++) {
            dots.children[x].classList.remove('active');
        }

        //mostramos el slide
        slide[index-1].classList.add('active');

        //agregamos la clase active al punto donde se encuntra el slide
        dots.children[index-1].classList.add('active');

        
    }

    //evento para nuestro botones prev y next
    next.addEventListener('click',(e)=>{
        mostrarSlider(index +=1);
        selectedIndex=index;
    });

    prev.addEventListener('click',(e)=>{
        mostrarSlider(index +=-1);
        selectedIndex=index;
    });

    //puntos
    for (let y = 0; y < dots.children.length; y++) {
        
        //por cada dot que ecuentre le agregamos el evento click y ejecutamo la funcion de slide
        dots.children[y].addEventListener('click',()=>{
            mostrarSlider(index=y+1);
            selectedIndex=y+1;
        });
    }

}
/*
------------------------------------ CONTACTO -----------------
*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,14}$/,
	dni: /^\d{7,10}$/ 
}

const campos = {
	nombre: false,
	apellido: false,
	correo: false,
	telefono: false,
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.correo && campos.telefono){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});