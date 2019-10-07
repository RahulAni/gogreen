import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
   selector: 'app-main',
   templateUrl: './main.component.html',
   styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

   soils: string[] = ['Alluvial Soil', 'Laterite Soil', 'Black Soil', 'Red Soil', 'Dessert Soil', 'Mountain Soil'];
   seeds: string[] = ['Rice', 'Wheat', 'Cotton', 'Jute', 'Sugarcane', 'Tea', 'Coffee', 'Cashew Nut', 'Rubber', 'Coconut', 'Oil Seeds', 'Jowar', 'Ragi', 'Maize', 'Groundnut', 'Millet', 'Potato', 'Barley', 'Spices', 'Tropical Fruits'];

   results: any[];
   bestseeds: any[];

   constructor(public dialog: MatDialog) {
      this.bestseeds = [
         {
            "Soil": "Alluvial Soil",
            "Plant": ["Rice", "Wheat", "Cotton", "Jute", "Sugarcane"]
         },
         {
            "Soil": "Laterite Soil",
            "Plant": ["Tea", "Coffee", "Cashew Nut", "Rubber", "Coconut"]
         },
         {
            "Soil": "Black Soil",
            "Plant": ["Oil Seeds", "Jowar", "Ragi", "Maize"]
         },
         {
            "Soil": "Red Soil",
            "Plant": ["Groundnut", "Millet", "Potato", "Rice", "Wheat", "Sugarcane"]
         },
         {
            "Soil": "Desert Soil",
            "Plant": ["Millet", "Barley"]
         },
         {
            "Soil": "Mountain Soil",
            "Plant": ["Tea", "Coffee", "Spices", "Tropical Fruits"]
         }
      ];
   }
   
   myControlSoils = new FormControl();
   myControlSeeds = new FormControl();
   filteredSoils: Observable<string[]>;
   filteredSeeds: Observable<string[]>;

   
   ngOnInit() {
      debugger;
      this.filteredSoils = this.myControlSoils.valueChanges.pipe(
         startWith(''),
         map(value => this._filterSoils(value))
      )
      this.filteredSeeds = this.myControlSeeds.valueChanges.pipe(
         startWith(''),
         map(value => this._filterSeeds(value))
      )
   }

   private _filterSoils(valueso: string): string[]{
      const filterValueSo = valueso.toLowerCase();
      return this.soils.filter(soil => soil.toLowerCase().includes(filterValueSo))
   }

   private _filterSeeds(valuese: string): string[]{
      const filterValueSe = valuese.toLowerCase();
      return this.seeds.filter(seed => seed.toLowerCase().includes(filterValueSe))
   }

   search() {
      this.dialog.open(DialogBoxComponent, {
         data: { name: this.soils }
      });
   }
}