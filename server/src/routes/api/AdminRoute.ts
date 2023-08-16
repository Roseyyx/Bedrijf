/** @format */

const router = require('express').Router()
import {PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()
import { hasPermission } from '../../helpers/Auth' 
const bcrypt = require('bcrypt');

// Create Admin
router.post('/', /*(hasPermission),*/ async (req: Request, res: Response) => {
    const { username, email, password, role} = req.body
    try {
        let saltedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name: username,
                email: email,
                password: saltedPassword,
                role
            }
        })
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    } finally {
        await prisma.$disconnect()
    }
})

// Read Admin
router.get('/', async (req: Request, res: Response) => {

})

// Update Admin
router.put('/:id', async (req: Request, res: Response) => {
})

// Delete Admin
router.delete('/:id', async (req: Request, res: Response) => {
})

module.exports = router
