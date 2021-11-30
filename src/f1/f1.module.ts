import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { F1Controller } from './f1.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'TELEMETRIA_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqps://kpeqplsx:wIzuNk5h10IDQ_5D_kwzfZv_fwZfHtwi@jackal.rmq.cloudamqp.com/kpeqplsx'],
                    queue: 'telemetria_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
        F1Module,
    ],
    controllers: [F1Controller]
})
export class F1Module {
}
