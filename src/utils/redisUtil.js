const Redis = require('ioredis')
const config = require('config')

const redisConfig = config.get('redis')

// const redis = new Redis({
//     port: 6379,          // Redis port
//     host: '39.96.33.199',   // Redis host
//     family: 4,           // 4 (IPv4) or 6 (IPv6)
//     password: '000000',
// })
const redis = new Redis(redisConfig)

module.exports = redis