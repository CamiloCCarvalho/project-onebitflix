import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'

//no Express rotas dinamicas precisam ficar abaixo de rotas fixas pois ele testa as rotas em ordem e pode entender a palavra fixa como um termo dinamico de params ou id and whatever

const router = express.Router()

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show) //define params here
router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/:id', coursesController.show)


export {router}