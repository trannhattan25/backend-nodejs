require('dotenv').config()

//GET THE CLIENT
const mongoose = require('mongoose')
const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" }
];
const connection = async () => {

    // Hoặc dùng async/await:
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27017');

        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db");
        // Ví dụ output: connected to db
    } catch (error) {
        console.log(">>>Error connection", error);

    }
}

module.exports = connection;