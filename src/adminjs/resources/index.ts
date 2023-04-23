// src/adminjs/resources/index.ts

import { ResourceWithOptions } from  'adminjs'

import { Category, Course, Episode } from '../../models'

import { categoryResourceOptions } from './category'
import { courseResourceFeatures, courseResourceOptions } from './course'
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";

//list of models with manegement
export const adminJsResources: ResourceWithOptions[] = [
    {
        resource:Category,
        options: categoryResourceOptions, //details with this model
    },
    {
        resource: Course,
        options: courseResourceOptions,
        features: courseResourceFeatures
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourceFeatures
    },
]