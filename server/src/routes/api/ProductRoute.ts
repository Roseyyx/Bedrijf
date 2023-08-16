/** @format */

const router = require('express').Router()
import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

// Create Product
router.post('/', async (req: Request, res: Response) => {
    const { name, price, description, image, specs, category} = req.body
    const json = req.body.options as Prisma.JsonArray

	try {
        const Category = await prisma.categories.findUnique({
            where: {
                name: category
            }
        })
        if (!Category) {
            return res.status(404).json({ message: "Category not found" })
        }

		const product = await prisma.product.create({
			data: {
				name,
				price,
				description,
				image,
                specs,
                options: json,
                categoryId: Category.id
			}
		})

		res.status(201).json(product)
	} catch (error) {
		res.status(500).json({ message: error })
	} finally {
		await prisma.$disconnect()
	}
})

// Read Product
router.get('/', async (req: Request, res: Response) => {
	try {
		const products = await prisma.product.findMany()
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({ message: error })
	} finally {
		await prisma.$disconnect()
	}
})

router.get("/:category", async (req: Request, res: Response) => {
    const { category } = req.params
    try {
        const products = await prisma.product.findMany({
            where: {
                category: {
                    name: category
                }
            }
        })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error })
    } finally {
        await prisma.$disconnect()
    }
})

// Update Product
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, price, description, image } = req.body
    try {
        const product = await prisma.product.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                price,
                description,
                image
            }
        })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error })
    } finally {
        await prisma.$disconnect()
    }
})

// Delete Product
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const product = await prisma.product.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error })
    } finally {
        await prisma.$disconnect()
    }
})

module.exports = router
