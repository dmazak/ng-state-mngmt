import { createAction } from '@ngrx/store';
// Event actions often come from components. They are just saying "This happened".
// Naming is a past-tense description of some event that happened.

export const incrementClicked = createAction(
  '[counter event] increment button clicked'
);

export const decrementClicked = createAction(
  '[counter event] decrement button clicked'
);
