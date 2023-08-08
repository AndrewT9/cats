import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule],
  exports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule],
  providers: [],
  bootstrap: [],
})
export class MaterialModule {}
