import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
id: string | null = '';
constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
  }
}
