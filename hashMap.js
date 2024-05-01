const { log } = require("node:console");
const SLinkedList = require("../TOP-linked-list/singleLinkedList.js");
const { inspect } = require("node:util");

const HashMap = class {
    #LOAD_FACTOR = 0.85; // It will determine when it is a good time to grow buckets array
    // Hash map implementations across various languages use a load factor between 0.75 and 1.

    constructor() {
        this.hashes = Array(16);
    }

    #hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) %
                this.hashes.length;
        }

        return hashCode;
    }

    #doubleHashMapCapacity() {
        /**
         * Increase the hashes array size (x2) if the loadFactor has been reached.
         * Finally, recalculate all hashes to append them in the new array
         */

        let loadedBuckets = 0;

        this.hashes.forEach((bucket) => {
            if (bucket === undefined) loadedBuckets++;
        });

        if (loadedBuckets / this.hashes.length > this.#LOAD_FACTOR) {
            const previousHashes = [...this.hashes];
            this.hashes = Array(this.hashes.length * 2);

            previousHashes.forEach((hashIndex) => {
                if (hashIndex !== undefined) {
                    // SLinkedList.at(index) returns node i in that linkedList

                    let index = 0;
                    while (hashIndex.at(index) !== null) {
                        const currentPair = hashIndex.at(index).value; // {key: value}
                        const currentKey = Object.keys(currentPair)[0];
                        this.#addNewItem(currentKey, currentPair[currentKey]);
                        index++;
                    }
                }
            });
        }

        return;
    }

    #addNewItem(key, value) {
        /**
         * Includes a provided key-value in this hashMap
         */

        const hash = this.#hash(key);

        if (this.hashes[hash] === undefined) {
            this.hashes[hash] = new SLinkedList();
            this.hashes[hash].append({ [key]: value });
            return;
        } else {
            let nodeFound = false;
            let tempNode = this.hashes[hash].head();

            while (tempNode !== undefined) {
                if (Object.keys(tempNode.value)[0] === key) {
                    tempNode.value[key] = value;
                    return;
                }
                tempNode = tempNode.nextNode;
            }

            this.hashes[hash].append({ [key]: value });
            return;
        }
    }

    toString() {
        let printable = "";

        this.hashes.forEach((linkedL) => {
            let tempNode = linkedL.head();
            printable += `* `;
            while (tempNode !== undefined) {
                printable += `(${JSON.stringify(tempNode.value)}) -->`;
                tempNode = tempNode.nextNode;
            }
            printable += `\n`;
        });

        return printable;
    }

    set(key, value) {
        // First check capacity and loadFactor before add new items
        this.#doubleHashMapCapacity();

        this.#addNewItem(key, value);
    }
};

exports.HashMap = HashMap;
