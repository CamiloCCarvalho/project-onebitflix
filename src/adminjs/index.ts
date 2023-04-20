import AdminJS from 'adminjs' //adm
import AdminJSExpress from '@adminjs/express' //server
import AdminJSSequelize from '@adminjs/sequelize' //ORM
import { sequelize } from  '../database' //DB
import { adminJsResources } from './resources'

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin', //route of adm
    resources: adminJsResources, //use into panel adminJS-http


    //style admin page
    branding:{
        companyName: 'OneBitFlix | Admin',
        logo: '/logoOnebitflix.svg',
        theme: {
            colors: {
                primary100: '#ff0043',
	            primary80: '#ff1a57',
	            primary60: '#ff3369',
	            primary40: '#ff4d7c',
		        primary20: '#ff668f',
	            grey100: '#151515',
	            grey80: '#333333',
	            grey60: '#4d4d4d',
	            grey40: '#666666',
	            grey20: '#dddddd',
	            filterBg: '#333333',
	            accent: '#151515',
	            hoverBg: '#151515',
            }
        }
    }
    
})

//this build routes used in application
export const adminJsRouter = AdminJSExpress.buildRouter(adminJs)
