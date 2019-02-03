import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  
  public newBookForm: FormGroup; 

  constructor() { }

  ngOnInit() {
    this.newBookForm = new FormGroup({
      title: new FormControl(),
      lastName: new FormControl(),
      firstName: new FormControl(),
      summary: new FormControl(),
      category: new FormControl(),
      publishedDate: new FormControl(),
      publisher: new FormControl(),
      pages: new FormControl(),
      isbn: new FormControl()
    })
  }

}
