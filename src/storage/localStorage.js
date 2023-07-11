const defaultSchema = ["question", "answer", "correct", "time"];

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
    schema: defaultSchema,
});

const readingHistory = new Storage({
    key: "readingHistory",
    schema: [...defaultSchema, "iconOnly"],
});

const typingHistory = new Storage({
    key: "typingHistory",
    schema: [...defaultSchema],
});

const countingHistory = new Storage({
    key: "countingHistory",
    schema: [...defaultSchema],
});

export { mathHistory, readingHistory, typingHistory, countingHistory };
