const SLinkedList = require("../TOP-linked-list/singleLinkedList.js");

const HashSet = class {
    #LOAD_FACTOR = 0.85; // It will determine when it is a good time to grow buckets array
    // HashSet implementations across various languages use a load factor between 0.75 and 1.

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

    #doubleHashSetCapacity() {
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

    #addNewItem(key) {
        /**
         * Includes a provided key in this HashSet
         */

        const hash = this.#hash(key);

        if (this.hashes[hash] === undefined) {
            this.hashes[hash] = new SLinkedList();
            this.hashes[hash].append(key);
            return;
        } else {
            let tempNode = this.hashes[hash].head();

            while (tempNode !== undefined) {
                if (tempNode.value === key) {
                    console.log(`Key (${key}) already exists in hashSet!`);
                    return;
                }
                tempNode = tempNode.nextNode;
            }

            this.hashes[hash].append(key);
            return;
        }
    }

    toString() {
        let printable = "";

        this.hashes.forEach((linkedL) => {
            let tempNode = linkedL.head();
            printable += `* `;
            while (tempNode !== undefined) {
                printable += `(${tempNode.value}) -->`;
                tempNode = tempNode.nextNode;
            }
            printable += `\n`;
        });

        return printable;
    }

    set(key) {
        // First check capacity and loadFactor before add new items
        this.#doubleHashSetCapacity();

        this.#addNewItem(key);
    }

    has(key) {
        /**
         * takes a key as an argument and returns true or false based on whether or not the key is in the hashSet.
         */

        let tempNode = this.hashes[this.#hash(key)].head();
        while (tempNode !== undefined) {
            if (tempNode.value === key) return true;
            tempNode = tempNode.nextNode;
        }

        return false;
    }

    remove(key) {
        /**
         * takes a key as an argument. If the given key is in the hashSet, it removes the entry with that key and returns true. If the key isn’t in the hashSet, it returns false.
         */

        if (this.has(key)) {
            const selectedLList = this.hashes[this.#hash(key)];
            let tempNode = selectedLList.head();
            let index = 0;
            while (tempNode !== undefined) {
                if (tempNode.value === key) {
                    selectedLList.removeAt(index);
                    return true;
                }
                index++;
                tempNode = tempNode.nextNode;
            }
        } else {
            return false;
        }
    }

    length() {
        /**
         * returns the number of stored keys in the hashSet.
         */

        let length = 0;

        this.hashes.forEach((linkedList) => {
            if (linkedList !== undefined) {
                let tempNode = linkedList.head();
                while (tempNode !== undefined) {
                    length++;
                    tempNode = tempNode.nextNode;
                }
            }
        });

        return length;
    }

    clear() {
        /**
         * removes all entries in the hashSet.
         */

        this.hashes = Array(16);
    }

    keys() {
        /**
         * returns an array containing all the keys inside the hashSet.
         */
        const arrayOfKeys = [];

        this.hashes.forEach((linkedList) => {
            if (linkedList !== undefined) {
                let tempNode = linkedList.head();
                while (tempNode !== undefined) {
                    arrayOfKeys.push(tempNode.value);
                    tempNode = tempNode.nextNode;
                }
            }
        });

        return arrayOfKeys;
    }
};

exports.HashSet = HashSet;
