# Component Relationships, Fragments, Styling and Rendering Arrays

## Part I: Component Relationships

In component relationships, Coponents can be called within other components. Fore example in the App.js file
the App component can hold many other components. This property is not unique to the app component as every other component is capable of it. In situations like this, if a component is within another component it is considered a child component, and the component that holds it is called a parent component.

-> Do an example with them.

## Part II: Fragments

In react Js when sending JSX, if there are multiple elements involved you have to wrap it in a parent element, but some times due to factores like css selectores, preferences, etc. You might not want to have a component wrapped in its onw parent element. In this case we use fragments. With fragments you can wrapp the elements in a component in kind of an imaginary parent element.
Example 1. Book component

frangment format:

````export function ComponentName(props) {
    return <>
        //jsx
    </>
}
```

````

## Part III: Styling in React

You can add styles to your react app, and components in two ways either inline or linking a css a file

### Inline styling in react JS

Format:

````export function ComponentName() {
  return (
    <div
      style={{property: val, property: value }}
    ></div>
  );
} ```
````

### Linking a CSS file in React JS

format for importing css files:
``import "relative path"`
-> You folder storing your css files should be stored withing the src folder
-> If you intend on add css that affect every element import the css file in the index.js file
-> You can also add css to components only that dont affect the other components in the application

-> How do you add class names to your elmennts to implement your css
-> Ask students to do the marden exercise

## Part IV Rendering Arrays

In react Any valid jsx can be rendered regardless of what type of value it is, wherether it is a simple jsx elment, a component or and array of jsx elements or components. Knowing this information we can take advantage of this concept to render multiple elements without needing to write alot of code

-> Example Book, component

-> Let students do the final react exerise for the day
