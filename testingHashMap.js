const { HashMap } = require("./hashMap");

const hmTest = new HashMap();

hmTest.set("Harry", "Potter");
hmTest.set("Harry", "El Sucio Potter");
hmTest.set("A.", "Medici");
hmTest.set("Bruce", "Lee");
hmTest.set("Pizza", "Margarita");
hmTest.set("Pecorino", "Pepato");
hmTest.set("1", "Value Test");
hmTest.set("2", "Value Test");
hmTest.set("3", "Value Test");
hmTest.set("4", "Value Test");
hmTest.set("5", "Value Test");
hmTest.set("6", "Value Test");
hmTest.set("7", "Value Test");
hmTest.set("8", "Value Test");
hmTest.set("9", "Value Test");
hmTest.set("10", "Value Test");
hmTest.set("11", "Value Test");
hmTest.set("12", "Value Test");
hmTest.set("13", "Value Test");

// Print the whole hashMap
// console.dir(`${hmTest}`);

// Look for a given key: Boolean
// console.log(`14: ${hmTest.has("14")}`);
// console.log(`13: ${hmTest.has("13")}`);
// console.log(`Beer: ${hmTest.has("Beer")}`);
// console.log(`Harry:${hmTest.has("Harry")}`);

// //Look for a value using a given key
// console.log(`14: ${hmTest.get("14")}`);
// console.log(`13: ${hmTest.get("13")}`);
// console.log(`Beer: ${hmTest.get("Beer")}`);
// console.log(`Harry: ${hmTest.get("Harry")}`);

// If the given key is in the hash map, removes the entry with that key and return true. Otherwise false.
// console.dir(`${hmTest}`);
// console.log(`14: ${hmTest.remove("14")}`);
// console.log(`13: ${hmTest.remove("13")}`);
// console.log(`Beer: ${hmTest.remove("Beer")}`);
// console.log(`Harry: ${hmTest.remove("Harry")}`);
// console.dir(`${hmTest}`);

// Returns the number of stored keys in the hashmap
// console.log(hmTest.length());
// console.log(`13: ${hmTest.remove("13")}`);
// console.log(`Beer: ${hmTest.remove("Beer")}`);
// console.log(`Harry: ${hmTest.remove("Harry")}`);
// console.log(hmTest.length());

// removes all entries in the hash map.
// console.log(hmTest.length());
// hmTest.clear();
// console.log(hmTest.length());

// Gives all the current keys in a array
// console.log(hmTest.keys());
// console.log(`13: ${hmTest.remove("13")}`);
// console.log(`Beer: ${hmTest.remove("Beer")}`);
// console.log(`Harry: ${hmTest.remove("Harry")}`);
// console.log(hmTest.keys());

// Gives all the current values in a array
// console.log(hmTest.values());
// console.log(`13: ${hmTest.remove("13")}`);
// console.log(`Beer: ${hmTest.remove("Beer")}`);
// console.log(`Harry: ${hmTest.remove("Pizza")}`);
// console.log(hmTest.values());
