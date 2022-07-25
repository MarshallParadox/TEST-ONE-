//═══════════════════════════════════════════════════════//
//Copyright Under GNU Licence 3.0
//2022 All Rights Reserved.
//Auther: Hector Paradox
//Developer: Marshall Paradox
//QueenAva Public Edition 
// Version 1.0
//════════════════════════════//
const { MissingAdapterError } = require('./MissingAdapterError.js');
class Low {
    constructor(adapter) {
        this.data = null;
        if (adapter) {
            this.adapter = adapter;
        }
        else {
            throw new MissingAdapterError();
        }
    }
    async read() {
        this.data = await this.adapter.read();
    }
    async write() {
        if (this.data) {
            await this.adapter.write(this.data);
        }
    }
}
module.exports = { Low };
