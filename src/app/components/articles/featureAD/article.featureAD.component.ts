import { Component, Input } from "@angular/core";

import { FeaturedAdArticle } from "src/app/model/article";
import { AbstractArticleComponent } from "../abstract.article.component";

@Component({
    selector: 'article-featureAD-component',
    templateUrl: './article.featureAD.component.html',
    styles: ['img {max-width: 100%};']
})
export class ArticleFeatureADComponent extends AbstractArticleComponent {

    @Input() article: FeaturedAdArticle;
}
