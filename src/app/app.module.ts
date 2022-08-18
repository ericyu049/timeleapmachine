import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DocCenterComponent } from './component/doc-center/doccenter.component';
import { AttachmentComponent } from './component/doc-view/attachment/attachment.component';
import { AuditComponent } from './component/doc-view/audit/audit.component';
import { DocumentComponent } from './component/doc-view/document/document.component';
import { IndexComponent } from './component/doc-view/index/index.component';
import { NotesComponent } from './component/doc-view/notes/notes.component';
import { ViewComponent } from './component/doc-view/view/view.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { TopnavComponent } from './component/top-nav/topnav.component';
import { MaterialModule } from './material.module';
import { AppService } from './service/app.service';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/authguard.service';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		DashboardComponent,
		TopnavComponent,
		SignupComponent,
		ViewComponent,
		IndexComponent,
		NotesComponent,
		AuditComponent,
		AttachmentComponent,
		DocCenterComponent,
		DocumentComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		MaterialModule,
		HttpClientModule
	],
	providers: [
		AuthService,
		AuthGuardService,
		AppService,
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
