const path = require("path");
const rootDir = require("../utils/routesUtil");
const fs = require("fs");

let users = [];
module.exports = users;

module.exports = class UsersData {
  constructor(username, gender, email) {
    this.username = username;
    this.email = email;
    this.gender = gender;
  }
  save() {
    users.push(this);
    const usersPath = path.join(rootDir, "data", "users.json");
    fs.writeFile(usersPath, JSON.stringify(users), (err) => {
      console.log("file wrting errors: ", err);
    });
  }
  static async fetchAll() {
    // console.log("fetch all function triggered");
    const usersPath = path.join(rootDir, "data", "users.json");
    const data = await fs.promises.readFile(usersPath, (err) => {
        console.log("error while reading file: ", err);
    });
    users = JSON.parse(data);
    return users;
  }
};
