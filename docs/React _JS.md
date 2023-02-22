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

Chapter 12: JSON Server
Chapter 13: Fetch API Data

Chapter 14: CRUD Operations
In computer programming, create, read, update, and delete (often referred to via the acronym CRUD) are the four basic operations of persistent storage.[1] CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports. The term was likely first popularized by James Martin in his 1983 book Managing the Data-base environment.

crud operations and those would be this is
read as far as crud goes we're reading the data but these other operations
would be create for creating a list item update for updating a list item and delete for deleting a list item
3:50:09
responses back is because we're updating the state with our set items and other set functions that we would call from our state however that does not update the api and we want to keep the state of our application and the api in sync but we can update the state and see that faster than we may get a response from the api so we don't want to wait for that response we'll just instantly show the new state in the application but then if we get an error message we'll know we're out of sync with the api and then we'll show the please reload the app message here or whatever other error might actually occur that would be caught by the catch block here we can show that message as well so this is our function that's really all there is to it and the difference between the requests will be the create update or delete that is held in the options object and we'll define those in the separate handlers so let's save this api request now let's go back to the app component now in the app component let's go ahead and import this function will import api request from api request and now let's put this api request function to work and the first place we could use it is in the add item function we've already got everything we need here to update our state and we do it right here with the set items but besides that we want to go ahead and

Chapter 15: Fetch Data Challenge

(4:43:10) Chapter 16: React Router
and how react router works is it routes components sometimes we'll always want a component to stay on the page like a header or a nav bar or maybe a footer but then other times we'll want the main area of the page to change and react router can route those components based on url file paths
і як працює маршрутизатор React – він маршрутизує компоненти, іноді ми завжди хочемо, щоб компонент залишався на сторінці, як-от заголовок, панель навігації чи, можливо, нижній колонтитул, але іноді ми хочемо, щоб основна частина сторінки змінилася та маршрутизатор react може маршрутизувати ці компоненти на основі шляхів URL-файлів

we want route we want switch as we'll switch between
the routes and then we want a hook that comes with react router and that's use history react router has several custom hooks and this one will allow us to access the browser history but react router does not make requests from the server again it just routes within the app and of course that responds faster so it improves the user experience as well this needs to be from react router dom
ми хочемо маршрут, ми хочемо перемикатися, коли ми будемо перемикатися між ними
маршрути, а потім нам потрібен хук, який постачається з маршрутизатором react, і це використання історії. Маршрутизатор react має кілька користувальницьких хуків, і цей дозволить нам отримати доступ до історії браузера, але маршрутизатор react знову не надсилає запити від сервера, він просто маршрутизує в межах додаток і, звичайно, реагує швидше, тому покращує взаємодію з користувачем, а також це має бути від react router dom


Chapter 17: Router Hooks & Links

NAV 05;09;17
unordered list and now each list item can be a navigation link but we haven't imported the link from react router yet so let's do that at the top and that's import link from react router dom there we go and we can save that now we can use the link as we import it and links render to anchor tags just like we would see in html with like an a with an href however this tells react router don't request this link from the server just route to the proper component and so now instead of an href we have a two and we'll set this equal to a slash for our home page and so there's the link to home and now i'm going to use shift alt and the down arrow to make a couple of more links and now we'll link these to other pages so we'll have a link to post and a link to about and of course we can change the wording here to match post and about
невпорядкований список, і тепер кожен елемент списку може бути навігаційним посиланням, але ми ще не імпортували посилання з маршрутизатора React, тому давайте зробимо це вгорі, і це посилання для імпорту з маршрутизатора React. Ось і ми можемо зберегти це зараз використовуйте посилання, коли ми його імпортуємо, а посилання відображаються у прив’язних тегах, як ми бачили б у html, наприклад a з href, однак це повідомляє реагувати маршрутизатору не запитувати це посилання на сервері, просто направляти до відповідного компонента, і тому тепер замість href ми маємо двійку, і ми встановимо це рівним скісній рискі для нашої домашньої сторінки, тож є посилання на домашню сторінку, а тепер я використаю shift alt і стрілку вниз, щоб створити ще кілька посилань і тепер ми зв’яжемо їх з іншими сторінками, щоб у нас було посилання на публікацію та посилання на про, і, звичайно, ми можемо змінити формулювання тут, щоб відповідати публікації та про


