import { Component, ViewChild, ElementRef, Renderer } from "@angular/core";
import { InputBase } from "./input-base";

@Component({
    selector: "inline-editor-textarea",
    styleUrls: ["./input.component.css"],
    template: `<textarea #inputRef class="form-control" [(ngModel)]="context.value" [required]="context.required"
                      [rows]="context.rows" [cols]="context.cols" [disabled]="context.disabled" [name]="context.name"
                      [placeholder]="context.placeholder"></textarea>`,
})
export class InputTextareaComponent extends InputBase {
    @ViewChild("inputRef") public inputRef: ElementRef;

    constructor(renderer: Renderer) {
        super(renderer);
        this.isRegexTestable = true;
    }

    ngOnInit() {
        this.inputElement = this.inputRef.nativeElement;
    }
}
