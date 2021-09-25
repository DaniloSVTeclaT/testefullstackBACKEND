import {createConnection} from 'typeorm'
require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ?
    "src" :
    "dist";

const extensionFile = process.env.NODE_ENV === "development" ?
    "ts" :
    "js";
console.log(">>>>>>>>>>>>>>>>>>>>"+extensionFile)    
const config: any = {

};

createConnection().catch(error => console.log(error));