Posts
5:19:42
we'll slice the first 25 characters and after that we'll put an ellipses like three dots at the end and that way we're only showing a snippet of the full body because we don't want any more than 25 characters in the initial feed and then you can click on the full link above here and see the full post so let's save that and now we can see our feed with each post and of course i've used lorem epson in each one of them and so they're all the same right now but we see they go the first 25 characters and then we get that

ми розріжемо перші 25 символів, а потім розмістимо три крапки в кінці, і таким чином ми покажемо лише фрагмент повного тексту, тому що ми не хочемо мати більше 25 символів у початковий канал, а потім ви можете натиснути повне посилання вище тут і переглянути повний допис, тож давайте збережемо це, і тепер ми зможемо бачити наш канал з кожним дописом, і, звичайно, я використовував lorem epson у кожному з них, тому вони зараз усе те саме, але ми бачимо, що вони вводять перші 25 символів, а потім отримуємо це


PostPage
5:21:30
page and now let's go ahead and define the id inside the function and this is going to be equal to use params and we said id here because that's what we called it in our route back in app.js when we defined the parameter for post page so that's what you need to do if you named it something different you need to also have this named differently so that's what's defined in the route and then once we have the posts here we need to get the individual post we want to display so let's say post equals post dot find and now we get the post and here we'll take the post dot id and then we'll set it to a string because it is really numeric so if we didn't set it to a string we would only be able to use two equals which you could also do if that's your preference i prefer to use strict equals when i can but in order for me to do that here i need to set that to a string to match the id that is also going to be a string coming from the parameter so once again if you don't set this to a string you'll need to go to non-strict equals just the two equal signs so it's up to you whichever you do this is the way i'm doing it and we've defined the specific post that we want

сторінки, а тепер давайте визначимо ідентифікатор у функції, і це буде дорівнювати використанню параметрів, і ми сказали тут ідентифікатор, тому що саме так ми його називали в нашому маршруті в app.js, коли визначали параметр для сторінки публікації тож це те, що вам потрібно зробити, якщо ви назвали це якось інакше, вам також потрібно мати іншу назву, щоб це було визначено в маршруті, а потім, коли ми маємо публікації тут, нам потрібно отримати окрему публікацію, яку ми хочемо відобразити, тож, скажімо, post дорівнює post dot find, і тепер ми отримуємо публікацію, і тут ми візьмемо ідентифікатор публікації з крапкою, а потім ми встановимо його як рядок, тому що це дійсно число, тому, якби ми не встановили його як рядок, ми б лише мати можливість використовувати два дорівнюють, що ви також можете зробити, якщо це ваші переваги. Я віддаю перевагу використовувати суворі дорівнює, коли можу, але для того, щоб зробити це тут, мені потрібно встановити це на рядок, щоб відповідати ідентифікатору, який також збирається бути рядком, що надходить із параметра, тому ще раз, якщо ви не встановите це як рядок, ви будете потрібно перейти до нестрогих дорівнює лише два знаки рівності, тож ви вирішуєте, що робити


App useHistory

5:28:29
and now we want to use our browser history we click the delete button but we're on the individual post page so we can do that with the use history hook that we are importing up here now underneath where we set the use state let's go ahead and hit return and we'll just say history is equal to use history and after we've defined that we can use it inside of our handle delete function so we'll say history dot push and we'll just push in the route to the home page and this will take us back to the home page once this is completed so as part of the function we're accessing the browser history with react router and then we're serving the component instead of requesting anything from the server we're serving the component that is routed to that home directory listing with this saved let's go ahead we've got our posts over here on the right in chrome i'll click my third post here's my third post i'll click delete post it deletes the post and takes us back to the home page instantly and notice there's no third post now because we have hard coded our posts in our state when i reload the application completely 

