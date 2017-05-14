/**
 * Created by Ника Тихоновец on 29.03.2017.
 */

function User(user) {
    this.user_id = user.user_id;
    this.password = user.password_hash;
    this.login = user.login;
    this.role = user.role;
    this.email = user.email;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.patronymic = user.patronymic;
    this.fullName = user.last_name + " " + user.first_name;
}

module.exports = User;





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