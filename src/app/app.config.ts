import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideToastr({
      timeOut: 10000, // Set time for the notification to disappear
      positionClass: 'toast-top-right', // Positioning
      preventDuplicates: true, // Prevent duplicate toasts
      closeButton: true, // Add a close button
      progressBar: true, // Show progress bar
      tapToDismiss: false, // Disable dismiss on click
      extendedTimeOut: 2000, // Extended timeout if the user hovers over the toast
    }),
  ],
};
