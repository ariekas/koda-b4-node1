const fs = require("node:fs").promises;
const path = require("node:path");
const { customError } = require("../lib/error/index");

async function moveMusic(music) {
  try {
    const folderMusic = path.join("./", "music");

    try {
      await fs.access(folderMusic);
    } catch {
      await fs.mkdir(folderMusic);
    }

    for (const item of music) {
      const artis = item.split(" - ")[0];
      const fileName = `${item}.mp3`;

      if (fileName.endsWith(".mp3")) {
        const folderArtis = path.join(folderMusic, artis);

        try {
          await fs.access(folderArtis);
        } catch {
          await fs.mkdir(folderArtis);
          console.log(`Membuat Folder ${folderArtis}`);
        }

        const oldPath = path.join("./", fileName);
        const newPath = path.join(folderArtis, fileName);

        try {
          await fs.access(oldPath);
          await fs.rename(oldPath, newPath);
        } catch {
          console.log(`File ${oldPath} tidak ditemukan`);
        }
      } else {
        throw new customError("Type file tidak di izinkan");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  moveMusic,
};
