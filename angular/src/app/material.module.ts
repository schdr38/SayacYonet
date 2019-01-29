import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatTableModule, MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatProgressBarModule, MatSortModule,
  MatSpinner, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule
    ],
    exports: [MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatSelectModule

]
})


export class MaterialModule  {

}
