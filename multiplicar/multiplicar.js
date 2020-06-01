const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log("================".green);
    console.log(`Tabla del ${base}`.green);
    console.log("================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un numero`)
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`)
        }
        if (limite > 10 || limite < 10)
            fs.writeFile(`tablas/tabla ${base} con limite ${limite}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla ${base} con limite ${limite}.txt`)
            });

        else
            fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla ${base}.txt`)
            });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
};