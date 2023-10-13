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
  private active: Article[];
  videoArticleHighlight: VideoArticle;
  articleFilter: string;

  get articles() {
    return this.results;
  }

  get activeArticles() {
    return this.active;
  }

  setVideoHighlight(event: VideoArticle): void {
    this.videoArticleHighlight = event;
    this.cdr.detectChanges();
  }

  setFilter(event: string) {
    this.articleFilter = event;
    if (event === "ALL") {
      this.active = this.results;
    } else {
      this.active = this.results.filter((obj) => { return obj.type === event; });
    }
    
    this.cdr.detectChanges;
  }

  ngOnInit(): void {

    this.apiService.getArticles()
      .subscribe(result => {
        this.results = result;
        this.active = result;
        this.cdr.markForCheck();
      });
  }


}
