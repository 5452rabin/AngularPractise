import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.css'
})
export class UploadImageComponent {


  constructor(private firebasestorage:AngularFireStorage){}
  async onfilechange(event:any)
  {
    const file=event.target.files[0];
    if(file)
    {
      const path=`ctp/${file.name}`;
      const uploadtask= await this.firebasestorage.upload(path,file);
      const url= await uploadtask.ref.getDownloadURL();
      console.log(url);
      

    }
  }
}
