import Items from './components/Items.js';

class App {
  constructor() {
    console.log("hello!");
    const $app = document.querySelector('#app');
    if ($app == null){
      throw new Error("$app is null");
    }
    new Items($app);
  }
}

new App();
