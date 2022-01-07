
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


require('colors');


console.clear();

//console.log('base: yargs', argv.b);
//console.log('listar: yargs', argv.l);
//const [,,arg3 = 'base=0'] = process.argv;
//const [, base] = arg3.split('=');

//const base = 7;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));