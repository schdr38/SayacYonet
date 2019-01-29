import { ErrorHandler, Inject, Injector, Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor(private injector: Injector) { super(); }
  handleError(error: any): void {

  const toastr = this.injector.get(ToastrService);
        if (error instanceof HttpErrorResponse) {
            if(error.status===404)
                toastr.error('Gerekli elemanlar bulunamadı','Hata');
          else toastr.error(error.message,'http error');
          
        } else if (error instanceof TypeError) {
          toastr.error(error.message,'Bir hata oluştu.');
      } else if (error instanceof Error) {
          toastr.error(error.message,'Genel bir hata oluştu.');
      } else {
          toastr.error('Bir şeyler oldu', error);
      }
    }
}
