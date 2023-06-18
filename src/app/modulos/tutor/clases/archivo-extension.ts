import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ArchivoValidacion {
  static extension(control: AbstractControl): ValidationErrors | null {
    if (control.value == "") {
      return { extension: true };
    } else {
      let file_ext = control.value.split('.').pop();
      if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'pdf' || file_ext == 'docx') {
        return null;
      }
      return { extension: true };
    }
  }
}
