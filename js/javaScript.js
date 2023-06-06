const formulario1 = document.getElementById('formulario1');
const inputs = document.querySelectorAll('#formulario1 input');

const expresiones ={
    nombre:/^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    apellido:/^[a-zA-ZÁ-\s]{1,40}$/,
    correo: /^\d{7,14}$/
}

const validarFormulario=(e)=>{
    /*console.log('se ejecutó');*/ /*comprueba que se ejecuta el codigo de la línea 15-17*/
    /*console.log(e.target.name); /* con esto se demuestra el campo que se está validando*/
    switch(e.target.name){
        case "nombre":
           /* console.log('funciona nombre') /*esto hace puntual que se valdia ese campo*/
            if(expresiones.nombre.test(e.target.value))
           break;
        case "apellido":
           /* console.log('funciona apellido') /*esto hace puntual que se valdia ese campo*/
        break;
    }    
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario1.addEventListener('submit', (e)=>{
    e.preventDefault();
});