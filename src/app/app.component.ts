import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';


  openNav() {

  $('#sidebar').toggleClass('sidebar__compressed')  
  $('.main').toggleClass('compressed__view')    
  }
  closeNav()
  {
    $('#sidebar').toggleClass('sidebar__compressed')  
    $('.main').toggleClass('compressed__view')    
  }
  
}
