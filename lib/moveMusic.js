const fs = require("node:fs");
const path = require("node:path");
const { customError } = require("../lib/error/index");

async function moveMusic(music) {
  try {
    const folderMusic = path.join("./", "music");

    if (!fs.existsSync(folderMusic)) {
      fs.mkdirSync(folderMusic);
    }

    music.forEach((item) => {
      const artis = item.split(" - ")[0];
      const fileName = `${item}.mp3`;
      if (fileName.endsWith(".mp3")) {
        const folderArtis = path.join(folderMusic, artis);
        if (!fs.existsSync(folderArtis)) {
          fs.mkdirSync(folderArtis);
          console.log(`Membuat Folder ${folderArtis}`);
        }
        const oldPath = path.join("./", fileName);

        const newPath = path.join(folderArtis, fileName);

        if (fs.existsSync(oldPath)) {
          fs.renameSync(oldPath, newPath);
        }
      } else {
        const errorFile = new customError("Type file tidak di izinkan");
        throw errorFile;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  moveMusic,
};
