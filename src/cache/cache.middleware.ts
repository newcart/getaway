import { Injectable, Request, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";

@Injectable()
export class cacheMiddleware implements NestMiddleware {

    use(request: Request, response: Response, next: NextFunction) {
        const data =  this.loadFromCache();
        if(data){
            response.write(JSON.stringify(data))
            response.end()
            return
        }
        return next();
    }
    private loadFromCache(){
        return false;
        //return {id:'123', 'name':'Deneme'}
    }
}
