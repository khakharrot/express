
const today= new Date()
const hour= today.getHours()
const day= today.getDay()
const date= (req,res,next)=> {
  !(day>=1 && day<=5 && hour>=9 && hour<17) &&  res.send("Come back when we're open")
next() }
  
module.exports= date
