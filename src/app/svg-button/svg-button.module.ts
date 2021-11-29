import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgButtonComponent } from './svg-button.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [SvgButtonComponent],
  exports: [SvgButtonComponent]
})
export class SvgButtonModule {}