import './app.css'
import App from './App.svelte'

const appElement = document.getElementById('app') as HTMLElement;

const app = new App({
  target: appElement,
})

export default app
