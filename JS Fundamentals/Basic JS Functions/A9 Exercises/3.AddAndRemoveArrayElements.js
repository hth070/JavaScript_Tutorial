function addOrRemove (arr) {
    let resultArr=[];
    let initialNumber = 1;
    for (let i=0; i<arr.length; i++) {
        if(arr[i]==='add') { 
          resultArr.push(initialNumber);
    }else if (arr[i] ==='remove') {
          resultArr.pop();
    }
    initialNumber++; 
}
if (resultArr.length === 0) {
    console.log("Empty");
} else {
    console.log(resultArr.join('\n'));
}
}

addOrRemove(
['remove',
'remove',
'remove']
);