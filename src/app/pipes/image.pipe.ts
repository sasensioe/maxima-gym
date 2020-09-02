import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, collection: string): string {

    switch (collection) {
      case 'articles':
        if(img.includes('http')){
          return img;
        }else{
          return 'assets/img/pages/no-image.png';
        }
        break;
      case 'users':
        if(img.includes('http')){
          return img;
        }else{
          return 'assets/img/dashboard/no-image.png';
        }
    
      default:
        break;
    }


  
  }

}
