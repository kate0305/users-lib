import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(id: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        error: 'Not Found',
        message: `User with id '${id}' is not found`,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
