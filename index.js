const express = require('express');
const app = express();
const {Books,sequelize} = require('./models')
const {Role} = require('./models')
const {booksRoutes,authRoutes} = require('./Routes')




app.use(express.json());
// app.use(express.urlencoded({ extended:true }));

app.use(booksRoutes)
app.use(authRoutes)
app.get('/',(req,res) => {
    res.send('Welcome to Book api')
})

app.listen(3000, async()=>{
    console.log('server is running on http://localhost:3000')
    await init()
})

async function init(){
    try {
        await sequelize.sync({force: true})
        const defaultBooks = [
            { 
            name:"life of pie",
            Image_url: "this is image url",
            Author:"Hollywood",
            pages:25,
            Price: 500
            },
            {
                "name": "donald trump",
                "Image_url": "this is the image of donald trump",
                "Author": "from USA",
                "pages": 240,
                "Price": 600
            }
        ]
       const defaultRole = [
        {
            name:"admin"
        },
        { 
            name:"user"
        }
       ] 
        await Books.bulkCreate(defaultBooks)
        await Role.bulkCreate(defaultRole)
    } catch (error) {
         console.log(error)
    }
    
}
