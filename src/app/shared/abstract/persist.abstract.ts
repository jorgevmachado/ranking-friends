import {OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

import {BaseRest} from '../interface/base-rest.interface';
import {NotificationService} from '../../core/service/notification.service';
import MESSAGE from '../../shared/constant/message.constant';

export abstract class PersistAbstract<T> implements OnInit {

  form: FormGroup;
  data: T;
  dataId: string;
  isUpdate: boolean;
  isLoading: boolean;
  validationErros: any = {};

  abstract formInit(): FormGroup;

  protected constructor(
    protected dataService: BaseRest<T>,
    protected notificationService: NotificationService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected endPoint: string
  ) {
  }


  ngOnInit(): void {
    this.form = this.formInit();
    this.onReceiveData();
  }

  goBack(): void {
    this.router.navigate([`${this.endPoint}`]);
  }

  onReceiveData(): void {
    this.route.data.subscribe((data: { responseData }) => {
      if (data.responseData && data.responseData.data) {
        this.dataId = data.responseData.data.id;
        this.form.patchValue(this.transformReceiveData(data.responseData.data));
        this.isUpdate = true;
      }
    });
  }

  transformBeforeSave(data: T): T {
    return data;
  }

  transformReceiveData(data: T): T {
    return data;
  }

  onSave() {
    if (this.form.valid) {
      let data = Object.assign({}, this.form.value) as T;
      data.id = this.dataId;
      data = this.transformBeforeSave(data);
      this.isLoading = true;
      if (this.isUpdate) {
        this.isLoading = false;
        this.dataService.update(data).subscribe(this.onSuccess, this.onError, this.onComplete);
      } else {
        delete data.id;
        this.dataService.save(data).subscribe(this.onSuccess, this.onError, this.onComplete);
      }
    } else {
      this.notificationService.notify(MESSAGE.FORM_INVALID);
    }
  }

  onComplete(): void  {
    this.isLoading = false;
  }

  onSuccess = (): void => {
    this.isLoading = false;
    this.notificationService.notify(MESSAGE.SAVE_SUCCESS);
    this.goBack();
  }

  onError = (errorResponse: HttpErrorResponse): void => {
    this.isLoading = false;
    if (errorResponse.status === 422 && errorResponse.error) {
      this.validationErros = errorResponse.error.errors;
      return this.notificationService.notify(errorResponse.error.message || MESSAGE.FIELD_INFO);
    }
    throw errorResponse;
  }
}
