const express= require ("express")
const custom= require ("./date")
const app= express()
const port=5000

app.use(express.static(__dirname+"/Public"))

app.get ("/",custom,(req,res)=>(
    res.sendFile(__dirname+"/Public/HomePage.html")))

app.get ("/service",(req,res)=>(
    res.sendFile(__dirname+"/Public/Services.html")))

app.get ("/contact",(req,res)=>(
    res.sendFile(__dirname+"/Public/Contact.html")))
 
app.get ("/style.css",(req,res)=>(
    res.sendFile(__dirname+"/Public/style.css")))


    app.listen(port,err=>(
        err? console.log(err):console.log(`serveur is on port:${port}`)
    ))