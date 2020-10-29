import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './../log/errorservice';
import { LoggingService } from '../log/logginservice';
import { NotificationService } from '../log/notificationservice';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse) {
        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);
        let message: string;
        let stackTrace: any;
        if (error instanceof HttpErrorResponse) {
            // Errores del servidor
            message = errorService.getServerMessage(error);
            stackTrace = errorService.getServerStack(error);
            console.log(message, '        // Errores del servidor')
            notifier.showError(message);
        } else {
            // Errores del cliente
            message = errorService.getClientErrorMessage(error);
            notifier.showError(message);
        }
        // Always log errors
        logger.logError(message, stackTrace);

    }
}
