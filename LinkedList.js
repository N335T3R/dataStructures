class LinkedList {
    constructor() {
        this.head = null;
        if (!this.head) this.size = 0;
        else this.size = 1;
    }

    prepend(data) {
        var node = new Node(data);

        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(data) {
        var node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
            this.size++;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        let current;
        current = this.head;

        while(current.next) {
            current = current.next;
        }

        if(!current.next) {
            return current;
        }
    }

    at(index) {
        let now = 0;
        let current = this.head;

        while (current.next && now < index) {
            current = current.next;
            now++;
        }

        if (now === index) {
            return current;
        } 
    }

    // Removes last item
    pop() {
        let current = this.head;

        while(current.next) {
            if (current.next.next == null) {
                current.next = null;
                this.size--;
            } else current = current.next;
        }
    }


    contains(data) {
        let current = this.head;

        while(current.next) {
            if (data === current.data) return true;
            else current = current.next;
        }

        if(data !== current.data) return false;
        else return true;
    }

    indexOf(data) {
        let now = 0;
        let current = this.head;

        while (current.next) {
            if(data === current.data) return now;
            else {
                current = current.next;
                now++;
            }
        }

        if (data === current.data) return now;
        else return 'data not found';
    }

    toString() {
        let string = '';
        let current = this.head;

        while (current.next) {
            string += JSON.stringify(current);
            current = current.next;
        }

        string += JSON.stringify(current);
        return string;
    }

    insertAt(data, index) {
        var node = new Node(data);
        let now = 0;
        let current = this.head;
        let before;
        let after;

        while(current.next && now < index - 1) {
            current = current.next;
            now++;
        }
        before = current;

        if (current.next) {
            current = current.next;
            after = current;
        }

        before.next = node;

        if (after) node.next = after;
        else node.next = null;

        this.size++;
    }

    removeAt(index) {
        let now = 0;
        let current = this.head;
        let before;
        let after; 

        // If removing index 0
        if (index === 0) {
            this.head = current.next;
        }
        // Removing any other index
        while(current.next && now < index - 1) {
            current = current.next;
            now++;
        }
        before = current;
        console.log(before);
        
        while (now < index + 1) {
            current = current.next;
            now++;
        }
        after = current;
        console.log(after);

        if (after) before.next = after;
        else before.next = null;

        this.size--;
    }
}
