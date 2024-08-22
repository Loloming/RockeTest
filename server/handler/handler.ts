import { saveUserInfo, getUsers } from "../controller/controller";
import { Request, Response } from "express";

export async function handleUserSave(req: Request, res: Response) {
    try {
        const { nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_de_nacimiento, email, phone } = await req.body
        const response = await saveUserInfo({
            nombre,
            segundo_nombre,
            apellido_paterno,
            apellido_materno,
            fecha_de_nacimiento,
            email,
            phone,
        })
        res.status(200).json({
            message: "user saved successfully",
            data: response
        })
    } catch (error) {
        console.log(error)
    }
}

export async function handleGetUsers(req: Request, res: Response) {
    try {
        const response = await getUsers()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}