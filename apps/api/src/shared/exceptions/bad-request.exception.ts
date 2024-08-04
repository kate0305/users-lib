import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        error: 'Bad Request',
        message: 'Query "page" should be numeric string',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
