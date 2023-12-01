import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat';

@Injectable({ providedIn: 'root' })
export class UserService {
  activatedEmitter = new Subject<boolean>();
}
