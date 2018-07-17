import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ApiService } from './api.service';

const routes: Routes = [
  { path: 'post/:id', component: PostComponent }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
