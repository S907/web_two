import { render, createRoot } from 'react-dom/client';
import './styles/style.scss'
import App from './components/App'
// render(<h1>R to webpack</h1>, document.getElementById("root"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <App />
);