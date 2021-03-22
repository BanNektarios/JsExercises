const linkedLists = require('./linkedLists');




function Queuey() {
    let queue = new linkedLists();

    //is our queue empty
    queue.isEmpty();

    //queue size
    queue.size();

    let enqueue = (element) => {
        queue.add(element);
    }

    let dequeue = () => {
        queue.remove();
    }

    
}