NewPost
 <form className="newPOstForm" onSubmit={handleSubmit}>
 5:32:59
let's give this an on submit but it might be different than you expect instead of a prevent default here we're just going to reference handle submit now the interesting thing about this is it still receives the event we don't have to have an anonymous function and specify e inside if we just give a reference to a function like this it will still receive the event and we can refer to that inside the function 

Давайте дамо це під час надсилання, але воно може відрізнятися від того, що ви очікуєте, замість запобігання за замовчуванням тут ми просто збираємося посилатися на дескриптор надсилання, що цікаво в цьому: воно все ще отримує подію, нам не потрібно мати анонімний і вкажіть e всередині, якщо ми просто дамо посилання на таку функцію, як ця, вона все одно отримає подію, і ми зможемо посилатися на неї всередині функції

 const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  5:36:32
handle submit function as i've mentioned the handle submit reference still receives the event even without the anonymous function specifying it back in the new post component so here i just put the e for the event in the parameters and we'll reference that here and just call prevent default at the very beginning of the function after that we need to define the id for the new post so let's set the id equal to and let's check to see if the posts array has a length and if it does that mean posts already exist it's not empty then we need to get the last post and we do that with posts and now to reference the last post we'll say posts dot length minus one because it should start counting at zero so if you get the length you've got the count of all the posts you need to subtract one to actually get the last post and after that we'll reference the id property of that last post and then we'll add one to it but if posts do not have link that means the array is empty and we need to just give this post an id of one now that we've defined the id

setPostTitle("");
5:40:43
can go ahead and set the posts as our new state and then we'll set the post title in the controlled input back to empty so after we've submitted the new post we won't have to delete what we've submitted to create another one we'll just set that to empty we'll do the same thing for post body we'll set it back to an empty string and then finally we once again need to access the history and push and let's go back to the home page after we've created a new post so we're not just setting on the new post page again so now that we save all of that we


5:42:40
effect runs again well we'll put that with posts and we'll also set that to work with search and so now as our search input provides new data we could go ahead and provide new data here for the searches we can essentially filter the posts that we have down to what matches our search and so that's why those are both dependencies we're going to define something here called filtered results and we'll set this equal to the posts dot filter and now we can just say for each post and inside of this we'll need

ефект працює знову добре, ми додамо це до дописів, а також налаштуємо це для роботи з пошуком, тож тепер, коли наші вхідні дані для пошуку надають нові дані, ми можемо продовжити та надати нові дані тут для пошуку, ми можемо фактично відфільтрувати дописи що ми маємо до того, що відповідає нашому пошуку, і тому це обидві залежності, ми збираємося визначити тут щось, що називається відфільтрованими результатами, і ми встановимо це рівним точковому фільтру публікацій, і тепер ми можемо просто сказати для кожної публікації та всередині цього нам знадобиться

     post.body.toLowerCase().includes(search.toLowerCase()) ||

     5:43:31
inside the parentheses another set of parentheses to specify the post body and
5:43:36
we need that because then we're going to add a dot to lowercase
5:43:42
and this will set everything in the post body to lower case and now we've got the outer parentheses
5:43:49
and then we can put dot includes so we're checking to see if the the post body includes and by setting
5:43:56
everything to lower case we're not being specific about whether it's capitalized
5:44:01
or not our search will work either way and then we can use our search value
5:44:06
and also set it to lower case so it could possibly match and there we've got our full
5:44:13
filter for the post body so we set the post body to lower case we also set the search to lower case and we're checking
5:44:19
to see if the body includes what we're searching for now after that this of course this
5:44:25
yellow one here or gold if you will highlights our entire filter function so
5:44:31
i could put this on a separate line or even underneath after that we need to use
5:44:36




                Chapter 18: Flexbox Components

