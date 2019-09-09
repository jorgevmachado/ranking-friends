import {of} from 'rxjs';

export class MatDialogConfirmFalseMock {
  open() {
    return {
      afterClosed: () => of(false)
    };
  }
}
