/// <reference types="node" />
import { EventEmitter } from "events";
declare class DL extends EventEmitter {
    constructor(token: String);
    getBots(): Promise<any>;
    getBot(id: String): Promise<any>;
    getUser(id: String): Promise<any>;
}
export = DL;
