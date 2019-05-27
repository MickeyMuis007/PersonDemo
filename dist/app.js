"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const person_router_1 = require("./routes/person.router");
const database = __importStar(require("./util/database"));
// intialize configuration
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.use(person_router_1.PersonRouter);
database.mongoConnect((client) => {
    app.listen(port, () => {
        console.log(`server start at http://localhost:${port}`);
    });
});
//# sourceMappingURL=app.js.map