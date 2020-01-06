const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const cors =require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

//controllers
const ProfileController = require('./controllers/profile')
const EventController = require('./controllers/event')
const CategoriesController = require('./controllers/categories')
const LoginController =require('./controllers/auth')
const OrderController = require('./controllers/event')

const {authenticated}   = require('./middleware/middleware')


app.group("/api/v1", (router) => {

    //PROFILE API
    router.get('/profile', ProfileController.index)    
    router.get('/profile/:id', ProfileController.show) 

    // EVENT API
    router.post('/event',EventController.store)
    router.get('/event/:id',EventController.show) 
    router.get('/event/', EventController.index)  
    
    // CATEGORIES API
    router.get('/categories', CategoriesController.index)  
    router.get('/category/:id/events', CategoriesController.events)  
    router.post('/category', CategoriesController.store)
  
    // ORDER API
    router.get('/order/:id', OrderController.index)  


    // AUTH API
    router.post('/login',LoginController.login)
    router.post('/register',LoginController.register)
    
})


app.listen(port, () => console.log(`Listening on port ${port}!`))