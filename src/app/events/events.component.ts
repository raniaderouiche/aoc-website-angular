import { Component, OnInit } from '@angular/core';
import { Event } from '../models/Event';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  videos_url: string = '/assets/data/videos.json';
  videos:any = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getEvents()
    this.getVideos()
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getEvents(){
    this.http.get(this.url).subscribe(res => {
      this.list_items = res;
    });
  }

  getVideos(){
    this.http.get(this.videos_url).subscribe(res => {
      this.videos = res;
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
    if (this.current_page < Math.ceil(this.list_items.length / this.rows)) {
      this.current_page = this.current_page + 1
    }
  }

  onPrevious(){
    if(this.current_page > 1) {
      this.current_page = this.current_page - 1
    }
  }

  OpenModal(event:any){
    this.selected_event = event
  }

  videos_currentPage = 1;
  pageSize = 2; // Number of videos per page

  nextPage() {
    if (this.videos_currentPage < Math.ceil(this.videos.length / this.pageSize)) {
      this.videos_currentPage++;
    }
  }

  prevPage() {
    if (this.videos_currentPage > 1) {
      this.videos_currentPage--;
    }
  }

  paginatedVideos(page: number){
    const start = this.pageSize * (page - 1)
    const end = start + this.pageSize
    return this.videos.slice(start, end)
  }

  setupVideosPagination(){
    const page_count = Math.ceil(this.videos.length / this.pageSize)
    return Array.from({length: page_count}, (_,i) => i + 1)
  }

  onVideosPageChange(page: number){
    this.videos_currentPage = page
  }
}
