import mysql, { ConnectionOptions } from 'mysql2/promise';
import { options } from './config'

const access: ConnectionOptions = options

export const conn = mysql.createConnection(access);
