import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('nextAnimation', [
      state('beforeNext', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('afterNext', style({
        transform: 'translateX(0)'
      })),
      transition('beforeNext => afterNext', animate('250ms ease-in'))
    ]),
    trigger('prevAnimation', [
      state('beforePrev', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('afterPrev', style({
        transform: 'translateX(0)'
      })),
      transition('beforePrev => afterPrev', animate('250ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  currentComponent: Function = null;
  componentStack: Function[] = [];
  animationState: string;

  ngOnInit() {
    this.push(Step1Component);
  }

  private push(component: Function) {
    this.componentStack.push(component);
    this.currentComponent = component;
    this.animationState = 'beforeNext';
    setTimeout(() => { this.animationState = 'afterNext'; });
    console.log('after push', this.componentStack.map(c => c.name).join(', '));
  }

  private pop() {
    if (this.componentStack.length > 1)
      this.componentStack.pop();
    this.currentComponent = this.componentStack[this.componentStack.length - 1];
    this.animationState = 'beforePrev';
    setTimeout(() => { this.animationState = 'afterPrev'; });
    console.log('after pop', this.componentStack.map(c => c.name).join(', '));
  }

  private getRandomComponent() {
    const options = [Step1Component, Step2Component, Step3Component];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
  }

  next() {
    const component = this.getRandomComponent();
    this.push(this.getRandomComponent());
  }

  prev() {
    this.pop();
  }
}
