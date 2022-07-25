//═══════════════════════════════════════════════════════//
//Copyright Under GNU Licence 3.0
//2022 All Rights Reserved.
//Auther: Hector Paradox
//Developer: Marshall Paradox
//QueenAva Public Edition 
// Version 1.0
//════════════════════════════//
module.exports = {
    ...require('./adapters/JSONFile.js'),
    ...require('./adapters/JSONFileSync.js'),
    ...require('./adapters/LocalStorage.js'),
    ...require('./adapters/Memory.js'),
    ...require('./adapters/MemorySync.js'),
    ...require('./adapters/TextFile.js'),
    ...require('./adapters/TextFileSync.js'),
    ...require('./Low.js'),
    ...require('./LowSync.js'),
}