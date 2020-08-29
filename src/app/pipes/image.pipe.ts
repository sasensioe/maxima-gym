import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string): string {

    if(img.includes('http')){
      return img;
    }else{
      return 'assets/img/no-image.png';
    }
  
  }

}
