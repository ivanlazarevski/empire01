import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip.component';

@Directive({
  selector: '[hoverAbbreviation]',
})
export class AbbreviationDirective {
  private tooltipComponentRef: any;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() fullText: string;
  @HostListener('mouseover', ['$event'])
  display(e: Event) {
    this.tooltipComponentRef =
      this.viewContainerRef.createComponent(TooltipComponent);
    const hostElement = this.tooltipComponentRef.location.nativeElement;
    this.tooltipComponentRef.instance.tooltipText = this.fullText;

    //@ts-ignore
    const offsetTop = e.target.offsetTop - 25;

    //@ts-ignore
    const offsetLeft = e.target.offsetLeft - 25;

    this.renderer.setStyle(hostElement, 'top', `${offsetTop}px`);
    this.renderer.setStyle(hostElement, 'left', `${offsetLeft}px`);
    this.renderer.setStyle(hostElement, 'position', `absolute`);

    document.body.appendChild(hostElement);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
    }
  }
}
