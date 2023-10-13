import {
    Component, ComponentFactoryResolver, Input,
    OnInit, ViewContainerRef, Output, EventEmitter, OnChanges, SimpleChanges
} from "@angular/core";
import { Article } from "src/app/model/article";
import { articleMapper } from "../article.mapper";

@Component({
    selector: 'article-renderer-component',
    template: '',
    styleUrls: ['./article.renderer.component.scss']
})
export class ArticleRendererComponent implements OnInit, OnChanges {

    @Input() articles: Article[];
    @Input() featuredVideoArticle: Article = null;
    @Output() featuredVideoArticleChange: EventEmitter<Article> = new EventEmitter();

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        this.viewContainerRef.clear();
        this.renderArticles();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.viewContainerRef.clear();
        this.renderArticles();
    }

    renderArticles() {
        for (const article of this.articles) {
            const resolveArticle = articleMapper.get(article.type);

            if (resolveArticle) {
                if (this.featuredVideoArticle == null && article.type == "VIDEO") {
                    this.featuredVideoArticle = article;
                    this.featuredVideoArticleChange.emit(article);
                    continue;
                }
                if (this.featuredVideoArticle == article) {
                    continue;
                }

                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(resolveArticle);
                const componentRef = this.viewContainerRef.createComponent(componentFactory);

                const hostElement = <HTMLElement>componentRef.location.nativeElement;
                hostElement.classList.add('article-item');
                // hostElement.insertAdjacentElement("afterbegin", this.addArticleTitle(article.title));

                componentRef.instance.article = article;
                componentRef.changeDetectorRef.detectChanges();
            } else {
                console.warn(`component not implemented yet for this type ${article.type}.`);
            }
        }
    }

    private addArticleTitle(title: string) {
        const heading = document.createElement('h2');
        heading.classList.add('article-title');
        heading.innerText = title;
        heading.title = title;
        return heading;
    }
}
