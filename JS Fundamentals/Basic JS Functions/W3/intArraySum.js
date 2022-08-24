var intArraySum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      return my_array.pop() + intArraySum(my_array);
    }
  };
  
  console.log(intArraySum([1,2,3,4,5,6]));