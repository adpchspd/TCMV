const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/auth_routes'))

const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        const connectionString = "pg://postgres:1234@localhost:5432/ProjectTCMV";
        const client = new pg.Client(connectionString);
        client.connect();
        app.listen(PORT, () => console.log('App has started'))

    }
    catch (e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()