import { Component, OnInit } from '@angular/core';
import { WpPost } from './post-list';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {

  private posts: WpPost[];
  page_options: any;

  constructor( private postsService: PostsService, private router: Router ) { }

  ngOnInit() {

    this.postsService.getPosts().subscribe(
      (posts: WpPost[]) => this.posts = posts,
      (err: HttpErrorResponse) =>
            err.error instanceof Error
            ? console.log('An error occurred:', err.error.message)
            : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));

    this.postsService.getOptionsPageById('16').subscribe(
      (page_options: any[]) => this.page_options = page_options['acf'],
      (err: HttpErrorResponse) =>
            err.error instanceof Error
            ? console.log('An error occurred:', err.error.message)
            : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));

  }

  selectPost(slug) {
    this.router.navigate([slug]);
  }

}
