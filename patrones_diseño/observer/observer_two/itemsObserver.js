/**
 * Observer Pättern
 */

class Subject {
  constructor() {
    this.observers = new Array();
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(observer);
  }

  notify(data) {
    this.observers.forEach((notification) => notification.refresh(data));
  }
}

class ItemsSubjects extends Subject {
  constructor() {
    super();
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acc, element) => {
      return `${acc}<p>${element}</p>`;
    }, "");
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const itemsSubjectsOne = new ItemsSubjects();
const div1Obserever = new HtmlElementObserver(div1);
const observerOne = new Observer((data) => {
  div3.innerHTML = data.length;
  console.log(data);
});

itemsSubjectsOne.subscribe(div1Obserever);
itemsSubjectsOne.subscribe(observerOne);

function add() {
  const name = textName.value;
  itemsSubjectsOne.add(name);
}
