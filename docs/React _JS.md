                Chapter 2: App & JSX

the JSX is javascript and it stands for javascript in xml it resembles html very much but it's not quite the same

jsx allows us to put javascript expressions in the code and that's really what makes it so powerful
<img src={logo} className="App-logo">

jsx provides a template for the component layout and also it is important to know that jsx renders data as text when it displays it

curly braces says this is a javascript expression { }

objects are not valid as a react child so no objects that cannot be rendered to the page {{a:1, b:2}}
also a boolean will not render to the page

                 Chapter 3: Functional Components

add more components to react because that is some of the power of react we can create functional components and they're reusable
snippets "ES7 React/Redux/GraphQL/React-Native snippet"

                  Chapter 4: Applying CSS Styles

there are several ways of accomplishing this goal really

1.  the first is to create style sheets
2.  very popular package called styled components and you can see that here it's at [styledashcomponents.com](https://styled-components.com/)
3.  is to inline the styles inside the jsx and that is not unusual either and sometimes even though you're using style sheets it's useful to do so so it's important to learn how to do that
    <header style={{
              backgroundColor: "mediumblue",
              color: "#fff"  }}>
    or
    const headerColor = {
    backgroundColor: "mediumblue",
    color: "#fff",
    };
    return ( <header style={headerColor}><h1>Groceries List</h1></header>);

                        Chapter 5: Click Events

to in today's tutorial we're going to look at how react responds to events
now react is a javascript library

now it's worth noting at this point that we are using a reference to handle click on this first button and not putting the operators after it like we did with the handle name change if we put the operators after it it would be called immediately so with that knowledge you may ask well why isn't handle click 2 called immediately because it has the operators after it and that's because it's inside a function and it's inside this anonymous function that begins here and so this anonymous function is not called into action until the click and then when this function is called into action it calls this function we also get access to the event object when we click an event

const handeleclick2 = (name) => {
console.log(`${name} was clicked`);};
<button onClick={() => handeleclick2("Olha")}>Click it</button>

it as i mentioned react can listen for other events as well one of those events is a double click

<p onDoubleClick={handeleclick}>

                Chapter 6: useState Hook

const[name, setName]
the first value name will provide the current state at any given point in time and then
set name is much like you would think it we can set the state with

it changes the state and by setting that state change react re-renders very quickly our content component and we see the name change notice we used const here

are some gotchas it's kind of learning how to think about state in the correct way

so just remember that the value of the state the current value of the state comes into the function and we do not alter that and even though you might use the set count or whatever you use to set the state for your used state when you log to the console or use the value of the current state after that it will not have changed because that's what was brought into the function
const [count, setCount] = useState(0);
const handeleclick = () => {
setCount(count + 1);
setCount(count + 1);
console.log(count);
};

first value has here so name and set name and then we can use state and you can use
1:02:40
state for more than one thing inside of a component you just have to define these and i hope you understand how we
1:02:48
started out with the default state of dave and then we were able to call
1:02:54
handle name change and set a new name as the state and that is why clicking our change name button
first value has here so name and set name and then we can use state and you can use
1:02:40
state for more than one thing inside of a component you just have to define these and i hope you understand how we
1:02:48
started out with the default state of dave and then we were able to call
1:02:54
handle name change and set a new name as the state and that is why clicking our change name button
