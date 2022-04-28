import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharactersService} from '../../services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  names: any[] = [
    'Emeric',
    'Toto',
    'Tata'
  ];

  title: string | null = null;

  characters: any[] = [];

  constructor(characterService: CharactersService) {
    characterService.findAll().subscribe((response) => {
      this.characters = response.results;
    });
  }

  ngOnInit(): void {
  }

  defineTitle() {
    this.title = 'Bonjour je suis le titre';
  }
}
