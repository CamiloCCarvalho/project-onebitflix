import express from 'express'
import { sequelize } from './database'

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    sequelize.authenticate().then(() => {
        console.log('DB CONNECTION SUCCESSFULY AT PORT: 5432')
    })
    console.log(`SERVER START SUCCESSFULY AT PORT: ${PORT}`)
})