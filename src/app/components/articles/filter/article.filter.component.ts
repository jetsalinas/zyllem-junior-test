import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'article-filter-component',
    templateUrl: './article.filter.component.html'
})
export class ArticleFilterComponent implements OnInit {

    filteredArticle: string;
    @Output() filterArticleChange: EventEmitter<string> = new EventEmitter();

    private ARTICLE_TYPES = [
        {label: "Normal", index: "NORMAL"},
        {label: "Video", index: "VIDEO"},
        {label: "Feature", index: "FEATURE"},
        {label: "Ad", index: "FEATURE_AD"},        
    ]

    ngOnInit(): void {
        
    }

    setFilter(filter) {
        this.filteredArticle = filter
        this.filterArticleChange.emit(filter);
    }
};