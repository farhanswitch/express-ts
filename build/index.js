"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import bodyParser from 'body-parser';
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = __importDefault(require("./routers/UserRoutes"));
class myServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        // this.app.use(bodyParser({extended:true}))
        this.app.use(express_1.default.json());
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("OOP Express TS");
        });
        this.app.post("/", (req, res) => {
            res.send("POST root route");
        });
        this.app.use("/api/v1/users", UserRoutes_1.default);
    }
}
const port = 5000;
const server = new myServer().app;
server.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});
