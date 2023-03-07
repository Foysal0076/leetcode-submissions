export class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  appendNode(newNode) {
    let node = this.head
    if (node == null) {
      this.head = newNode
      return
    }

    while (node.next) {
      node = node.next
    }
    node.next = newNode
  }

  getNodeByIndex(index) {
    let node = this.head

    if (index === 0) {
      return this.head
    }

    while (index--) {
      if (node.next !== null) {
        node = node.next
      } else {
        throw new Error('Index out of bound')
      }
    }

    return node
  }

  length() {
    let node = this.head
    let count = 1
    if (this.head === null) return 0

    while (node.next) {
      ++count
      node = node.next
    }

    return count
  }

  reverse() {
    let prevNode = null
    let currentNode = this.head
    if (currentNode === null) return this.head

    let nextNode
    while (currentNode) {
      // this is for next iteration purpose
      nextNode = currentNode.next

      //changing reference to previous node instead of next node
      currentNode.next = prevNode

      // Go to next iteration
      prevNode = currentNode
      currentNode = nextNode
    }
    this.head = prevNode
  }

  printList() {
    let list = []
    let node = this.head
    while (node) {
      list.push(node.val)
      node = node.next
    }
    console.log(`HEAD -> ${list.join(' -> ')} NULL`)
  }
}
