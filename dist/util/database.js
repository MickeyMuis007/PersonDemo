"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const MongoClient = mongodb_1.default.MongoClient;
let db;
exports.mongoConnect = ((callback) => {
    MongoClient.connect("mongodb://localhost/persons")
        .then((client) => {
        console.log("Connect to DB!");
        db = client.db();
        callback();
    }).catch((err) => console.log(err));
});
exports.getDb = () => {
    if (db) {
        return db;
    }
};
//# sourceMappingURL=database.js.map