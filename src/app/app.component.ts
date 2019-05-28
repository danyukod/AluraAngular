import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: any[] = [];
  
  constructor(photoSerice: PhotoService){

    photoSerice
      .listFromUser('flavio')
      .subscribe(photos => 
        {
          console.log(photos[0].userId);
          this.photos = photos
        });
    } 
}
