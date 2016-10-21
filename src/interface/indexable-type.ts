interface StringArray {
    [index: number]: string;
}

// let array: StringArray = [1, 2]; ERROR
let array: StringArray = ["A"];

// let another: StringArray = {
//     a: 'b'
// };

let another: StringArray = {
    "1": 'b'
};

// index will be change to string first

interface Dictionary {
    [index: string]: {length: number, name: string};

    dict: {length: number, name: string};
}