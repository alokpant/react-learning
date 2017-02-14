const { render } = ReactDOM

render(
  <h1 id="title"
      className = "header"
      style= {
        {
          backgroundColor: 'black',
          color: 'yellow',
          fontFamily: 'verdana',
          display: 'inline-block',
          padding: '10px 15px'
        }
      }>
      Hello Worlds!!!
  </h1>,
  document.getElementById("container")
)
