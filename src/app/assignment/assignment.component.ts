import { Component } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  userid:string='';
  password:string='';
  disablesubmitbtn:boolean=false;
  list:Array<{mesgnum:number,message:string}>=[{mesgnum:1,message:"Submit"},{mesgnum:2,message:"Submiting..."}
    ,{mesgnum:3,message:"Submited"}];
  btname:string=this.list[0].message;
  getUsername(event:Event):void
  {
    const inputelement=event.target as HTMLInputElement;
    this.userid=inputelement.value;
    this.check();
  }
  getpassword(event:Event):void
  {
    const inputelement=event.target as HTMLInputElement;
    this.password=inputelement.value;
    this.check();
  }
  check():void                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  {
    if(this.password!='' && this.password!='')
    {
        this.disablesubmitbtn=true;
    }
    else
    {
      this.disablesubmitbtn=false;
    }
  }
  btnclick(event:Event)
  {
    this.btname=this.list[1].message;
    setTimeout(() => {
      this.btname=this.list[2].message;
    }, 2000);

    this.disablesubmitbtn=false;

   
  }
}
