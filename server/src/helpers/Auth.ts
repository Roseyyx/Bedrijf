import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const hasPermission = async (req: any, res: any, next: any) => {
    const { username, email, password } = req.body
    const user = await prisma.user.findUnique({
        where: {
            name: username,
            email: email,
            password: password
        }
    })
    if (user && user.role === "ADMIN" && req.ip === "127.0.0.1"){
        next()
    } else {
        res.status(401).json({ message: "Unauthorized" })
    }
}