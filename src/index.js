
// function renderHeader (state) {
//     const head = document.getElementById('head');
//     head.innerText = state.head.text;
//     head.style.color = state.head.color;

// }
// function renderBody (state) {
//     const body = document.getElementById('body');
//     body.innerText = state.body.text;
//     body.style.color = state.body.color;
//     // state.body.text = "我是一颗经过head修改后的body"
//     dispatch(state,{type: 'BODY_TEXT',text: '我是一颗经过head修改后的body'})
// }

// function renderApp(state) {
//     renderHeader(state);
//     renderBody(state);
// }

// renderApp(appState);

import { state } from './redux/state.js'
import { storeChange } from './redux/storeChange'
import { createStore } from './redux/createStorage'

const { store ,dispatch } =createStore(state, storeChange)

function renderHead (state) {
    const head = document.getElementById('head');
    head.innerText = state.text;
    head.color = state.color;

}
function renderBody(state) {
    const head = document.getElementById('body');
    head.innerText = state.text;
    head.color = state.color;

}
function renderApp(state) {
    renderHead(state.head)
    renderBody(state.body)
}
renderApp(store)
dispatch({type: 'BODY_TEXY',text: '我是经过dispath修改的body'})
renderApp(store)