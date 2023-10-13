import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ZyllemApiService } from "./app.service";
import { Article, VideoArticle } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
    private readonly apiService: ZyllemApiService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  private results: Article[];
  videoArticleHighlight: VideoArticle;

  get articles() {
    return this.results;
  }

  setVideoHighlight(event: VideoArticle): void {
    this.videoArticleHighlight = event;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {

    this.apiService.getArticles()
      .subscribe(result => {
        this.results = result;
        this.cdr.markForCheck();
      });
  }


}
