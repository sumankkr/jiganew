import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userranking',
  templateUrl: './userranking.page.html',
  styleUrls: ['./userranking.page.scss'],
})
export class UserrankingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/'])
  }

}
