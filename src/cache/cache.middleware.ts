import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class cacheMiddleware implements NestMiddleware {

    use(request: Request, res: Response, next: NextFunction) {
        console.log("Cache");
        const data =  this.loadFromCache();
        if(data){
            res.write(JSON.stringify(data))
            res.end()
            return
        }
        return next();
    }
    private loadFromCache(){
        return false;
        //return {id:'123', 'name':'Deneme'}
    }
}
