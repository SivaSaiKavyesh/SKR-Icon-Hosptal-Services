import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landed-page',
  templateUrl: './landed-page.component.html',
  styleUrls: ['./landed-page.component.css']
})
export class LandedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isNavBarOpen=false;
  isDropDownOpen=false;
  onNavBarClicked(){
    if(!this.isNavBarOpen)
      this.closeMobileNavBar();  

   }
  onOption1Clicked(){this.closeMobileNavBar()}
  onOption2Clicked(){this.closeMobileNavBar()}
  onOption3Clicked(){this.closeMobileNavBar()}
  onOption4Clicked(){this.closeMobileNavBar()}
  onDropDownClicked(){
    if(!this.isDropDownOpen){
    document.getElementById("Mobile-Dropdown-Content").style.display="block"
    this.isDropDownOpen=true;
    }
    else{
    document.getElementById("Mobile-Dropdown-Content").style.display="none";
    this.isDropDownOpen=false;
    }
  }
  onDrop1Clicked(){this.closeMobileNavBar()}
  onDrop2Clicked(){this.closeMobileNavBar()}
  onDrop3Clicked(){this.closeMobileNavBar()}


  //Method to Open Mobile Nav Bar
  openMobileNavBar(){
        this.isNavBarOpen=true;
         document.getElementById("MobileOptions").style.display="block";
  }


  //Method to close Mobile Nav Bar
  closeMobileNavBar(){
    this.isNavBarOpen=false;
    document.getElementById("MobileOptions").style.display="none";
  }




}
