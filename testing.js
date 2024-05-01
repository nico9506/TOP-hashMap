const { HashMap } = require("./hashMap");

const hmTest = new HashMap();

hmTest.set("Nicolas", "Lopez");
hmTest.set("Nicolas", "Lopez Tellez");
hmTest.set("Nathalia", "Medici");
hmTest.set("Camilo", "Lew");
hmTest.set("Martha", "Mazzarella");
hmTest.set("lomica", "Mazzarella");
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
console.log(`14: ${hmTest.has("14")}`);
console.log(`13: ${hmTest.has("13")}`);
console.log(`Nico: ${hmTest.has("Nico")}`);
console.log(`Nicolas:${hmTest.has("Nicolas")}`);
