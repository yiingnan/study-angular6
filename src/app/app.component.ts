import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  x = 100;
url = 'http://drfoodle.com/wp-content/uploads/2017/10/Fast-food-800x500.jpg';
htmlStr: string = 'Hey!';
heroes = [
  {name:'thor'},
  {name:'loki'},
  {name:'black panther'},
  {name:'cap'},
  {name:'iron man'}
];

upperCase:string = '';
textInput(event) {
this.upperCase = event.target.value.toUpperCase();
}

fg = "ffaabb";
isSpecial = true;
fontSize = '100px';
}
