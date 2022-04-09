import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MapComponent } from './component/map/map.component';
import { TopnavComponent } from './component/top-nav/topnav.component';
import { MaterialModule } from './material.module';
import { AppService } from './service/app.service';
import { LoginService } from './service/login.service';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		DashboardComponent,
		TopnavComponent,
		MapComponent
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
		{ provide: LoginService, useClass: LoginService },
		{ provide: AppService, useClass: AppService }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
