const fs = require("node:fs");
const path = require("node:path");

function moveMusic(music) {
  const folderMusic = path.join("./", "music");

  if (!fs.existsSync(folderMusic)) {
    fs.mkdirSync(folderMusic);
  }

  music.forEach((item) => {
    const artis = item.split(" - ")[0];
    const fileName = `${item}.mp3`;

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
  });
}

module.exports = {
  moveMusic,
};