5:51:26
 today we're talking about setting the height and width of your react application i prefer to use flexbox for this however i'm sure there are other methods today i will show you mine a react application provides a few differences from just building html and css from scratch we have to consider how
 
 сьогодні ми говоримо про встановлення висоти та ширини вашої програми React, я віддаю перевагу використанню flexbox для цього, однак я впевнений, що є й інші методи, сьогодні я покажу вам, що моя програма React надає кілька відмінностей від простого створення html і css з нуля ми повинні розглянути, як

index.js
document.getElementById("root")

 attached to a div that has an id of root so even though we have a component with an app class our app component it is still being inserted into this other div so we have another container to consider and that is why we are not seeing a consistent width here we haven't set the width or done anything with that container with the id of root so let's go back to the css 

 приєднаний до div, який має ідентифікатор root, тому, навіть якщо у нас є компонент із класом додатка, наш компонент додатка все ще вставляється в цей інший div, тож у нас є ще один контейнер для розгляду, і тому ми не бачимо узгодженого width тут ми не встановили ширину або нічого не зробили з цим контейнером з ідентифікатором root, тому повернемося до css

#root {
  flex-grow: 1;
 5:55:20
and we'll give this root id not only a display of flex that justifies everything in the center with
the content and a line items but we also know that the root div is a flex item
because it's inside the body and we can set it to grow so it will expand
up to the available width which would expand it for the full page



              Chapter 19: Axios API Requests

6:02:47
set up with json server axios actually makes requesting data easier than using the fetch api 
налаштування за допомогою axios сервера json фактично спрощує запит даних, ніж використання fetch api

6:10:21
and now we need to simply define how to use axios and we'll define a response just like we would with fetch and we'll set this equal to a weight api remember that is the axios instance we're importing and then we can use get and this is where axios becomes very easy to understand we actually use the verbiage the words that we would in a crud operation possibly in api usage so like http uses get post put delete there's patch and a few others but we're only going to use the basic crud operations so get would be our read operation in crud and so now we just need to say what endpoint we want with that base url and of course we only have one endpoint with this application and its posts so we'll go ahead and define that now this replaces fetch and then what's so nice about using axios instead of fetch is axios automatically creates that json we don't have that second step here where we have to define data and set it equal to response.json another thing that is nice about axios is it will automatically catch the errors when they are not in the 200 range of http responses

і тепер нам потрібно просто визначити, як використовувати axios, і ми визначимо відповідь так само, як і з fetch, і ми встановимо це рівним вазі api. Пам’ятайте, що це екземпляр axios, який ми імпортуємо, і тоді ми можемо використовувати отримати, і тут axios стає дуже легко зрозуміти, ми насправді використовуємо словосполучення слова, які ми б використовували в грубій операції, можливо, у використанні api, отже, наприклад, http використовує get post put put delete там є патч і кілька інших, але ми збираємося лише використовуйте базові операції crud, тому get буде нашою операцією читання в crud, і тому тепер нам просто потрібно сказати, яку кінцеву точку ми хочемо мати з цією базовою URL-адресою, і, звичайно, у нас є лише одна кінцева точка з цією програмою та її публікаціями, тому ми продовжимо і визначте, що тепер це замінює fetch, і що такого приємного у використанні axios замість fetch, це те, що axios автоматично створює той json, у нас немає другого кроку, де ми повинні визначити дані та встановити їх рівними response.json ще одна річ, яка приємно про axios, це буде авт omaticly виловлювати помилки, коли вони не знаходяться в діапазоні 200 http-відповідей


           Chapter 20: Custom Hooks
Rules of Hooks
https://reactjs.org/docs/hooks-rules.html

useWindowSize
useAxiosFeth

so a custom hook is much like a utility function
тому спеціальний хук дуже схожий на службову функцію

https://nikgraf.github.io/react-hooks/



            Chapter 21: Context API & useContext Hook

7:17:06
okay today we're talking about use context in the context api we're not adding any new functionality to our blog application we're just going to refactor to use context instead of drilling props down because that can become unwieldy and we can see really that our app.js is full of code we've put in all of our logic as well and so we've just been passing it all down this once again might not be the most efficient but it certainly helped you learn how to pass props down to components and we've been drilling those props as the statement goes however we're going to eliminate all of that today by refactoring and we'll have a much neater app.js file and we'll be able to subscribe to context and use the use context hook to pull that information in

