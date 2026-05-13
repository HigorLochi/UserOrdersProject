var passwordHash = require('password-hash');

module.exports = class PasswordHash {
    static generate(password) {
        return passwordHash.generate(password);
    }
}