import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CharactersService} from '../../services/characters.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {

  creationForm: FormGroup;

  error = '';

  constructor(private characterService: CharactersService) {
    this.creationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  creation() {

    this.error = '';

    if(this.creationForm.valid) {
      const data: any = this.creationForm.value;

      console.log({data});

      /*this.characterService.create(data).subscribe(response => {
        console.log('la donnée est créée');
      });*/
    } else {
      this.error = `Le formulaire n'est pas valide`;
    }
  }
}
