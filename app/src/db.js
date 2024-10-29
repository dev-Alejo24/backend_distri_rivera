const mysql = require('mysql2/promise');
const Respuesta = require('../model/respuesta');

const jsonConexion = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'proyecto_bd2',
    port: 3306
};

async function listar(query, tablas = false) {
    let respuesta = new Respuesta();
    try {
        const connection = await mysql.createConnection(jsonConexion);
        const [filas] = await connection.query(query);
        connection.end();

        respuesta.exito = true;
        respuesta.estado = 200;
        respuesta.mensaje = "exito";
        respuesta.resultado = !tablas ? filas[0] : filas;
        return respuesta;
    } catch (error) {
        respuesta.exito = false;
        respuesta.estado = 400;
        respuesta.mensaje = error.sqlMessage || error.message;
        return respuesta;
    }
}

async function ejecutar(query) {
    let respuesta = new Respuesta();
    try {
        const connection = await mysql.createConnection(jsonConexion);
        const [result] = await connection.query(query);
        connection.end();

        respuesta.exito = true;
        respuesta.estado = 200;
        respuesta.mensaje = "exito";
        respuesta.resultado = result;
        return respuesta;
    } catch (error) {
        respuesta.exito = false;
        respuesta.estado = 400;
        respuesta.mensaje = error.sqlMessage || error.message;
        return respuesta;
    }
}

module.exports = {
    ejecutar,
    listar
};