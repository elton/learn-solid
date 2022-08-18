import { CardProps } from '../types';

function Card(props: CardProps) {
  return (
    <div class='border border-purple-300 rounded-lg p-2 m-2 w-1/4 shadow-lg min-h-max'>
      <h2 class='text-lg text-center text-slate-600 border-b border-slate-200 capitalize'>
        {props.title}
      </h2>
      <p class='text-sm my-2 text-neutral-500'>{props.description}</p>
      <div class='mt-2 text-neutral-700'>{props.children}</div>
    </div>
  );
}

export default Card;
