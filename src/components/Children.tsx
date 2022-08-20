import { Component, ComponentProps, For, JSX } from 'solid-js';

interface ChildrenProps extends ComponentProps<any> {
  // add props here
  children: JSX.Element;
}
interface ChildrenPropsArray extends ComponentProps<any> {
  // add props here
  children: JSX.ArrayElement;
}

export const Label: Component<ChildrenProps> = (props: ChildrenProps) => (
  <div>Hi {props.children}</div>
);

export const ListMultiChildren: Component<ChildrenProps> = (
  props: ChildrenProps
) => <div>{props.children}</div>;

export const ListMap: Component<ChildrenPropsArray> = (
  props: ChildrenPropsArray
) => (
  <ul>
    <For each={props.children}>{(item) => <li>{item}</li>}</For>
  </ul>
);
