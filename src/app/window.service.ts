import { Injectable } from '@angular/core';

function _window(): typeof globalThis {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRef {

  get nativeWindow(): typeof globalThis {
    return _window();
  }
}