гаразд, сьогодні ми говоримо про використання контексту в API контексту, ми не додаємо жодних нових функціональних можливостей до нашого додатка для блогу, ми просто збираємося рефакторингувати використання контексту замість того, щоб деталізувати опори, тому що це може стати громіздким, і ми можемо бачити справді що наш app.js наповнений кодом, який ми також додали до нашої логіки, тому ми просто передаємо все це знову, можливо, це не найефективніше, але це, звичайно, допомогло вам навчитися передавати атрибути аж до компонентів, і ми вивчали ці елементи, як ідеться в заяві, однак ми збираємося усунути все це сьогодні шляхом рефакторингу, і ми матимемо набагато акуратніший файл app.js, і ми зможемо підписатися на контекст і використовуйте хук контексту use, щоб отримати цю інформацію



:~/study/web-dev-study/exercise/08.React_JS/04.react$
 npx json-server -p 3500 -w data/db.json



7:33:49
just checking submit and yes we have post 5 just checking so if you get that error just like i did you'll know what is happening you need to make sure you're sending those same pieces of state and maybe even like the handle submit function so maybe even some logic being sent through the data provider if that is how you are providing it to the component let's minimize chrome and we're back here at the data provider now let's go back to app and we'll clean up the next one which is edit post you can see it's receiving probably more than any other component was
edit post you can see it's receiving probably more than any other component was and so we'll need to make sure we're sending all those same props through the data provider let's go ahead and change
просто перевіряю надсилання, і так, у нас є пост 5, просто перевіряється, тож якщо ви отримаєте цю помилку, як і я, ви знатимете, що відбувається, вам потрібно переконатися, що ви надсилаєте ті самі фрагменти стану, і, можливо, навіть подобається функція надсилання ручки тому, можливо, навіть якась логіка надсилається через постачальника даних, якщо це те, як ви надаєте його компоненту, давайте мінімізуємо chrome, і ми знову тут, у постачальника даних, тепер давайте повернемося до програми та очистимо наступну це повідомлення редагування, ви бачите, що воно отримує, ймовірно, більше, ніж будь-який інший компонент
редагувати допис, ви бачите, що він отримує більше, ніж будь-який інший компонент, тому нам потрібно переконатися, що ми надсилаємо всі ті самі реквізити через постачальника даних, давайте продовжимо і змінимо

7:39:59
 and our context here has everything that we previously had in that parent component and of course when a parent component renders then so do the children of the components so it was causing lots of re-renders but this still could cause quite a few because everything that subscribes to the context when the context gets updated so would the component 
 і наш контекст тут містить усе, що ми мали раніше в тому батьківському компоненті, і, звичайно, коли батьківський компонент рендериться, то рендеряться і дочірні компоненти, тому це спричиняє багато повторних рендерингів, але це все одно може спричинити досить багато, тому що все, що підписується на контекст, коли контекст оновлюється, як і компонент



                      Chapter 22: Easy Peasy Redux
  
7:56:13
react.js blog application that we've already created in this series and this refactor will remove the state management from the context api that we did in the last tutorial and we'll move it to easy peasy which is a package thatbwe can install that is built on top of redux it makes using redux easy peasy and so that's a great introduction to using redux and i would actually say using a package like easy peasy or some of the alternatives that they list here on the site instead of using redux directly is really a great choice until you have to use redux directly for possibly an enterprise size application so small to medium applications can certainly use one of these other choices and they list several alternatives here as well as easy peasy and you can see one of the. alternatives they list is the context api with hooks in react and that's what we did in the previous tutorial so if you haven't checked that out again refer to that playlist link in the description now let's go ahead and get started with easy peasy 

