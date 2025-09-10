const fs = require("node:fs")

async function createFile(music) {
  try {
    music.forEach((item) => {
    
        fs.writeFileSync(`${item}.mp2`, " ")
        console.log(`Membuat file ${item}.mp3`)
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createFile,
}
