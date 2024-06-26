const redisClient = require('../helpers/redisConfig')
const axios = require('axios')
const getUserList = async () => {
  console.log('called---')
  let users
  users = await redisClient.get('users')
  users = JSON.parse(users)
  if(users){
    return users
  }

  users = await axios.get('https://jsonplaceholder.typicode.com/users')
  users = users.data
  // users = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log('fetching the data...')
  redisClient.set('users', JSON.stringify(users))
  return users;
}


module.exports = {getUserList}