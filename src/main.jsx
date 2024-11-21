import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(<App />)
