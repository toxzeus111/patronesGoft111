*//  el problema se presenta en que al solicitar unos datos en especificos llegan otros datos innecesarios para 
*//proceso aplicando este patron se puede seleccionar el dato que se necesita mas facilmente.como podemos observar
// son varios componentes en estudiante pero solo necesitamos unos cuantos gracias a ello nos permite seleccionar es mucho mas practico

class estudiante{
    setnombre(nombre){
        this.nombre = nombre;
        return this
    }
    
    setapellido(apellido){
        this.apellido = apellido;
        return this;

    }

    setfacultad(facultad){
        this.facultad = facultad;
        return this;

    }
    
    setcorreo(correo){
        this.correo = correo
        return this;
    }
    
    bake(){
        console.log(this)
    }


}


module.exports = estudiante;
