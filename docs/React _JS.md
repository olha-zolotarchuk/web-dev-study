https://www.npmjs.com/package/react-icons

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

                Chapter 7: Lists & Keys

expression and the way to display a list in jsx is to work through the list using map so we can say items dot map which is a higher order function

in react needs a key so we're going to set an attribute called key equal to an expression key={item.id}

this helps react identify which items have changed which items have been added or which items have been removed because react reacts or responds to changes in state and it re-renders the jsx so react does need to keep track of those things and that is why a list item needs to have a key attribute in react

now it's important to note that this is not changing the default state of the app and we still have or the default state of the component pardon me that we still have here in our code so if i reload the application it's going to come back to being true false false

                    Chapter 8: Props & Prop Drilling

props as you might expect is short for properties and properties hold data and prop drilling allows us to pass that data down from parent components to child components

as the props hold all the different properties from the parent component that have been passed to the child component
const Header = (props) => {

<h1>{props.title}</h1>

destructuring in javascript this will be easier to understand because instead of the as they are passed into the functional component so then we can just say title and then we can get rid of the props dot and this will still work in the same way
const Header = ({title}) => {

<h1>{title}</h1>

1:39:24 default props allow us to set values for the props expected in the component and if those are not provided then the default values will take over instead of receiving an error and this is great to do when you're speccing a component in other words when you're first designing the component and maybe you're not receiving the data from an api or even a local storage list like we have right now we're using some spec data already

we get default title here the component expects a prop and when it doesn't receive it it uses the default prop

1:54:50 reusable line item component
and think about the tree or the component tree as we drill down we started with the app component which is apparent and then we move down to the content component so rom app.js to content.js and then to item list js we're going to go one more level as we create a line item js

               Chapter 9: Controlled Component Inputs

2:01:33 controlled components refer to inputs in react forms forms in reactor handled just a little differently and the inputs are controlled we try to use one source of truth for the state

2:10:33 well now to make this a controlled input we need to tie it to state we want to have one source of truth for the input and we want to change the state as the input changes as well so back in the app.js i'll scroll up here and we have our default state here for items and set items so just underneath that

2:35:03 so just a quick recap on what we've done for our two controlled components today add item
has the value equal to the state and then on change we set the state with
e.target.value and then it's very much the same with search item we set the value equal to
the state and then on change we once again set the new state to e.target.value
and that gives one source of truth for the input and that is the state and that's how you want to handle inputs in
a form in react

Chapter 10: Project Challenge

          Chapter 11: useEffect Hook

useEffect(() => {
console.log("load");
}, []);

3:06:00
so now we've seen examples of it running all the time for every render and we've seen an example of it running only at the app load time just the one time because this array never changes and this is a dependency and so what use effect does is it looks to its dependency and if the dependency changes then it will run this anonymous function again

useEffect(() => {
console.log("apdating");
}, [items]);

what we expect now and that is updating item state you get it once immediately when it loads so use effect does run and item state is set when the app loads so that is accurate but then any time we delete an item like removing pizza now we get another one here updating item state or if we add cookies we've updated the item state again so now use effect is only looking at its dependency and it's only running this function when the dependency changes

we get before use effect and then we get after use effect and then finally we get inside use effect so let's discuss this as you might expect we got the before one first but you didn't expect to see the after one second probably you probably thought this would just go in order but this is not synchronous use effect is asynchronous in that regard and it actually runs the code in here after everything has rendered down here as well so if there was any change if there was a need to re-render such as me typing a letter into the search box now we got before and after again that re-rendered but use effect was not called in the action because we didn't change the state of the items at all so we'll only see this inside use effect when we change the state of the items but for every letter i type here every render we get another before and after now that we have a very clear idea of when use effect is called into action

(3:15:08) Chapter 12: JSON Server
(3:21:23) Chapter 13: Fetch API Data
(3:44:37) Chapter 14: CRUD Operations

(4:04:33) Chapter 15: Fetch Data Challenge
(4:43:10) Chapter 16: React Router
