import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { fetchData } from './function.ts'

const URL = "https://www.course-api.com/react-tours-project"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  
    <h1>Vite + TypeScript</h1>

    <div id="content">

    </div>

  </div>
`

const data = await fetchData(URL)

const el = await document.getElementById('content')

if (el != null) {
  el.innerHTML = data.map(v => 
    `
    <div>
      <p>Name Tour: ${v.name}</p>
    </div>
    `
  ).join("")
} else {
  console.log("undifiend #content")
}



// console.log(data)


