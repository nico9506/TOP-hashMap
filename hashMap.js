const SLinkedList = require("../TOP-linked-list/singleLinkedList.js");

const HashMap = class {
    constructor() {
        this.hashes = Array(16);
        this.map = {};
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) %
                this.hashes.length;
        }

        return hashCode;
    }
};

exports.HashMap = HashMap;
