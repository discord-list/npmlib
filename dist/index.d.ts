/// <reference types="node" />
import { EventEmitter } from "events";
interface Bot {
    id: String;
    username: String;
    discriminator: String;
    avatar: String;
    status: String;
    straming: Boolean;
    list: Boolean;
    owner: String;
    votes: Number;
    prefix: String;
    bibl: String;
    shortDescription: String;
    description: String;
    tags: String[];
    invite: String;
    website: String;
    github: String;
    server: String;
}
interface User {
    id: String;
    username: String;
    discriminator: String;
    avatar: String;
    status: String;
    streaming: Boolean;
    customstatus: {
        text: String;
        emoji: {
            name: String;
            id: String | undefined;
            url: String | null;
        } | null;
    } | null;
    bots: Bot[];
    varificador: Boolean;
}
declare class DL extends EventEmitter {
    token: String;
    constructor(token: String);
    getBots(): Promise<Bot[]>;
    getBot(id: String): Promise<Bot>;
    getUser(id: String): Promise<User>;
}
export = DL;
