import { Component } from "@angular/core";

@Component({
    selector: 'Not-Found',
    template: `<div class="jumbotron text-center">
                    <h1>404 Not Found</h1>
                    <p>You may be lost. Follow the breadcrumbs back <a routerLink="/home">home</a>.</p>
              </div>
            `
})
export class NotFoundComponent{

}