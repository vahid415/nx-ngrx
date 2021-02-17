import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Article } from '@angular-ngrx-nx-realworld-example-app/api';

@Component({
  selector: 'app-article-meta',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  @Input() article: Article;
  @Input() isAuthenticated: boolean;
  @Input() canModify: boolean;


}
