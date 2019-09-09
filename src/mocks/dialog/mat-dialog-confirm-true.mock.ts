import {of} from 'rxjs';

export class MatDialogConfirmTrueMock {
  open() {
    return {
      afterClosed: () => of(true)
    };
  }
}
