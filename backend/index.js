const express = require('express');
const notes = require('./data/notes')
const dotenv = require('dotenv')
const app =express();

const PORT = process.env.PORT || 3001;
dotenv.config();
app.get('/',(req,res)=>{
     res.send("endponit found");
})
app.get("/api/notes", (req,res)=>{
     res.json(notes)     
})
app.get("/api/notes/:id", (req,res)=>{
          const note =  notes.find((n)=>{
                return(  n._id===req.params.id)
            })
            res.send(note)
            console.log(req.params)
})

app.listen(PORT,()=>{
    console.log(`server started running on ${PORT}`)
})
