import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private myService: DataFetchService
  ) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      // My form controls that have been associated with myForm
      title: ['', Validators.required],
      price: ['', [Validators.required,Validators.min(10)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      rate: ['', Validators.required],
      count: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.myForm.value);
    // Posting my data to the json file
    if (this.myForm.valid) {
      this.myService
        .postData(this.myForm.value)
        .subscribe((response) => console.log('Post Successful', response));
    }
    else{
      console.log("Cannot post you have an error in your form")
    }
  }
}
