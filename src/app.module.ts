import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AiModule } from './modules/ai/ai.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';

@Module({
  imports: [AuthModule, AiModule, WebhooksModule],
})
export class AppModule {}
