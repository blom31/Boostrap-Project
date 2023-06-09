/*  =========== = = =  V A L I D A R   F O R M U L A R I O   D E   O R A D O R E S = = = ========*/

/* traigo el objeto formulario para acceder a sus valores */

document.getElementById('formulario').addEventListener('submit', validarFormulario);
document.getElementById('formulario2');

/* defino una función para obtener los valores de los campos a validar*/

function validarFormulario(e){  
    e.preventDefault();

    /*  identifico las variables de los campos a analizar*/
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let texto = document.getElementById('mensaje').value;
    
    /* si los campos de las variables están vacios se lanza una alerta*/
    if (nombre === ""){
        alert('Por favor, coloque su nombre');
        }else if (apellido === ""){
            alert('Por favor, coloque su apellido');
            }else if (texto === ""){
                alert('Por favor, escriba su mensaje');
                
                return  false; /* evita que se  mande el formulario vacio en caso de que haya algún servidor o mail a enviar los datos*/
    }
}
/*  =========== = = =  V A L I D A R   F O R M U L A R I O   D E   T I C K E T S  = = = ========*/

