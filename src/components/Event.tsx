import { createSignal } from 'solid-js';

function Event() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  function handleMouseEvent(event: MouseEvent) {
    setPos({ x: event.clientX, y: event.clientY });
  }

  return (
    <div onMouseMove={handleMouseEvent}>
      The mouse position is ({pos().x} x {pos().y})
    </div>
  );
}

export default Event;
