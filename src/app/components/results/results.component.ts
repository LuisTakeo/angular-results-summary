import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input()
  resultType:string = '';
  @Input()
  resultValue:string = '';
  @Input()
  resultColor:string = '';
  @Input()
  resultIcon:string = '';
  @Input()
  resultIconAlt:string = '';
}
