import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const pathname = window.location.pathname;
let page = 'home';

if (pathname === '/functionalitati') page = 'functionalitati';
else if (pathname === '/solutii') page = 'solutii';
else if (pathname === '/integrari') page = 'integrari';
else if (pathname === '/preturi') page = 'preturi';
else if (pathname === '/contact') page = 'contact';

createRoot(document.getElementById("root")!).render(<App page={page} />);
