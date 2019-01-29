import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalService {
     private subject: Subject<any>;
      /**
       *
       */
      constructor() {
        this.subject = new Subject<{baslik: string, icerik: string}>();
      }
    BeklemeEkranıOlustur(baslik: string, icerik: string) {
    this.subject.next({baslik: baslik, icerik: icerik});
    }
    temizle() {
      this.subject.unsubscribe();
    }
    beklemeEkraniGetir(): Observable<{baslik: string, icerik: string}> {
      return this.subject;
    }
}
