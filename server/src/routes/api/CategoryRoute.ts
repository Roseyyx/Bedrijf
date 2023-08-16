/** @format */

const router = require('express').Router()
import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

// Create Category
router.post('/', async (req: Request, res: Response) => {
    const {name} = req.body

	try {
        const category = await prisma.categories.create({
            data: {
                name
            }
        })

		res.status(201).json(category)
	} catch (error) {
		res.status(500).json({ message: error })
	} finally {
		await prisma.$disconnect()
	}
})

// Read Category
router.get('/', async (req: Request, res: Response) => {
    try {
        const categories = await prisma.categories.findMany()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ message: error })
    } finally{
        await prisma.$disconnect()
    }
})

// Update Category
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name } = req.body

        const category = await prisma.categories.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name
            }
        })

        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error })
    } finally {
        await prisma.$disconnect()
    }
})

// Delete Category
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const category = await prisma.categories.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error })
    } finally{
        await prisma.$disconnect()
    }
})

module.exports = router
