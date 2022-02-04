import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    /*
    <ul *appTimes="5">
      <li>Hi</li>
    </ul>
      */
    // Its more like a custome verdion of the element (if we comare it to the elementRef in the prevouse Example)
    // And as the name say: its a coinatiner and its contain another elements inside
    private viewContainer: ViewContainerRef,// reference to the element we apply the directive to, ref to ul element
    // reference to the inside elements, Ex: ref to li ele
    private templateRef: TemplateRef<any>
  ) {
  }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, { index: i });
    }
  }

}
