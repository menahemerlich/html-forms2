import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    fullName: String,
    email: String,
    age: Number,
    gender: String,
    course: String,
    termsAccepted: String
}, {
    timestamps: true
})

export const User = model("users", userSchema)