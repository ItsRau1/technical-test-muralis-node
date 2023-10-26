import { Finance } from "../model/financeModel";
import { connection } from "../utils/db";

export class FinanceRepository {
    
    static list(): Promise<Finance[]> {
        let query =`SELECT d.descricao, d.valor, t.tipo as forma_de_pagamento, c.nome as categoria FROM despesas as d 
                    INNER JOIN categorias as c ON categoria_id = c.id
                    INNER JOIN tipo_pagamento as t ON tipo_pagamento_id = t.id
                    WHERE YEAR(d.data_compra) = YEAR(CURDATE()) AND MONTH(d.data_compra) = MONTH(CURDATE());`

        return new Promise((resolve, reject) => {
            connection.query(query, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            });
        });
    }

    static create({ description, value, type, category, date_buy }: Finance): Promise<{insertId: string}> {

        let query = `INSERT INTO despesas(descricao, valor, tipo_pagamento_id, categoria_id, data_compra) VALUES ("${description}", ${value}, ${type}, ${category}, "${date_buy}")`

        return new Promise((resolve, reject) => {
            connection.query(query, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

}