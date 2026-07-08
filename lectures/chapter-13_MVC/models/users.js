const path = require("path");
const rootDir = require("../utils/routesUtil");
const fs = require("fs");

module.exports = class UsersData {
  constructor(username, gender, email) {
    this.username = username;
    this.email = email;
    this.gender = gender;
  }

  save() {
    UsersData.fetchAll((users) => {
      users.push(this);
      const usersPath = path.join(rootDir, "data", "users.json");
      fs.writeFile(usersPath, JSON.stringify(users), (err) => {
        console.log("file wrting errors: ", err);
      });
    });
  }

  static fetchAll(callback) {
    const usersPath = path.join(rootDir, "data", "users.json");
    fs.readFile(usersPath, (err, data) => {
      console.log("file read: ", err, data);
      // callback(!err ? JSON.parse(data) : []);
      callback((err || !data || data.length === 0) ? [] : JSON.parse(data));
    });
  }
};
