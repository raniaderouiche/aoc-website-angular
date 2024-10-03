import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  url: string = '/assets/data/team.json';
  list_items:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTeam()
  }

  getTeam(){
    this.http.get(this.url).subscribe(res => {
      this.list_items = res;
    });
  }

}
