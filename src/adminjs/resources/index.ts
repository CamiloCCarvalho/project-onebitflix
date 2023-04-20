import { ResourceWithOptions } from  'adminjs'
import { Category } from '../../models'
import { Course } from '../../models'
import { categoryResourceOptions } from './category'
import { courseResourceOptions } from './course'

//list of models with manegement
export const adminJsResources: ResourceWithOptions[] = [
    {
        resource:Category,
        options: categoryResourceOptions, //details with this model
    },
    {
        resource: Course,
        options: courseResourceOptions
    }
]