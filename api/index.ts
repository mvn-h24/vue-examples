// rest-api example
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.post('/animals', (req, res) => {
  if (req.method === 'POST') {
    res.json(prisma.pet.create(req.body))
  }
})

export default app
