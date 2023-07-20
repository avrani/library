import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchFieldComponent,
    DescriptionComponent,
    ListComponent,
    EditComponent,
    AddEditFormComponent,
    AddComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
