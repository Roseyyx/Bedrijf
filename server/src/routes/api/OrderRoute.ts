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
})

// Create Order
router.post('/', async (req: Request, res: Response) => {
})

// Read Order
router.get('/', async (req: Request, res: Response) => {
})

// Update Order
router.put('/:id', async (req: Request, res: Response) => {})

// Delete Order
router.delete('/:id', async (req: Request, res: Response) => {})

module.exports = router
