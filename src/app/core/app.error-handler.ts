import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {NotificationService} from './service/notification.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(private  injector: Injector) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    const notificationService = this.injector.get(NotificationService);
    if (errorResponse instanceof HttpErrorResponse) {
      switch (errorResponse.status) {
        case 400:
          errorResponse.error && errorResponse.error.message ?
            notificationService.notify(errorResponse.error.message) :
            notificationService.notify('Ocorreu um erro inesperado.');
          break;
        case 403:
          notificationService.notify('Não Autorizado.');
          break;
        case 404:
          notificationService.notify('Recurso não encontrado. Verifique o console para mais detalhes');
          break;
        case 406:
          errorResponse.error.message && errorResponse.error ?
            notificationService.notify(errorResponse.error.message) :
            notificationService.notify('Ocorreu um erro inesperado.');
          break;
        case 422:
          notificationService.notify('Erro');
          break;
        case 500:
          notificationService.notify('Ocorreu um erro no servidor.');
          break;
      }
    } else {
      notificationService.notify('Ocorreu um erro inesperado.');
    }
    super.handleError(errorResponse);
  }
}
