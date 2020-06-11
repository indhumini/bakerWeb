import{Comment} from './comment.model';
import {Subject} from'rxjs';
//import { relative } from 'path';
import { Injectable } from '@angular/core';
//import { map } from "rxjs/operators";
import { HttpClient} from "@angular/common/http";
import{map} from 'rxjs/operators';
import { strictEqual } from 'assert';

//import { Router } from "@angular/router";

@Injectable({providedIn:"root"})

export class CommentsService{
    private comments:Comment[]=[];
    private commentsUpdated=new Subject<Comment[]>();

    constructor(private http:HttpClient){}

   getComments(){
       this.http.get<{message:string,comments:any}>
       ('http://localhost:3030/api/comments'
       )
       .pipe(map((commentData)=>{
          return commentData.comments.map(comment=>{
              return{
                title:comment.title,
                content:comment.content,
                id:comment._id
              };
              
          });
       }))

       .subscribe((transformedcomments)=>{
           this.comments=transformedcomments.comments;
           this.commentsUpdated.next([...this.comments]);

       });
   }

   getCommentUpdateListener(){
       return this.commentsUpdated.asObservable();
   }

   getComment(id:string){
       return{...this.comments.find(c=>c.id==id)};
   }

   addComment(title:string,content:string){
       const comment:Comment={id:null,title: title,content:content};
       this.http.post<{message:string,commentId:string}>
       ("http://localhost:3030/api/comments",comment)
       .subscribe((responseData)=>{
           const id=responseData.commentId;
           comment.id=id;
           this.comments.push(comment);
       this.commentsUpdated.next([...this.comments]);
       });
      
   }

   updateComment(id: string, title: string, content: string) {
    const comment: Comment = { id: id, title: title, content: content };
    this.http
      .put("http://localhost:3030/api/comments/" + id, comment)
      .subscribe(response => console.log(response));
  }
//dissapear the text when click on the delete button
   deleteComment(commentId:String){
    this.http.delete
    ("http://localhost:3030/api/comments"+commentId)
    .subscribe(()=>{
        const updatedComments=this.comments.filter
        (comment=>comment.id==commentId);
        this.comments=updatedComments;
        this.commentsUpdated.next([...this.comments]);
    });
}

}

