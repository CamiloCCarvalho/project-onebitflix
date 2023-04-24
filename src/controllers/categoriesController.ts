import {Response, Request} from 'express'
import { Category } from '../models'

export const categoriesController = {
    index: async (req:Request, res:Response) => {
        try{
            const categories = await Category.findAll({
                order:[['position', 'ASC']],
                attributes: ['id', 'name', 'position']
            })
            return res.json(categories)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(400).json({message: err.message})
            }
        }
    }
}
    