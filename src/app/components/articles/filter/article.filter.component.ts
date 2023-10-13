import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'article-filter-component',
    templateUrl: './article.filter.component.html'
})
export class ArticleFilterComponent implements OnInit {

    filteredArticle: string;
    @Output() filteredArticleChange: EventEmitter<string> = new EventEmitter();

    private ARTICLE_TYPES = [
        {label: "All", index: "ALL"},
        {label: "Normal", index: "NORMAL"},
        {label: "Video", index: "VIDEO"},
        {label: "Feature", index: "FEATURED"},
        {label: "Ad", index: "FEATURED_AD"},        
    ]

    ngOnInit(): void {
        
    }

    setFilter(filter: string) {
        this.filteredArticle = filter
        this.filteredArticleChange.emit(filter);
    }
};