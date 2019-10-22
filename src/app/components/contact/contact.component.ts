import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

contactForm:FormGroup;
disabledSubmitButton: boolean = true;
optionSelect:Array<any>;

  @HostListener('input') oninput() {
    if (this.contactForm.valid){
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
