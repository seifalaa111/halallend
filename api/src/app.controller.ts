import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('status') // route will be GET /status
  getStatus() {
    return {
      status: 'ok',
      service: 'api',
      timestamp: new Date().toISOString(),
    };
  }
}
