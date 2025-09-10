const fs = require('node:fs')

function createFile(music) {
    music.forEach((item) => {
     fs.writeFileSync(`${item}.mp3`, "hello")
    console.log(`Membuat file ${item}.mp3`)
  })

}

module.exports = {
    createFile
}