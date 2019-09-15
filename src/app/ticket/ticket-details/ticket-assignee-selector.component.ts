import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignee } from '../assignee';
import construct = Reflect.construct;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-assignee-selector',
  template: `
    <form [formGroup]="assigneeForm" (ngSubmit)="emitSelect()">
      <div>
        <select formControlName="assignee">
          <option [value]="null" disabled>Choose a assignee</option>
          <option *ngIf="assignees.length === 0" [value]="null" disabled
            >Loading assignees ...</option
          >
          <option *ngFor="let assignee of assignees" [ngValue]="assignee">
            {{ assignee.name }}
          </option>
        </select>
        <button [disabled]="assigneeForm.invalid">ASSIGN</button>
      </div>
      <small *ngIf="assigneeForm.get('assignee').hasError('required')"
        >Please choose an assignee.</small
      >
    </form>
  `
})
export class TicketAssigneeSelector {
  @Input() assignees: Assignee[];
  @Output() select = new EventEmitter<Assignee>();

  assigneeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.assigneeForm = this.setUpAssigneeForm();
  }

  emitSelect() {
    this.select.emit(this.assigneeForm.value.assignee);
  }

  private setUpAssigneeForm() {
    return this.fb.group({
      assignee: [null, [Validators.required]]
    });
  }
}
