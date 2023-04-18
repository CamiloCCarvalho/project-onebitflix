import {ResourceWithOptions} from  'adminjs'
import {Category} from '../../models'
import {categoryResourceOptions} from './category'

//list of models with manegement
export const adminJsResources: ResourceWithOptions[] = [
    {
        resource:Category,
        options: categoryResourceOptions, //details with this model
    }
]