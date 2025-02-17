import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideHttpClient } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(), // ✅ Correctly included as a provider
    provideServerRouting(serverRoutes)
  ]
};

// ✅ Correctly merging configurations
export const config = mergeApplicationConfig(appConfig, serverConfig);
