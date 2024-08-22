import express from 'express'
import cors from 'cors'
import { createTable } from './controller/controller';
import router from './routes/route'

const app = express();

app.listen(3002, () => {
    console.log(`server is now listening on port ${3002}`)
})

app.use(cors())

createTable();

app.use(express.json())
app.use(router)
