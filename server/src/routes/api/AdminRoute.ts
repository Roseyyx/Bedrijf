/** @format */

const router = require('express').Router()
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()
import { hasPermission } from '../../helpers/Auth'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Create Admin
router.post('/register', async (req: Request, res: Response) => {
	const { username, email, password } = req.body
	if (!username || !email || !password) return res.status(400).json({ message: 'Bad Request' })
	try {
		let saltedPassword = await bcrypt.hash(password, 10)
		const user = await prisma.user.create({
			data: {
				name: username,
				email: email.toLowerCase(),
				password: saltedPassword
			}
		})

		const token = jwt.sign(
			{
				id: user.id,
				email: user.email,
				name: user.name
			},
			process.env.JWT_SECRET,
			{
				expiresIn: '1h'
			}
		)

		// save token to database
		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				token
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

router.get('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Bad Request' })
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email.toLowerCase()
            }
        })

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(401).json({ message: 'Wrong password' })
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )

        // save token to database
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                token
            }
        })

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    } finally {
        await prisma.$disconnect()
    }
})

// Read Admin
router.get('/', (hasPermission), async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ message: error })
	} finally {
		await prisma.$disconnect()
	}
})

// Update Admin
router.put('/:id', async (req: Request, res: Response) => {})

// Delete Admin
router.delete('/:id', async (req: Request, res: Response) => {})

module.exports = router
