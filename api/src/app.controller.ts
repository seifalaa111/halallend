import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('status') // <-- decorator only takes the route path
  getStatus(): { status: string; service: string; timestamp: string } {
    return {
      status: 'ok',
      service: 'api',
      timestamp: new Date().toISOString(),
    };
  }
}
