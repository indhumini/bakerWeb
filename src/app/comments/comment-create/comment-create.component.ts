import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import{Comment} from '../comment.model';
@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {
  enteredTitle='';
  enteredContent='';
  private mode='create';
  private commentId:string;
  comment:Comment;


  //post service is injected here
  constructor(public commentsService:CommentsService,
     public route:ActivatedRoute ){}

     ngOnInit(){
       this.route.paramMap.subscribe((paramMap:ParamMap)=>{
          if(paramMap.has('commentId')){
              this.mode='edit';
              this.commentId=paramMap.get('commentId')
              this.comment=this.commentsService.getComment(this.commentId);
          }else{
            this.mode='create';
            this.commentId=null;
          }
          
       });
     }

  onSaveComment( form:NgForm){
    if (form.invalid){
      return;
    }
      if(this.mode=='create'){
        this.commentsService
        .addComment(form.value.title,form.value.content);
      }else{
        this.commentsService.updateComment
        (this.commentId,
          form.value.title,
          form.value.content);
      }
 
    form.resetForm();
  }
 

 // constructor() { }

  

}
