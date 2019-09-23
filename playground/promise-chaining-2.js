require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d8095d21eb38f28d87fe572').then((result) => {
//     console.log(result)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log('Number of incomplete tasks: ', count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d7ff607465c920e580aec0e').then((count) => {
    console.log('Number of tasks imcompleted: ', count)
}).catch((e) => {
    console.log(e)
})