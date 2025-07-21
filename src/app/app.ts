import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionaContato } from "./adiciona-contato/adiciona-contato";

@Component({
  selector: 'app-root',
  imports: [AdicionaContato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'agenda';
}
