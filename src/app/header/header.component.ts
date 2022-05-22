import { Component, OnInit } from '@angular/core';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  europeTime: any;
  constructor() { }

  ngOnInit(): void {
    
  }

warsawTime() {
    fetch(`https://worldtimeapi.org/api/timezone/Europe/Warsaw`)
   .then((response) => response.json())
   .then((json) => {
    Swal.fire({
      icon: 'info',
      title:'Warsaw time: ' + json.datetime.slice(11,16),
      text: 'Europe',
      color:'white',
      background: '#757575',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor:'#757575',
      cancelButtonText:'Close',
      timer: 3000
    });
   });
 }
 newYorkTime(){
  fetch(`https://worldtimeapi.org/api/timezone/America/New_York`)
  .then((response) => response.json())
  .then((json) => {
    Swal.fire({
      icon: 'info',
      title:'New York time: ' + json.datetime.slice(11,16),
      text: 'America',
      color:'white',
      background: '#757575',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor:'#757575',
      cancelButtonText:'Close',
      timer: 3000
    });
   });
 }
tokyoTime(){
  fetch(`https://worldtimeapi.org/api/timezone/Asia/Tokyo`)
  .then((response) => response.json())
  .then((json) => {
    Swal.fire({
      icon: 'info',
      title:'Tokyo time: ' + json.datetime.slice(11,16),
      text: 'Asia',
      color:'white',
      background: '#757575',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor:'#757575',
      cancelButtonText:'Close',
      timer: 3000
    });
   });
 }
sydneyTime(){
  fetch(`https://worldtimeapi.org/api/timezone/Australia/Sydney`)
  .then((response) => response.json())
  .then((json) => {
    Swal.fire({
      icon: 'info',
      title:'Sydney time: ' + json.datetime.slice(11,16),
      text: 'Australia',
      color:'white',
      background: '#757575',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor:'#757575',
      cancelButtonText:'Close',
      timer: 3000
    });
   });
 }

 cairoTime(){
  fetch(`https://worldtimeapi.org/api/timezone/Africa/Cairo`)
  .then((response) => response.json())
  .then((json) => {
    Swal.fire({
      icon: 'info',
      title:'Cairo time: ' + json.datetime.slice(11,16),
      text: 'Africa',
      color:'white',
      background: '#757575',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor:'#757575',
      cancelButtonText:'Close',
      timer: 3000
    });
   });
 }
}
