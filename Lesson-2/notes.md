# Props

## Part I: Introduction to objects

-> Remind the class on funciton parameters

-> What is a javascript object?

Think of a javascript object like a variable that can have multiple values like and array, but this
time each of the values can have its own name, Like a cupboard where each compartment is named, any time
we want something from the cupboard all we need to do is know the name of its compartment, in javascript
the cupboard is called an object, and the compartments are called attributes this compartments can hold
all types of values like numbers, strings, booleans, arrays, functions and even other objects.

-> How is an object written in javascript?
const objName = {
attributeName: value
}

-> How are object attributes accessed?
objName.attributeName

//Do example 1

## Part II: Introduction to react props

-> What is a prop in React?

    Remember that components are just functions, and like all funcitons can take in parameters, in React we pass parameters called prop in components, to send and recieve data in components
    //Example 2 in app, InternInfo Component

    props like any object can hold every type of value, but values other that strings when passed need to be passed in curly brace, show in example 2 in app, and this same curly braces valid code can be inserted

## Part III: Checking prop types

-> Intalling the prop types library

Type `npm i prop-types` in your terminal and wait for the package to download

-> What is prop checking
Propchecking means specifiying data data types of the attributes on the props objects and verifying that said data types are respected when props are passed

//Example 3.. Laptop component

format:
`conponentName.propTypes = {attr: propTypes.datatype.isrequired s}`
