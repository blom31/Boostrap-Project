/* === esta  primera línea del documneto garantiza que todos los elemntos del html esten cargados en el DOM   */
document.addEventListener('DOMContentLoaded', function() {

/*  =========== = = =  V A L I D A R   F O R M U L A R I O   D E   O R A D O R E S = = = ========*/
/*  =========== = = =  ------------------------------------ = = = ========*/
/*  =========== = = =  una forma e validar el primer formulario. pero este se hara con los atributos incorporados de HTML 5  = = = ========*/

/* traigo el objeto formulario para acceder a sus valores 
document.getElementById('formulario').addEventListener('submit', validarFormulario);

/* defino una función para obtener los valores de los campos a validar
    function validarFormulario(e){  
    e.preventDefault();

/*  identifico las variables de los campos a analizar
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let texto = document.getElementById('mensaje').value;

/* si los campos de las variables están vacios se lanza una alerta
     if (nombre === ""){
          alert('Por favor, coloque su nombre');
         }else if (apellido === ""){
             alert('Por favor, coloque su apellido');
             }else if (texto === ""){
                 alert('Por favor, escriba su mensaje');
            
                return  false; /* evita que se  mande el formulario vacio en caso de que haya algún servidor o mail a enviar los datos
            }  
    }
/*  =========== = = =  V A L I D A R   F O R M U L A R I O   D E   T I C K E T S  = = = ========*/
 
    /* traigo el objeto formulario para acceder a sus valores */
    const formulario2 = document.getElementById('formulario2');
    
    document.getElementById('resumen-button').addEventListener('click',validarFormulario2);
    /* traigo el formulario por si id*/ 
    
    /* defino una función para obtener los valores de los campos a validar*/
        function validarFormulario2(e){
            e.preventDefault();
            /*  identifico las variables de los campos a analizar*/
            let nombre = document.getElementById('Nombre').value;
            let apellido = document.getElementById('Apellido').value;
            let correo = document.getElementById('Correo').value;
            let cantidad = document.getElementById('Cantidad').value;
            

            /* si los campos de las variables están vacios se lanza una alerta*/
            if (nombre === ""){
                alert('El campo Nombre es obligatorio');
                }else if(apellido === ""){
                     alert('El campo Apellido es obligatorio');
                     }else if (correo === ""){
                        alert('El campo Correo es obligatorio');
                        }else if(cantidad === ""){
                            alert('El campo Cantidad es obligatorio');
                        }
               /* evita que se  mande el formulario vacio en caso de que haya algún servidor o mail a enviar los datos*/
           }
            /*esta es una forma*/
    /* traigo los elementos del formulario por sis id's
            const inputs = formulario2.elements;
     recorro con un for los elementos para validarlos
            for ( let i = 0 ; i < inputs.length; i++){
                    const tipos = inputs[i]; /*asigno una variable para guardadr el elemento para comparar*/

                /*evaluar que tipo de elemeto es
             if (tipos.type == 'text' || tipos.type=="email"|| tipos.type=="number"){
               si el elemento es de tipo texto o email o number, compruebo que no este vacio
                 if (tipos.value ===""){
                     alert('Por favor, rellene todos los campos');
                     alert ("El campo " + tipos.id + " es obligatorio");
                     tipos.style.borderColor = "red";
                     return false;
                    }
                }    
            }
            
            return true;
        }*/

        /*  =========== = = =  C A L C U L A R    M O N T O    A    P A G A R  = = = ========*/
        const estudiante = 0.80;
        const trainee = 0.50;
        const junior = 0.15;
        const entrada = 200;

        function totalPagar(){
            
            /* obtengo los id de los campos a calcular*/
            let cantidad = document.getElementById('Cantidad').value;
            let categoria = document.getElementById('Categoria').value;
            let totalPagar = document.getElementById('totalPagar');
            let total = 0;
            /*uso el SWITCH para calcular el monto segun categoria*/
            switch (categoria){
                case 'Estudiante':  
                    total = (cantidad *entrada)* estudiante;
                    break;
                case 'Trainee':   
                    total = (cantidad *entrada) * trainee;
                    break;
                case 'Junior':
                    total = (cantidad *entrada)*junior;
                    break;
            }
            /*asigo al campo totalpagar el monto calculado*/
            totalPagar.value = "Total a Pagar: $" + total.toFixed(2);
      }
      
      document.getElementById('resumen-button').addEventListener('click',totalPagar);
      
})/* esto cierra la funcion del DOM*/
