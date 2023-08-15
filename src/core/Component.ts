export default class Component {
  $target;
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
