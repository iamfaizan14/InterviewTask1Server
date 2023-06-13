const express = require('express')
const cors = require('cors')
const movies= require('./movies.json')
const PORT = 8000
const app=express()
app.use(cors())
app.get("/api/movies",(req, res)=>{
    res.json(movies)
})

app.listen(PORT,()=>{
    console.log(`Server is running at: http://localhost:${PORT} `);
})
