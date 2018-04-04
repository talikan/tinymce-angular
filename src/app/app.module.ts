import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditorModule } from '../../tinymce-angular-component/src/editor/editor.module';
import { NgContentTestComponent } from './ng-content-test/ng-content-test.component';

@NgModule({
  declarations: [AppComponent, NgContentTestComponent],
  imports: [BrowserModule, EditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
