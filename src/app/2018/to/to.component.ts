import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'xmas-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.scss']
})
export class ToComponent implements OnInit {
  gifts: Observable<{ to: string | null; from: string | null; }> | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.gifts = this.route.paramMap.pipe(
      switchMap(params => {
        return of({to: params.get('to'), from: params.get('from')})
    }))
  }

}
