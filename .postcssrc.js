//node.js 환경에서는 import 대신에 require()를 사용, export 대신에 module.exports 사용

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export {
//     plugins: [
//         autoprefixer
//     ]
// }
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}