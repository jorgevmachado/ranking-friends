import {EventEmitter, Injectable, Injector} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class NotificationService {
  notifier = new EventEmitter<string>();

  constructor(private injector: Injector) {
  }

  notify(message: string, duration?: number) {
    this.injector.get(MatSnackBar).open(message, 'OK', {
      duration: duration ? duration : 5000,
    });
    this.notifier.emit(message);
  }
}
