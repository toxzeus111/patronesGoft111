const estudiante = require('./estudiante');

const ingresado = new estudiante();


ingresado.setnombre("daniel").setapellido("isaza").setfacultad("software").bake();


const expulsado = new estudiante();

expulsado.setnombre("jose").setfacultad("bienestar").setcorreo("jose111@gmail.com").bake();


