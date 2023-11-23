/* Mi funcion solo pedira al usuario ingresar el annio actual
y lo calculara usando el annio de fabricacion del vehiculo
que se encuentra dentro del objeto*/

function validarTaxi(actuallyYear){
    let taxi={
        color:"white",
        placa: "ABC-1234",
        year: 2009
    }

    actuallyYear = Number(prompt("Ingrese el annio actual"));
    let age = actuallyYear - taxi.year;
    
    if(age < 10){
        return true;
    }else{
        return false;
    }
    
}

let vigencia = validarTaxi();
alert(vigencia);
