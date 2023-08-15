class Component {
  $target: Element;
  state: State;
  constructor($target: Element) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  setState(newState: State) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup() {
    this.state = { items: ['item1', 'item2'] };
  }
  template() {
    const { items } = this.state;
    return `
        <button>추가</button>
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
    `;
  }

  setEvent() {
    this.$target.querySelector('button')?.addEventListener('click', () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

new App(document.querySelector('#app')!);
