// src/adminjs/index.ts

import AdminJS from 'adminjs' //adm
import AdminJSExpress from '@adminjs/express' //server
import AdminJSSequelize from '@adminjs/sequelize' //ORM
import { adminJsResources } from './resources'
import { sequelize } from  '../database' //DB

import { locale } from './locale'
import { dashboardOptions } from './dashboard'
import { brandingOptions } from './branding'
import { authtenticationOptions } from './authentication'

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin', //route of adm
    resources: adminJsResources, //use into panel adminJS-http
    locale: locale, //translate dashboard
    dashboard: dashboardOptions,
    branding:brandingOptions //style admin page
    
})

//this build routes used in application
export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    authtenticationOptions,
    null,
    {
        resave: false,
        saveUninitialized: false
    }
)
