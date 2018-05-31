const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', {
        base: {
            demand: true, //indica que es obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true, //indica que es obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}