class Node {
    constructor(value) {
        this.prev = null
        this.value = value
        this.next = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        let node = new Node(value)
        this.head = node
        this.tail = node
    }

    push(value) {
        let node = new Node(value)
        //If no node is present
        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }

        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }

    pop() {
        if (!this.head) return

        let previousNode = this.head
        let currentNode = this.head

        while (currentNode.next) {
            previousNode = currentNode
            currentNode = previousNode.next
        }

        previousNode.next = null
        currentNode.prev = null
        this.tail = previousNode

    }
}

const dl = new DoublyLinkedList(1)

dl.push(2)
dl.push(3)
console.log(dl)
dl.pop()
dl.pop()
dl.pop()
console.log(dl)

