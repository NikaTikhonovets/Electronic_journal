/**
 * Created by Ника Тихоновец on 29.03.2017.
 */

module.exports = function (db, cb) {
    db.define('user', {
        user_id: Number,
            login: String,
        email: String,
        password_hash: String,
        role: ["admin", "student", "teacher", "parent", "director"] // ENUM type
    }, {
        methods: {
            fullName: function () {
                return this.login + ' ' + this.email;
            }
        }
    });

    return cb();
};





/*module.exports = function(db,cd) {
    return {
        user_id: Number,
        login: String,
        email: String,
        password_hash: String,
        role: ["admin", "student", "teacher", "parent", "director"], // ENUM type
}, {
    methods: {
        fullName: function () {
            return this.login + ' ' + this.email;
        }
    }
};
}*/