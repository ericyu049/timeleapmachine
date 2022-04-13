import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { TopnavComponent } from './component/top-nav/topnav.component';
import { MaterialModule } from './material.module';
import { AppService } from './service/app.service';
import { AuthService } from './service/auth.service';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		DashboardComponent,
		TopnavComponent,
		SignupComponent
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
		{ provide: AuthService, useClass: AuthService },
		{ provide: AppService, useClass: AppService }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
