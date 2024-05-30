class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.items = 0;
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 3;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        hashCode = hashCode % this.buckets.length;
        return hashCode;
    }

    set(key, value) {
        var code = this.hash(key);
        let node = new Node(value);
        node.key = key;
        
        // if buckets[code][0] matches key
        if (this.buckets[code] !== undefined && this.buckets[code].key === key) {
            this.buckets[code].data = value;
        } else if(this.buckets[code] !== undefined) {
            //if buckets[code] contains multiple nodes
            let current = this.buckets[code];
            // current.key doesn't match & no other nodes in bucket
            if (!current.next) {
                current.next = node;
                this.items++;
            } else {
                while (current.next) {
                    // if a buckets[code][node] matches key, update node data
                    
                    // else continue to cycle through nodes
                   current = current.next;
                   if (current.key === node.key) {
                        current.data = node.data;
                        var inserted = true;
                    }
                }
                // if no matches, place node at end of bucket list
               if (!inserted) { 
                    current.next = node;
                    this.items++;
                }
            }
        } else {
            // if bucket is empty, place node in bucket
            this.buckets[code] = node;
            this.items++;
        }
    }

    get(key) {
        var code = this.hash(key);
     
        
        if (!this.buckets[code]) {
            return null;
        } else if (this.buckets[code].key === key) {
            return this.buckets[code];
        } else if (this.buckets[code].next) {
            let current = this.buckets[code];

            while (current.next) {
                current = current.next;

                if (current.key === key) return current;
                else return null;
            }
        } 
    }

    has(key) {
        var code = this.hash(key);
     
        
        if (!this.buckets[code]) {
            return false;
        } else if (this.buckets[code].key === key) {
            return true;
        } else if (this.buckets[code].next) {
            let current = this.buckets[code];

            while (current.next) {
                current = current.next;

                if (current.key === key) return true;
                else return false;
            }
        } 
    }

    remove(key) {
        var code = this.hash(key);

        if (!this.buckets[code]) {
            return false;
        } else if (this.buckets[code].key === key && !this.buckets[code].next) {
            this.buckets.splice(code, 1);
            this.items--;
            return true;
        } else if (this.buckets[code].key === key && this.buckets[code].next) {
            let current = this.buckets[code];
            this.buckets[code] = current.next;
            this.items--;
            return true;
        } else if (this.buckets[code].key !== key && this.buckets[code].next) {
            let current = this.buckets[code];
            let removed;

            while (current.next) {
                let previous = current;
                current = current.next;
                
                if (current.key === key) {
                    previous.next = current.next;
                    this.items--;
                    removed = true;
                } 
            }

            if (removed === true) return true;
            else return false;
        }
    }

    length() {
        return this.items;
    }

    clear() {
        this.buckets.splice(0, this.buckets.length);
        this.buckets.length = 16;
        this.items = 0;
    }

    keys() {
        let keysArray = [];

        this.buckets.forEach((bucket) => {
            if (bucket) {
                keysArray.push(bucket.key);

                if(bucket.next) {
                    let current = bucket;

                    while (current.next) {
                        current = current.next;
                        keysArray.push(current.key);
                    }
                }
            }
        });

        return keysArray;
    }

    values() {
        let valuesArray = [];

        this.buckets.forEach((bucket) => {
            if (bucket) {
                valuesArray.push(bucket.data);

                if(bucket.next) {
                    let current = bucket;

                    while (current.next) {
                        current = current.next;
                        valuesArray.push(current.data);
                    }
                }
            }
        });

        return valuesArray;
    }

    entries() {
        let entriesArray = [];

        this.buckets.forEach((bucket) => {
            if (bucket) {
                entriesArray.push([bucket.key, bucket.data]);

                if(bucket.next) {
                    let current = bucket;

                    while (current.next) {
                        current = current.next;
                        entriesArray.push([current.key, current.data]);
                    }
                }
            }
        });

        return entriesArray;
    }
}