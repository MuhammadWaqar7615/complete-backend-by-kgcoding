const users = [];
module.exports = users;

module.exports = class Users {
    constructor(username, gender, email) {
        this.username = username;
        this.email = email;
        this.gender = gender;
    }
    save() {
        users.push(this);
    }
}