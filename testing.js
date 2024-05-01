const { HashMap } = require("./hashMap");

const hmTest = new HashMap();

hmTest.set("Nicolas", "Lopez");
hmTest.set("Nicolas", "Lopez Tellez");
hmTest.set("Nathalia", "Medici");
hmTest.set("Camilo", "Lew");
hmTest.set("Martha", "Mazzarella");
hmTest.set("lomica", "Mazzarella");

console.dir(`${hmTest}`);