Додаток для блогу react.js, який ми вже створили в цій серії, і цей рефактор видалить керування станом із контекстного API, що ми робили в минулому підручнику, і ми перемістимо його в easy peasy, який є пакетом, який ми можемо встановити створено на основі redux, це робить використання redux легким peasy, і тому це чудовий вступ до використання redux, і я б насправді сказав, що використання пакета типу easy peasy або деяких альтернатив, які вони перераховують тут на сайті, замість безпосереднього використання redux є справді чудовий вибір, поки вам не доведеться використовувати redux безпосередньо для, можливо, програми розміру підприємства, тому малі та середні програми, безумовно, можуть використовувати один із цих інших варіантів, і вони перераховують кілька альтернатив тут, а також легкий peasy, і ви можете побачити один із них. Альтернативи, які вони перераховують, — це контекстний API із хуками в React, і це те, що ми робили в попередньому підручнику, тому, якщо ви ще не перевірили це ще раз, зверніться до цього посилання списку відтворення в описі, а тепер давайте почнемо з easy peasy

https://easy-peasy.vercel.app/docs/introduction/alternatives.html


8:09:49
and now the store will provide all of our state that we have in the store or the store provider will provide the store state for our entire application so we can save the index.js
і тепер магазин надасть весь наш стан, який ми маємо в магазині, або постачальник магазину надасть стан магазину для всієї нашої програми, щоб ми могли зберегти index.js

8:33:11
 and that is managing state with easy peasy and i really recommend you check it out it is a great package that makes using redux so much easier and it really cleans up your application and puts the actions and async actions and even computed values of state in your application in a very easy to manage way

 і це керування станом за допомогою легкого peasy, і я справді рекомендую вам перевірити його. Це чудовий пакет, який значно полегшує використання redux, він справді очищає вашу програму та розміщує дії та асинхронні дії та навіть обчислені значення стану у вашому програму в дуже простий спосіб керування


       Chapter 23: Build & Deploy Your React Apps

npm uninstall  і додати назви всїх пакетів які не використовуєм

8:33:40
okay today we're going to deploy an app to netlify and then we will deploy the same app to github pages so you'll know at least two different places you can host your react development projects we'll start with netlify first and what we have is the package.json file 

and you can see i've got the 11 tut here this is the tutorial in the series that covered use effect and it was the last tutorial to use local storage instead of json server you wouldn't want to try to deploy json server that is just used as a dev environment rest api you would want to create a real rest api say using the rest of the mern stack for example which would be node and express to go along with react and you could create the back end for those applications like we did the blog
8:33:40
Гаразд, сьогодні ми збираємося розгорнути програму для netlify, а потім ми розгорнемо ту саму програму на сторінках github, щоб ви знали принаймні два різних місця, де ви можете розмістити свої проекти розробки React. Спочатку ми почнемо з netlify і що ми є файл package.json

і ви бачите, що у мене є 11 тут, це підручник із серії, який охоплює ефект використання, і це був останній підручник із використання локального сховища замість сервера json, який ви не хотіли б намагатися розгорнути сервер json, який є просто використовувався як rest api середовища розробника, ви хотіли б створити справжній api rest, скажімо, використовуючи решту стека mern, наприклад, який буде node і express, щоб узгоджуватися з react, і ви можете створити бек-енд для таких програм, як ми зробив блог

8:36:02
so to initialize a repository we type git init and after the repository is initialized we want to add all of the files so we'll type git add and a period which will add all of the files unless it's listed in the git ignore file of course and after we do that we need to commit the files so i'll type git commit dash m and here i'm just going to type first commit as the message with that complete we need to go to github and create a new repository so we can push our code to the repository on github 
8:36:02
тому, щоб ініціалізувати сховище, ми вводимо git init, і після ініціалізації сховища ми хочемо додати всі файли, тому ми введемо git add і крапку, яка додасть усі файли, якщо вони не вказані у файлі git ignore, звичайно. і після того, як ми це зробимо, нам потрібно зафіксувати файли, тому я введу git commit dash m, а тут я просто введу first commit як повідомлення з завершенням, нам потрібно перейти на github і створити нове сховище, щоб ми може відправити наш код у репозиторій на github



npx create-react-app 05.react-ShoppingСart