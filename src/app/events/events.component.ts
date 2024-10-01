import { Component, OnInit } from '@angular/core';
import { Event } from '../models/Event';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  current_page: number = 1
  rows: number = 6
  url: string = '/assets/data/events.json';
  list_items: any = []
  selected_event: Event = {}

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEvents()
  }

  getEvents(){
    this.http.get(this.url).subscribe(res => {
      this.list_items = res;
    });
  }

  DisplayList(page: number){
    const start = this.rows * (page - 1)
    const end = start + this.rows
    return this.list_items.slice(start, end)
  }

  setupPagination(){
    const page_count = Math.ceil(this.list_items.length / this.rows)
    return Array.from({length: page_count}, (_,i) => i + 1)
  }

  onPageChange(page: number){
    this.current_page = page
  }

  onNext(){
    this.current_page = this.current_page + 1
  }

  onPrevious(){
    if(this.current_page > 1) {
      this.current_page = this.current_page - 1
    }
  }

  OpenModal(event:any){
    this.selected_event = event
  }
}
