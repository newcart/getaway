import { ExceptionFilter, Catch, HttpException, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { newCartUtil } from "newcart/util";

@Catch()
export class ErrorFilter implements ExceptionFilter {
    catch(error: Error, host: ArgumentsHost) {
        let response = host.switchToHttp().getResponse();
        let status = (error instanceof HttpException) ? error.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Sunucu Hatası';
        let data = {};

        if (status === HttpStatus.UNAUTHORIZED)
            data['error'] = 'UNAUTHORIZED';
        if (status === HttpStatus.NOT_FOUND)
            data['error'] = 'NOT_FOUND';
        if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            if (process.env.NODE_ENV === 'production') {
                data['error'] = error.stack;
            } else {
                data['error'] = error.stack;
            }
        }
        return response.status(status).send(newCartUtil.response('failure', message, data ));
    }
}
