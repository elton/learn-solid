import { JSX } from 'solid-js/jsx-runtime';

export interface CardProps {
  // add props here
  title: string;
  description?: string;
  children: JSX.Element | JSX.ArrayElement;
}
