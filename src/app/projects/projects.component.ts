import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit } from '@angular/core';


declare var createTree2: any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],


})
export class ProjectsComponent implements OnInit{



  constructor() { }

  ngOnInit(): void {
    new createTree2();
  }

 
  
}



