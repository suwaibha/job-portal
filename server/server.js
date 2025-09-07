// import './config/instrument.js'
// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/db.js'
// import * as Sentry from "@sentry/node";
// import clerkwebhooks from './controllers/webhooks.js'


// //Initialize Express
// const app = express()

// //connect to database
// await connectDB()

// //Middlewares
// app.use(cors())
// app.use(express.json())

// //Routes
// app.get('/',(req,res)=>res.send("API working"))
// app.get("/debug-sentry", function mainHandler(req, res) {
//   throw new Error("My first Sentry error!");
// });

// app.post('/webhooks',clerkwebhooks)

// //port
// const PORT = process.env.PORT || 5000

// Sentry.setupExpressErrorHandler(app);

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })
import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import clerkwebhooks from './controllers/webhooks.js'

// Initialize Express
const app = express()

// Connect to database
await connectDB()

// Middlewares
app.use(cors())

// Webhook route (must use raw body)
app.post('/webhooks', express.raw({ type: 'application/json' }), clerkwebhooks)

// JSON body parser for the rest of the app
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send("API working"))

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!")
})

app.post('/webhooks',clerkwebhooks)

// Port
const PORT = process.env.PORT || 5000

// Sentry error handler (place after routes)
Sentry.setupExpressErrorHandler(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
