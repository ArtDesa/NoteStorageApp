import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../services/backend.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  constructor(public route: ActivatedRoute, private router: Router, private server: BackendService) { }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
