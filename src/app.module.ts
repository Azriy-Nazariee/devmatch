import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ProfilesModule, 

    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
      const uri = configService.get<string>('MONGODB_URI');
      console.log('--- DB URI LOADED: ---', uri); // Add this line to debug!
      
      return {
        uri: uri || 'mongodb://atlas-fallback-string-here', 
      };
    },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
