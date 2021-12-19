import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

/* import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';
import { KmeansComponent } from './components/kmeans/kmeans.component';
import { KmeansWekaComponent } from './components/kmeans-weka/kmeans_weka.component';
import { PanelComponent } from './components/panel/panel.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchClusterPipe } from './pipes/search-cluster.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KmeansComponent,
    KmeansWekaComponent,
    PanelComponent,
    NavbarComponent,
    HomeComponent,
    SearchClusterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
