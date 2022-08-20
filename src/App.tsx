import { Component, For } from 'solid-js';
import logo from './assets/logo.svg';
import Card from './components/Card';
import { Label, ListMap, ListMultiChildren } from './components/Children';
import Counter from './components/Counter';
import Event from './components/Event';
import { CardProps } from './types';

const cards: CardProps[] = [
  {
    title: 'Counter',
    description: 'build-in flexible reactive primitives: Single',
    children: <Counter />,
  },
  {
    title: 'single child',
    description: 'A single child is a single value on props.children',
    children: <Label>Susan</Label>,
  },
  {
    title: 'multi child',
    description: 'multiple children',
    children: (
      <ListMultiChildren>
        <div>First</div>
        <Label>
          <span class='text-purple-800'>Judy!</span>
        </Label>
      </ListMultiChildren>
    ),
  },
  {
    title: 'map child',
    description: 'map children',
    children: (
      <ListMap>
        <div>Second</div>
        <Label>
          <span class='text-purple-800'>Edison!</span>
        </Label>
      </ListMap>
    ),
  },
  { title: 'Event', description: 'Mouse Event', children: <Event /> },
];

const App: Component = () => {
  return (
    <div class='container mx-auto'>
      <div class='flex justify-center'>
        <img src={logo} alt='logo' class='w-6' />
        <h1 class='text-3xl text-center m-2 text-teal-700 font-semibold capitalize'>
          Solid.js examples
        </h1>
      </div>
      <div class='flex flex-wrap justify-center'>
        <For each={cards}>
          {(card, index) => (
            <Card
              title={`${index() + 1} - ${card.title}`}
              description={card.description}>
              {card.children}
            </Card>
          )}
        </For>
      </div>
    </div>
  );
};
export default App;
