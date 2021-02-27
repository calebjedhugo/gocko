class Storage {
    constructor({ key, schema }) {
        this.key = key;
        this.schema = schema;
    }
    push = (obj) => {
        const newArray = this.data;
        Object.keys(obj).forEach((key) => {
            if (!this.schema.includes(key))
                console.warn(
                    `'${key}' does not match schema for '${this.key}'`
                );
        });
        newArray.push(obj);
        localStorage.setItem(this.key, JSON.stringify(newArray));
    };
    reset = () => {
        localStorage.setItem(this.key, JSON.stringify([]));
    };
    get data() {
        return JSON.parse(localStorage.getItem(this.key) || "[]");
    }
}

const mathHistory = new Storage({
    key: "mathHistory",
    schema: ["question", "answer", "correct", "time"],
});

export { mathHistory };
