import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(){}

  ngOnInit(): void { }

}
