const crypto = require("crypto");
const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./verbs.csv");
const rl = readline.createInterface({ input: stream });

const verbs = [];

rl.on("line", (row) => {
  const forms = row.split(";");
  const verb = `{
    id: "${crypto.createHash("md5").update(row).digest("hex")}",
    infinitive: "${forms[0].trim()}",
    pastSimple: "${forms[1].trim()}",
    pastParticiple: "${forms[2].trim()}",
  },
  `;
  verbs.push(verb);
});

rl.on("close", () => {
  const data = ["const verbs = ["];
  data.push(...verbs);
  data.push("];");
  data.push("export default verbs;");
  fs.writeFile("./verbs.ts", "".concat(...data), (err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Successfully created the file");
    }
  });
});
