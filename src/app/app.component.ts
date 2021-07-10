import { Component, OnInit } from '@angular/core';
import { FakeAPIService } from './shared/fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interceptor';
  public img: string = '';

  constructor(private fakeAPIService: FakeAPIService) {}

  public ngOnInit(): void {
    this.fakeAPIService.getUser().subscribe((data: any) => console.log(data));
  }
}
