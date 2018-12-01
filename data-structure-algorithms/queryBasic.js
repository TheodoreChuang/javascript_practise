// https://github.com/kyleshevlin/intro-to-data-structures-and-algorithms

// ----- Queues (FIFO) -----

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length == 0;
    }
  };
}

// const q = createQueue();
// console.log(q.isEmpty()); // true
// q.enqueue("Determine if blockchain is an appropriate tool");
// q.enqueue("Build the infrastructure");
// q.enqueue("Figure out governance");
// q.enqueue("Lots of education");
// console.log(q.peek());
// console.log(q.length);
// console.log(q.dequeue());
// console.log(q.dequeue());

exports.createQueue = createQueue;
