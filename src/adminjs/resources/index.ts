import { ResourceWithOptions } from  'adminjs'

import { Category, Course, Episode } from '../../models'

import { categoryResourceOptions } from './category'
import { courseResourceOptions } from './course'
import { episodeResourceOptions } from "./episode";

//list of models with manegement
export const adminJsResources: ResourceWithOptions[] = [
    {
        resource:Category,
        options: categoryResourceOptions, //details with this model
    },
    {
        resource: Course,
        options: courseResourceOptions
    },
    {
        resource: Episode,
        options: episodeResourceOptions
    },
]