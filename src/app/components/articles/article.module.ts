import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { articleEntries } from "./article.entries";
import { ArticleRendererComponent } from "./renderer/article.renderer.component";
import { ArticleFilterComponent } from "./filter/article.filter.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...articleEntries,
        ArticleRendererComponent,
        ArticleFilterComponent
    ],
    entryComponents: [
        ...articleEntries
    ],
    exports: [
        ArticleRendererComponent,
        ArticleFilterComponent,
        ...articleEntries
    ]
})
export class ArticleModule { }
