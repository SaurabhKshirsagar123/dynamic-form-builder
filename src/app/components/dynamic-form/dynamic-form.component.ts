import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  form: FormGroup;
  fieldTypes = [
    { label: 'Text', value: 'text' },
    { label: 'Textarea', value: 'textarea' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Radio', value: 'radio' },
    { label: 'Dropdown', value: 'select' }
  ];

  globalSettings = {
    label: '',
    placeholder: '',
    required: false
  };

  selectedFieldType: string | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fields: this.fb.array([])
    });
  }

  get fields() {
    return this.form.get('fields') as FormArray;
  }

  selectFieldType(type: string) {
    this.selectedFieldType = type;
  }

  saveFieldDetails() {
    if (this.selectedFieldType) {
      const field = this.fb.group({
        label: [this.globalSettings.label],
        placeholder: [this.globalSettings.placeholder],
        type: [this.selectedFieldType],
        required: [this.globalSettings.required],
        value: ['']
      });
      this.fields.push(field);
      this.selectedFieldType = null; // Reset selection
    }
  }

  saveFormDetails() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value.fields);
      alert('Form submitted successfully! Check the console.');
    }
  }
}

