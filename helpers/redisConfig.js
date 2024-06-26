var Redis = require('redis')
var client = Redis.createClient({
  port      : '6379',
  host      : '127.0.0.1',
  // password  : 'redispassword',
})

client.connect();

/* (async()=>{

}) */
client.on('connect', ()=>{
  console.log('Radis DB is connected \n')
})

client.on('reconnecting', ()=>{
  console.log('Redis client is reconnecting')
})

client.on('ready', ()=>{
  console.log('Redis client is ready')
})

client.on('error', (err)=>{
  console.log('Error from Redis: ',err)
})

client.on('end', ()=>{
  console.log('\n Redis client disconnected')
  console.log('Server is going down...')
  process.exit()
})

const set = (key, value) => {
  client.set(key, value)
  return 'done'
}

const get = async (key) => {
  return client.get(key);
  // console.log(await client.get(key))
  return new Promise((resolve, reject)=>{
    client.get(key, (err, result)=>{
      if(err){
        console.log('error-----: ',err)
        reject(err)
      }
      console.log('result is: ', result)
      resolve(result)
    })
  })
}

const close = ()=>{
  client.quit();
}

module.exports = { set, get, close }