import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
