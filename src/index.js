const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => { // Defining middleware function with next
//     if(req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('This site is currently under maintenence')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5d87dc1ea27e0f3d50583fd8')
    // await task.populate('owner').execPopulate() //This method will find the user using owner id and the ref property which refers to the User model
    // console.log(task.owner)

    const user = await User.findById('5d87d6f4e700f418d4eb0e97')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks) // Here tasks is a vitual field of the user object that we created in user model
}

main()