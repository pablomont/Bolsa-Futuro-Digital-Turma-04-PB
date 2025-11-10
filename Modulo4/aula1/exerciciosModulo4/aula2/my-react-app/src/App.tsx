import './App.css'

function App() {

  return (
  <>
    <Gallery />
  </>
  )
}

function Gallery(){
  return(
    <div>
      <h1> Cientistas incríveis </h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  )
}

function Profile(){
  return(
    <img src="https://lh3.googleusercontent.com/proxy/pxBcQHD9y5cMApfsFPYLJ5qxzQI47POEr2RDGJcQ9PtJSP5jt3sAd5SXLJGCHGvqwS-frVtYr2vObTD9WqCVSKKwKK7scrUq8eYpuCBY8SpSCc_E1xRdv9N1NAJgTTAddINUFT3LEEDY6nsZqDOH629D"
     alt=""
     width="20%" />
  
    )
  }

  export default App 
