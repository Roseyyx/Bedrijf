/** @format */

const router = require('express').Router()
import {PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()
import { hasPermission } from '../../helpers/Auth' 

// Create Role
router.post('/', async (req: Request, res: Response) => {
    const {name} = req.body

    try {
        const role = await prisma.roles.create({
            data: {
                name,
            }
        })
        
        res.status(201).json(role)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error})
    } finally{
        await prisma.$disconnect()
    }
})

// Read Role
router.get('/', async (req: Request, res: Response) => {
    try {
        const roles = await prisma.roles.findMany()
        res.status(200).json(roles)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    } finally{
        await prisma.$disconnect()
    }
})

// Update Role
router.put('/:id', async (req: Request, res: Response) => {
})

// Delete Role
router.delete('/:id', async (req: Request, res: Response) => {
})

module.exports = router
