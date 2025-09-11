const fs = require("node:fs").promises;

async function createFile(music) {
  try {
    music.forEach(async (item) => {
      try {
        await fs.writeFile(`${item}.mp3`, " ");
        console.log(`Membuat file ${item}.mp3`);
      } catch (err) {
        console.error(err);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createFile,
};
