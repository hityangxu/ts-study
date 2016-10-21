interface LabelledValue {
    label: string;
}

function printLabel(labelled: LabelledValue) {
    console.log(labelled.label);
}

let myObj = {
    size: 10,
    label: 'label'
};

printLabel(myObj);