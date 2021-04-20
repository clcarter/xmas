import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowRef {

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  get nativeWindow(): (Window & typeof globalThis) | null {
    return this.document.defaultView;
  }
}
