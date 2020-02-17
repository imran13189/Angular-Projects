import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BlogsectionComponent } from './home/blogsection/blogsection.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { MainComponent } from './home/main/main.component';
import { PropertiesSectionComponent } from './home/properties-section/properties-section.component';
import { FeatureSectionComponent } from './home/feature-section/feature-section.component';
import { ModalPopupComponent } from './shared/modal-popup/modal-popup.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginWizardComponent } from './shared/login-wizard/login-wizard.component';
import { FormWizardModule } from 'angular2-wizard';
import { SocialLoginModule, FacebookLoginProvider, GoogleLoginProvider, AuthServiceConfig } from 'ng4-social-login'
import { UserService } from './services/user.service';
import { AuthinterceptorService } from './auth/authinterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsComponent } from './reports/reports.component';
import { AgGridModule } from "@ag-grid-community/angular";

const config = new AuthServiceConfig([{
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider('223067339264-rh1atupciklsdujub6pbrbbfm2jt2t1h.apps.googleusercontent.com')
},
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('171062060848370')
  }
], false);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogsectionComponent,
    HeroSectionComponent,
    MainComponent,
    PropertiesSectionComponent,
    FeatureSectionComponent,
    ModalPopupComponent,
    LoginWizardComponent,
    ReportsComponent
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormWizardModule,
    SocialLoginModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    ToastrModule.forRoot({
      progressBar: true
    }),
   
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: provideConfig },
    UserService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalPopupComponent]
})
export class AppModule { }
