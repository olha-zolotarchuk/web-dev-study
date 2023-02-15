import React from 'react'


const Header = () => {
    return (
        <div>
            useEffect = {}
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then( res => {
    const headers = res.headers.raw())
    return new Promise((resolve, reject) => {
      res.json().then( json => resolve({headers, json}) )
    })
  })
            .then( ({headers, json}) => doSomething(headers, json) )
            }
        </div>
    )
}

export default Header
