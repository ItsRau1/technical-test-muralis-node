import express from 'express'

import { Router } from 'express';
import { FinanceController } from './controllers/FinanceController';


export const app = express();

const route = Router()

app.use(express.json())

const controller = new FinanceController

route.get('/api/despesas', controller.list)
route.post('/api/despesas', controller.create)

app.use(route)