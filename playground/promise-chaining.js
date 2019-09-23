require('../src/db/mongoose')
const User = require('../src/models/user')

//5d81d7085ef89a0128d7379f

// User.findByIdAndUpdate('5d81d7085ef89a0128d7379f', { age: 24}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 24})
// }).then((users) => {
//     console.log('Number of users of age 24: ', users)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d8091bfea4dd2101c16f717', 23).then((count) => {
    console.log('number of users found: ' + count)
}).catch((e) => {
    console.log(e)
})