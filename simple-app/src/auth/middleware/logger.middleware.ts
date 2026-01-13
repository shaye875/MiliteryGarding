import { Injectable, NestMiddleware, Next } from '@nestjs/common'
import { NestFactoryStatic } from '@nestjs/core/nest-factory'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req:Request, res: Response ,next: NextFunction){
        next()
    }
}