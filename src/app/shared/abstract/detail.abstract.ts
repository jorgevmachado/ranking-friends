import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

export abstract class DetailAbstract<T> implements OnInit {

  data: T;

  protected constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected endPoint: string
  ) {
  }


  ngOnInit(): void {
    this.onReceiveData();
  }

  goBack(): void {
    this.router.navigate([`${this.endPoint}`]);
  }


  onReceiveData(): void {
    this.route.data.subscribe((data: { responseData }) => {
      if (data.responseData && data.responseData.data) {
        this.data = data.responseData.data;
      }
    });
  }
}
