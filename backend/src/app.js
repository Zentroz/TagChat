import express from 'express'

const app = express()

import UserRouter from './routes/user.routes.js'

app.use("/user", UserRouter);

export default app