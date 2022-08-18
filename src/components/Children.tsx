import { Component, ComponentProps, JSX } from 'solid-js';

interface ChildrenProps extends ComponentProps<any> {
  // add props here
  children: JSX.Element;
}

export const Label: Component<ChildrenProps> = (props: ChildrenProps) => (
  <div>Hi {props.children}</div>
);

export const ListMultiChildren: Component<ChildrenProps> = (
  props: ChildrenProps
) => <div>{props.children}</div>;
