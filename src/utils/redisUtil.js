const Redis = require('ioredis')

const redis = new Redis({
    port: 6379,          // Redis port
    host: '39.96.33.199',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: '000000',
    db: 0
})

module.exports = redis