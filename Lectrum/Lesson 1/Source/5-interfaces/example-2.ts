{
    interface LabeledValue {
        label: string;
    }

    const printLabel = function(labeledObj: LabeledValue) {
        console.log(labeledObj.label);
    };

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
}