import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NotificationService } from '../log/notificationservice';
@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private readonly nService: NotificationService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(retry(1), catchError(
      (error: HttpErrorResponse) => {
        if(error.error.statusCode ===  409){
          this.nService.showError(error.error.message);
        }
        return throwError(error);}
    ));
  }
}
