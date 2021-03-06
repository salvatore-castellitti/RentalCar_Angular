import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CustomButtonComponent} from "./custom-component/custom-button/custom-button.component";
import {CustomTableComponent} from "./custom-component/custom-table/custom-table.component";
import {PaginationPipe} from "./pipes/pagination.pipe";
import {AmountPagesTablePipe} from "./pipes/amount-pages-table.pipe";
import {SearchFilterPipe} from "./pipes/search-filter.pipe";
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { CarParkComponent } from './pages/car-park/car-park.component';
import { CustomFormComponent } from './custom-component/custom-form/custom-form.component';
import { FormAddComponent } from './pages/form-add/form-add.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from "@angular/common";
import { LoginComponent } from './login/login.component';

import {fakeBackendProvider} from "./_helpers/fake.backend";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    CustomTableComponent,
    PaginationPipe,
    AmountPagesTablePipe,
    SearchFilterPipe,
    AdminHomepageComponent,
    CarParkComponent,
    CustomFormComponent,
    FormAddComponent,
    ReservationsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
