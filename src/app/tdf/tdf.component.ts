import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  unamePattern = "^[a-z_-]{2,12}$";
  userid = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  zip ="^[0-9_-]{6,8}$"
  onSubmit(form: NgForm) {

  }
  local:any;
  submit(a:NgForm){
    this.local = a;
    console.log(this.local);
  }

}
