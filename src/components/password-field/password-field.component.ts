import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  easyValidation,
  mediumValidation,
  strongValidation,
} from '../../data/passwordValidation';

@Component({
  selector: 'password-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss',
})
export class PasswordField {
  @Input() value = '';
  level = 0;
  strength = '';
  passwordValidation() {
    if (!this.value) {
      this.strength = '';
      return;
    }
    if (this.value.length < 8) {
      this.strength = 'short';
      return;
    }
    const easy = easyValidation.some((item) => item.test(this.value));
    const medium = mediumValidation.some((item) => item.test(this.value));
    const strong = strongValidation.test(this.value);
    if (easy) {
      this.level = 1;
      this.strength = 'easy';
      return;
    }
    if (medium) {
      this.level = 2;
      this.strength = 'medium';
      return;
    }
    if (strong) {
      this.level = 3;
      this.strength = 'strong';
      return;
    }
  }
}
