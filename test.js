const _ = require('regexgen.js')

console.log(_)
const regex = _(
    _.startOfLine(),
    _.capture( 'http', _.maybe( 's' ) ), '://',
    _.capture( _.anyCharBut( ':/' ).repeat() ),
    _.group( ':', _.capture( _.digital().multiple(2,4) ) ).maybe(), '/',
    _.capture( _.anything() ),
    _.endOfLine()
)

console.log(regex)
console.log(regex.exec('https://baidu.com/'))