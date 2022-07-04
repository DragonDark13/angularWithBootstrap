import {Component, Directive, OnInit} from '@angular/core';
import {DataService} from "../data.service";



interface Source {
  id: string;
  name: string;
}

interface Article {
  source?: Source;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: Date;
  content?: string;
}

type RootObject= {
  status?: string;
  totalResults?: number;
  articles?: Article[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  data:Article[]=[];

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getNews().subscribe((data:RootObject) => {
      console.log(data)
      const data111 :Article[] =data.articles!;
      console.log(data['articles']);
            this.data = data111;
      // this.data = data.articles;
    })
  }

}
