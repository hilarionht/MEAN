const mongoose = require('mongoose');

const { Schema } = mongoose;
var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
}
const UserSchema = new Schema ({
    name: { type: String, required: [true, 'el nombre es requerido'] },
    email: { type: String, unique: true, required: [true, 'el correo es requerido'] },
    password: { type: String, required: [true, 'el password es requerido'] },
    dateAdd: { type: Date, default: Date.now, required: true },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    google: { type: Boolean, required: true, default: false },
    status: {type: Boolean, required: true, default: true }
})
module.exports = mongoose.model('User', UserSchema)