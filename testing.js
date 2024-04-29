const { HashMap } = require("./hashMap");

const hmTest = new HashMap();

hmTest.set("Nicolas", "Lopez");
hmTest.set("Nicolas", "Lopez Tellez");
hmTest.set("Nathalia", "Lopez");
hmTest.set("Camilo", "Lopez");
hmTest.set("Martha", "Tellez");

console.dir(`${hmTest}`);
