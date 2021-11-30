import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { F1TelemetryClient } from "f1-2021-udp";
import { TelemetriaModel } from 'models/telemetria.model';
const client: F1TelemetryClient = new F1TelemetryClient();
@Controller('f1')
export class F1Controller {

    constructor(
        @Inject('TELEMETRIA_SERVICE') private readonly rabbit: ClientProxy
    ){   
    }

    @Get()
    retorna() {
        let producer = this.rabbit;
        client.on('carTelemetry', function (data) {
            let minhaTelemetria = data.m_carTelemetryData[data.m_header.m_playerCarIndex];
            let telemetria: TelemetriaModel = {
                speed: minhaTelemetria.m_speed,
                drs: minhaTelemetria.m_drs,
                gear: minhaTelemetria.m_gear,
                brake: minhaTelemetria.m_brake,
                engineRPM: minhaTelemetria.m_engineRPM,
                steer: minhaTelemetria.m_steer,
                throttle: minhaTelemetria.m_throttle,
                engineTemperature: minhaTelemetria.m_engineTemperature,
                revLightsPercent: minhaTelemetria.m_revLightsPercent
            }
            console.log(telemetria);
            producer.emit('telemetria', telemetria);
        })
        client.address = '0.0.0.0';
        client.start();
    }

    @Get('stop')
    cancela() {
        client.stop();
    }
}
