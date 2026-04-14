import { HttpException, HttpStatus } from '@nestjs/common';

interface PaymentRequiredResponse {
  message: string;
  limit: number;
  current: number;
  planName: string;
  upgradeUrl: string;
}

export class PaymentRequiredException extends HttpException {
  constructor(response: PaymentRequiredResponse) {
    super(
      {
        statusCode: HttpStatus.PAYMENT_REQUIRED,
        ...response,
      },
      HttpStatus.PAYMENT_REQUIRED,
    );
  }
}
