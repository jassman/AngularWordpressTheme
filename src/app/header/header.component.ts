import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {

  title = 'THEME';
  menu: any;
  title_page: any;
  descripction: string;
  menu_main: any;

  constructor( private headerService: HeaderService, private router: Router ) { }

  ngOnInit() {
    /**
     * @returns All menus
     */
    this.headerService.getMenu().subscribe(
      (menu: any) => this.menu = menu,
      (err: HttpErrorResponse) =>
            err.error instanceof Error
            ? console.log('An error occurred:', err.error.message)
            : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));

    /**
     * @returns Main Menu (con id 2)
     */
    this.headerService.getMenubyID('2').subscribe(
      (menu_main: any) => this.menu_main = menu_main.items,
      (err: HttpErrorResponse) =>
            err.error instanceof Error
            ? console.log('An error occurred:', err.error.message)
            : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));

    /**
     * @returns Title of page
     */
    this.headerService.getTitleWebPage().subscribe(
      (title_page: any) => this.title_page = title_page,
      (err: HttpErrorResponse) =>
            err.error instanceof Error
            ? console.log('An error occurred:', err.error.message)
            : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));
  }

  /**
  * @description Listener for navigate in router
  */
  selectPost(slug) {
    this.router.navigate([slug]);
  }

}
