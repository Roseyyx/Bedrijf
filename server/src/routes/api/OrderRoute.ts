/** @format */

const router = require('express').Router()
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

// Create Product on Order
router.post('/product', async (req: Request, res: Response) => {
})


// Create Order Status
router.post('/orderStatus', async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        const orderStatus = await prisma.orderStatus.create({
            data: {
                name,
            },
        })
        res.status(201).json(orderStatus)
    } catch (error) {
        res.status(500).json({ message: error })
    } finally{
        await prisma.$disconnect()
    }
})

// Create Order
router.post('/', async (req: Request, res: Response) => {
    try {
        const order = await prisma.order.create({
            data: {
                userId: 1,
                statusId: 1,
            }
        })
        res.status(201).json(order)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    } finally{
        await prisma.$disconnect()
    }
})

// Read Order
router.get('/', async (req: Request, res: Response) => {
})

// Update Order
router.put('/:id', async (req: Request, res: Response) => {})

// Delete Order
router.delete('/:id', async (req: Request, res: Response) => {})

module.exports = router
