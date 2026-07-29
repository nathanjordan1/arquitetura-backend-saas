import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhooksService {
  async processIncomingWebhook(payload: any): Promise<{ status: string; processedAt: string }> {
    console.log('📦 Webhook recebido com sucesso:', payload);
    return {
      status: 'success',
      processedAt: new Date().toISOString(),
    };
  }
}
