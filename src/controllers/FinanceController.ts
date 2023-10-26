import { Request, Response } from "express";
import { FinanceRepository } from "../repositories/financeRepository";
import { z } from "zod";

export class FinanceController {

    async list(req: Request, res: Response) {
        try {
            const finances = await FinanceRepository.list();

            res.status(200).send({
                data: finances,
                succes: true,
            })
        } catch (e){
            res.status(500).send({
                data: {
                    "error": e,
                },
                succes: false,
            })
        }
    };

    async create(req: Request, res: Response) {

        const createNewFinanceBodySchema = z.object({
            description: z.string(),
            value: z.number(),
            type: z.number().positive().lte(4),
            category: z.number().positive()
        })

        const {
            description,
            value,
            type,
            category
        } = createNewFinanceBodySchema.parse(req.body)

        let preDate = new Date;
        const date_buy = preDate.toISOString().slice(0, 19).replace('T', ' ');
        
        try {
            let newFinance:{insertId: string} = await FinanceRepository.create({ 
                description, 
                value, 
                type, 
                category, 
                date_buy 
            });
    
            res.status(201).send({
                data: {
                    idNewFinance: newFinance.insertId
                },
                success: true
            })
        } catch (e) {
            res.status(500).send({
                data: {
                    "error": e,
                },
                success: false,
              });
        }
    }
}