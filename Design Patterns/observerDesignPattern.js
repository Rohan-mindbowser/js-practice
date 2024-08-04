class Observable {
    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unSubscribe(fn) {
        this.observers = this.observers.filter(f => f !== fn)
    }

    notify(data) {
        this.observers.forEach((fn) => {
            fn(data)
        })
    }
}

const ob = new Observable()

const cb = (data) => {
    console.log("Subscribed", data)
}

ob.subscribe(cb)

ob.notify("Hello")

console.log(ob.observers)

ob.unSubscribe(cb)

console.log(ob.observers)