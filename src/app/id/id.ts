import { Component } from '@angular/core';

@Component({
  selector: 'app-id',
  imports: [],
  templateUrl: './id.html',
  styleUrl: './id.scss',
})
export class Id {
        isIsreali=true;
        firstName="israel";
        lastName="israeli";
        numOfChilds=0;
        id=1234567890;
        bornDate = new Date(2020, 1, 2);
        pictureName="elearning";
        buttonText: string = "הסתר את התמונה";

  age(){
    const currentYear = new Date().getFullYear();
    const a=currentYear-this.bornDate.getFullYear();
    return a;
};
changeVisibility(img: HTMLElement){
    this.buttonText === "הסתר את התמונה" ? img.hidden=true  : img.hidden=false;
    if(this.buttonText==="הסתר את התמונה")
      {this.buttonText="הצג את התמונה"}
    else{
       this.buttonText = "הסתר את התמונה"
    }

}
};

