import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string, public content:string){}
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap={
    "hi":"hello",
    "Hi":"Hello",
    "who are you": "My name is chaty",
    "what is angular": "It is a best framework",
    "default": "I can't understand"
  }
  // getBotAnswer(msg:any){
  //   const userMessage = new Message('user', msg);
  //   this.conversation.next([userMessage]);
  //   const botMessage =  new Message('bot', this.getBotAnswer(msg));
  //   setTimeout(()=>{
  //     this.conversation.next{[botMessage]};
  //   },1500);

  //   }
  }
