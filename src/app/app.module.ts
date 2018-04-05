 // Module Imports
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule, BrowserXhr } from '@angular/http';

 // Component Imports
import { AppComponent } from './app.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/account/login/login.component';
import { PackagesComponent } from './Components/packages/packages.component';
import { NewsComponent } from './Components/news/news.component';
import { InvestorsComponent } from './Components/investors/investors.component';
import { RegisterComponent } from './Components/account/register/register.component';
import { ManageComponent } from './Components/account/manage/manage.component';
import { UserInfoComponent } from './Components/account/user-info/user-info.component';
import { SupportComponent } from './Components/support/support.component';
import { FaqComponent } from './Components/faq/faq.component';
import { RefferalsComponent } from './Components/refferals/refferals.component';
import { TopnavComponent } from './Components/topnav/topnav.component';

// Services Imports
import { UserService } from 'app/Services/User.Services';
import { AuthGuard } from 'app/Services/AuthGaurd';
import { PostService } from 'app/Services/Post.Service';
import { CustExtBrowserXhr } from 'app/Services/cust-ext-browser-xhr';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    PackagesComponent,
    NewsComponent,
    InvestorsComponent,
    RegisterComponent,
    ManageComponent,
    UserInfoComponent,
    SupportComponent,
    FaqComponent,
    RefferalsComponent,
    TopnavComponent
  ],
  imports: [
    [BrowserModule],
    [BrowserAnimationsModule],
    [FormsModule],
    [routing],
    [HttpClientModule],
    [HttpModule],
  ],
  providers: [
    {provide: BrowserXhr, useClass: CustExtBrowserXhr},
    UserService, AuthGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
