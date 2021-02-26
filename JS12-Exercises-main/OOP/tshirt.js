class TShirt {
    constructor(name, size, color, fabric) {
        this.name = name
        this.size = size
        this.color = color
        this._fabric = fabric
        this.price = 0
    }

    set fabric(value) {
        this._fabric = value + 100
    }

    get fabric() {
        return this._fabric
    }
}

myTshirt = new TShirt("aaa", 'md', "blue", 2)
console.log(myTshirt.fabric)
myTshirt.fabric = 4
console.log(myTshirt.fabric)
