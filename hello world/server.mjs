// import Express  from "express";

// const app=Express();

//   app.listen(3001,()=>{
//       console.log("server is running")
//   })

//   app.use('/use',(req,res)=>{
//     res.send({message:'app.use is successfully'})
//   })
// console.log("module js is running")

import express from 'express'
const app = express()//initialize ye app pora ke pora server he


app.get('/', (req, res) => {
  res.send('Hello World!'+new Date())
})

app.get('/profile',(req,res)=>{
  res.send("this is profile!"+new Date())
})

const PORT =process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})


