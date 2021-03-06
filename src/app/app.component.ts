import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote-and-tip';

  cors_utl = "https://cors-anywhere.herokuapp.com/https://av91vwnh7c.execute-api.us-east-1.amazonaws.com/v1/quotip";
  response2: any;

  constructor(private http: HttpClient) {
    //console.log("calling httpClient");
  }

  ngOnInit() {

  }

  quote(){
    this.http.get(this.cors_utl)
    .subscribe((response) => {
      //console.log(response);
      this.response2 = response;
    })
  }

}
