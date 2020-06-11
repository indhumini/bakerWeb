import { Component, OnInit, OnDestroy } from '@angular/core';
import {Comment} from '../comment.model';
import { CommentsService } from '../comments.service';
//import { Comment } from '@angular/compiler';
import{Subscription} from 'rxjs';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit,OnDestroy {
  /*comments=[
    {title:'First Comment',content:'this is the first comment'},
    {title:'Second Comment',content:'this is the second comment'},
    {title:'Third Comment',content:'this is the third comment'}
  ]*/

 comments:Comment[]=[];
 private commentsSub:Subscription;

  constructor(public commentsService:CommentsService) {}

  ngOnInit() {
    this.commentsService.getComments();
   this.commentsSub= this.commentsService.getCommentUpdateListener()
    .subscribe((comments:Comment[])=>{
      this.comments=comments;
    });
  }

  onDelete(commentId:string){
    this.commentsService.deleteComment(commentId);
  }

    
  ngOnDestroy(){
    this.commentsSub.unsubscribe();
  }

}
