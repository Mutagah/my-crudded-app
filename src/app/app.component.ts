import { Component, OnInit } from '@angular/core';
import { DataFetchService } from './data-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private dataFetch: DataFetchService) {
    console.log(this.dataFetch.getProducts());
  }
  title = 'my-cruded-app';
  products!: any;
  ngOnInit(): void {
    this.dataFetch.getProducts().subscribe({
      // When we get the values successfully
      next: (res: any) => {
        // response is returned on a successful response
        return this.products = res;
      },
      // When we encounter an error
      error: (error: any) => {
        console.log('The error block');
        console.log(error);
      },
      //      Runs after the data being fetched has completed
      complete: () => {
        console.log('The completion block');
      },
    });
  }
}
