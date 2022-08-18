import type { Component } from 'solid-js';
import { createSignal, onCleanup } from 'solid-js';

const Counter: Component = () => {
  const [count, setCount] = createSignal<number>(0);
  let timer = setInterval(() => setCount(count() + 1), 1000);

  onCleanup(() => {
    clearInterval(timer);
  });

  return <p>Count: {count()}</p>;
};

export default Counter;
