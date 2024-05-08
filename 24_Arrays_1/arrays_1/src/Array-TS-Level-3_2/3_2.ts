const toDoItems: string[] = [];

function addItem(newElement: string, atTheBack: boolean) {
    if (atTheBack) {
        toDoItems.push(newElement);
    } else {
        toDoItems.unshift(newElement);
    }
}


function removeItem(atTheBack:boolean) {
    if (atTheBack) {
        toDoItems.pop();
    } else {
        toDoItems.shift();
    }
}

function addItemAt(toDoItem: string, index: number) {
    toDoItems.splice(index, 0, toDoItem)
}

function removeItemAt(indexToRemove: number) {
    toDoItems.splice(indexToRemove, 1)
}

function printList() {
    console.log(toDoItems);
}
function printPretty() {
    console.log(toDoItems.join(' ** '));
}

addItem('Hola', true)
addItem('chau', true)
addItem('chau', true)
removeItem(false)
addItemAt('perro', 1);
removeItemAt(2)

printList()
printPretty()
addFive()
printList()
