import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { appConfig } from './config';
import { AppFeatureModule, HealthModule, PrismaModule } from './modules';
import { auth } from './auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    AuthModule.forRoot({ auth }),
    PrismaModule,
    AppFeatureModule,
    HealthModule,
  ],
})
export class AppModule {}
