const create = require("./lib/createMusic")
const move = require("./lib/moveMusic")


const music = [
  "Rossa - Nada Nada Cinta",
  "Rossa - Yang Terpilih",
  "Rossa - Kembali",
  "Rossa - Tegar",
  "Rizky Febian - Jejak",
  "Rizky Febian - Cuek",
  "Rizky Febian - Kesempurnaan Cinta",
  "Bulan Sutena - Ghosting",
  "Bulan Sutena - Tetap Punyaku",
  "Raavfy - Badut",
]


create.createFile(music)
move.moveMusic(music)
