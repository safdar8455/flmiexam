import { Question } from '../../types';
import { loma320Chapter1Questions } from './chapter1';
import { loma320Chapter2Questions } from './chapter2';
import { loma320Chapter3Questions } from './chapter3';

export { loma320Chapter1Questions, loma320Chapter2Questions, loma320Chapter3Questions };

export const lifeInsuranceLawQuestions: Question[] = [
  {
    id: 1,
    lo: "Incontestability clause.",
    question: "After how many years does an insurance policy typically become incontestable regarding state of health?",
    options: ["1 year", "2 years", "5 years", "Never"],
    answer: 1,
    explanation: "Most jurisdictions mandate a 2-year incontestability period."
  }
];

