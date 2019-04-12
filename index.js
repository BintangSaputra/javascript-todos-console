const myTodos = [
  {
    id: 123,
    content: "take a bath, wash neighbour cars, clean dog's poop",
    tags: ["unimportant", "fun"],
    favorite: false
  },
  {
    id: 345,
    content: "secure parameter, sniper practice, go to the gym",
    tags: ["important"]
  },
  {
    id: 567,
    content: "sell stock, buyback stock, become a president",
    tags: ["unimportant", "fun"],
    favorite: false
  }
];

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    let itemString = "";

    itemString += `${itemString.completed} ☑`;
    itemString += `${item.text}`;
    itemString += `${item.favorite}★`;
  }
};

console.log(myTodos);

// filter Todos

const idSpecific = (todoList, id) => {
  for (let index = 0; index < todoList.length; index++) {
    if (id == myTodos[index].id) {
      console.log(todoList[index]);
    }
  }
};

idSpecific(myTodos, 345);
