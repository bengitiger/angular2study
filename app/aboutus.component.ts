import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about-us',
    templateUrl: 'app/aboutus.html'
})

export class AboutUsComponent {
    teammembers: String[];

    constructor() {

    }

    ngOnInit() {
        this.teammembers = ['닌자','고구려','백제'];
    }
}