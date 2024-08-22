import { User } from "../types";
import { conn } from "../database/connection";
import { RowDataPacket } from "mysql2";

export async function saveUserInfo(user: User) {
    (await conn).query(`INSERT INTO users_test_damianbruzzoni SET ?`, user);
}

export async function createTable() {
    try {
        const response = (await conn)
            .query(`CREATE TABLE IF NOT EXISTS users_test_damianbruzzoni (
                  id INT AUTO_INCREMENT PRIMARY KEY,
                  nombre VARCHAR(255),
                  segundo_nombre VARCHAR(255),
                  apellido_paterno VARCHAR(255),
                  apellido_materno VARCHAR(255),
                  fecha_de_nacimiento VARCHAR(255),
                  email VARCHAR(255),
                  phone VARCHAR(255)
                )`);
        return response;
    } catch (error) {
        console.log("could not create table", error);
    }
}

export async function getUsers() {
    const response = (await conn)
        .query<RowDataPacket[]>(`SELECT * FROM users_test_damianbruzzoni`)
        .then((data) => data[0]);
    return response;
}