import { Module } from "@nestjs/common";
import { DbConnect } from "./db.source";

@Module({
    providers:[...DbConnect],
    exports:[...DbConnect]
})

export class DbModule{}