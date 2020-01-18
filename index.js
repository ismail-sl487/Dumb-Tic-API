const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const cors =require('cors')
const app = express()
const port = process.env.PORT || 5000 ;

app.use(cors())
app.use(bodyParser.json())

//controllers
const ProfileController = require('./controllers/profile')
const EventController = require('./controllers/event')
const CategoriesController = require('./controllers/categories')
const LoginController =require('./controllers/auth')
// const OrderController = require('./controllers/event')
const OrderBuyController = require('./controllers/order')

const {authenticated}   = require('./middleware/middleware')

const Moment = require('moment')


app.group("/api/v1", (router) => {

    //PROFILE API
    router.get('/profile', ProfileController.index)    
    router.get('/profile/:id', ProfileController.show) 

    // EVENT API
    router.post('/event',EventController.store)
    router.get('/event/:id',EventController.show) 
    router.get('/eventall',EventController.all)
    router.get('/events/', EventController.index) 
    router.get('/search/:title',EventController.search) 
    router.patch('/event/:id/edit',EventController.edit)
    
    //EVENT TOMOROW
    router.get('/tomorow',EventController.tomorrow)

    // CATEGORIES API
    router.get('/categories', CategoriesController.index)  
    router.get('/category/:id/events', CategoriesController.events)  
    router.post('/category', CategoriesController.store)
    router.delete('/category/:id/del', CategoriesController.del)  
  
    // ORDER API
    router.get('/order/:id',OrderBuyController.show)  
    router.post('/order',OrderBuyController.buy)   
    router.get('/orders',OrderBuyController.showall)  


    // AUTH API
    router.post('/login',LoginController.login)
    router.post('/register',LoginController.register)

    //COMFIRM
    router.patch('/comfirm/:id',OrderBuyController.update)

    //TICKET
    router.get('/myTicket',OrderBuyController.tiket)

    
})


app.listen(port, () => console.log(`Listening on port ${port}!`))