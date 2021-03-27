import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favourite pet photos';
  image1 = 'https://cdn.slidesharecdn.com/ss_thumbnails/acollectionofcutebirds-090514225018-phpapp01-thumbnail-4.jpg?cb=1242390629';
  image3 = 'https://hips.hearstapps.com/clv.h-cdn.co/assets/15/31/1024x512/landscape-1438196158-indexgettyimages-175075399.jpg?resize=640:*';
  image2 = 'https://metro.co.uk/wp-content/uploads/2017/07/187144066.jpg?quality=90&strip=all';

  constructor() { }

  ngOnInit() {
  }

}