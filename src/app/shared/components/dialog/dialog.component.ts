import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Dialog} from '../../interface/dialog.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {

  showConfirmButton = true;
  showCancelButton = true;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Dialog) {
    if (data.hasOwnProperty('showConfirmButton') && data.showConfirmButton === false) {
      this.showConfirmButton = data.showConfirmButton;
    }
    if (data.hasOwnProperty('showCancelButton') && data.showCancelButton === false) {
      this.showCancelButton = data.showCancelButton;
    }
  }

  onCloseConfirm() {
    this.dialogRef.close(true);
  }

  onCloseCancel() {
    this.dialogRef.close();
  }

}
