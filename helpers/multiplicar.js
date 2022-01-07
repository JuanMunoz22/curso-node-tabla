const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 0, listar=false, limite=10) => {

    try {
        let salida, consola = '';

        for (let i = 1; i <= limite; i++) {
            salida+=(`${base} x ${i} = ${base*i} \n`);
            consola+=(`${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`);
        }

        //fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            //    if (err) throw err;
            //
            //});

        if(listar){
            console.log('============================'.green);
            console.log('     Tabla del: '.green, colors.blue(base));
            console.log('============================'.green);
    
            console.log(consola);
        }

        let nombreArchivo = `./salida/tabla-${base}.txt`;

        fs.writeFileSync(nombreArchivo, salida);
        return nombreArchivo;    
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}