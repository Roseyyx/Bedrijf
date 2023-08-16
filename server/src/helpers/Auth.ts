/** @format */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export const hasPermission = async (req: any, res: any, next: any) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
    } catch (error) {
        return res.status(500).json({ message: error })
    } finally {
        await prisma.$disconnect()
    }
    
    return next();
}
