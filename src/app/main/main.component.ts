import { Component, OnInit, Input } from '@angular/core';
import * as Material from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  
  public soil = "";
  public plant = "";

  seeds: any[];
  
  constructor(private dialog: Material.MatDialog) {
    this.seeds = [
      {
          "Soil": "Alluvial Soil",
          "Plant": ["Rice","Wheat","Cotton","Jute","Sugarcane"]
      },
      {
          "Soil": "Laterite Soil",
          "Plant": ["Tea","Coffee","Cashew","Rubber","Coconut"]
      },
      {
          "Soil": "Black Soil",
          "Plant": ["Oil Seeds","Jowar","Ragi","Maize"]
      },
      {
          "Soil": "Red Soil",
          "Plant": ["Groundnut","Millet","Potato","Rice","Wheat","Sugarcane"]
      },
      {
          "Soil": "Desert Soil",
          "Plant": ["Millet","Barley"]
      },
      {
          "Soil": "Mountain Soil",
          "Plant": ["Tea","Coffee","Spices","Tropical Fruits"]
      }
    ];
  }

  ngOnInit() {
    console.log(this.seeds);
  }

  search(){
    const dialogconfig = new Material.MatDialogConfig;
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "60%";
    this.dialog.open(DialogBoxComponent, dialogconfig);
  }
}
