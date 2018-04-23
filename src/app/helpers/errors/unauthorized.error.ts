import { Component } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron text-center">
      <h1>Oops! 403 Unauthorized</h1>
      <p>You do not have permission to access the document or program that you requested. Back <a routerLink="/home">home</a>.</p>
    </div> `
})

export class UnAuthorizeComponent {}
