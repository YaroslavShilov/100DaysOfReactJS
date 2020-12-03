import "./styles.css";
import { createStore } from "./createRedux/createStore";
import { rootReducer } from "./createRedux/redux/rootReducer";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

addBtn.addEventListener("click", () => {});

subBtn.addEventListener("click", () => {});

asyncBtn.addEventListener("click", () => {});

themeBtn.addEventListener("click", () => {});
