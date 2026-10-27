import { Question } from '../../types';
import { chapter1Questions } from './chapter1';
import { chapter2Questions } from './chapter2';
import { chapter4Questions } from './chapter4';
import { glossaryQuestions } from './glossary';

export { chapter1Questions } from './chapter1';
export { chapter2Questions } from './chapter2';
export { chapter4Questions } from './chapter4';
export { glossaryQuestions } from './glossary';

export const businessLawQuestions: Question[] = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter4Questions,
  ...glossaryQuestions
];

