const express=require("express")
const http=require("http")
const cors=require("cors")
const mongoose=require("mongoose")
require('dotenv').config()

const socketServer = require("./SocketServer");

const friendInvitationRoutes = require('./routes/friendInvitationRoutes')

const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || process.env.API_PORT

const app = express()

app.use(express.json())
app.use(cors())

//register the route

app.use('/api/auth',authRoutes)
app.use('/api/friend-invitation',friendInvitationRoutes)


const server=http.createServer(app)

socketServer.registerSocketServer(server);


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    server.listen(PORT,()=>{
        console.log(`server is running in port ${PORT}`)
    })
})
.catch((err)=>{
    console.log("db connection failed")
    console.log(err)
})
