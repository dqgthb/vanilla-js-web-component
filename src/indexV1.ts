type State = {
  items: string[];
};

const $app = document.querySelector('#app');

if ($app == null) {
  throw new Error('$app is null or undefined');
}

let state = {
  items: ['item1', 'item2', 'item3', 'item4'],
};

console.log(state);

const render = () => {
  const { items } = state;
  $app.innerHTML = `
  <button id="append">추가</button>
  <ul>
  ${items.map((item) => `<li>${item}</li>`).join('')}
  </ul>
  `;

  document.querySelector('#append')?.addEventListener('click', () => {
    setState({ items: [...items, `item${items.length + 1}`] });
  });
};

const setState = (newState: State) => {
  state = { ...state, ...newState };
  render();
};

render();
