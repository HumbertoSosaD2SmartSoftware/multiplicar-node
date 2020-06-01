// const fs = require('fs');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch (commando) {
    case "listar":
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => { console.log(err); })
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} = ${base * i}\n`)
// }

// fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido creado');
// });


//console.log(argv);

// let param = argv[2]
// let base = param.split('=')[1];
//console.log(multiplicar);