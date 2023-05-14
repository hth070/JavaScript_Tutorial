function createEmployeeList(employeeNames) {
    let employeeList = {};
  
    for (let i = 0; i < employeeNames.length; i++) {
      let name = employeeNames[i];
      let personalNum = name.length;
      employeeList[name] = personalNum;
    }
  
    return employeeList;
  }
  
  function printEmployeeList(employeeList) {
    for (let employeeName in employeeList) {
      let personalNum = employeeList[employeeName];
      console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
  }
  
  let employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ];
  
  let employeeList = createEmployeeList(employees);
  printEmployeeList(employeeList);
  

/*

Input:                              Output:
[
'Silas Butler',                     Name: Silas Butler -- Personal Number: 12
'Adnaan Buckley',                   Name: Adnaan Buckley -- Personal Number: 14
'Juan Peterson',                    Name: Juan Peterson -- Personal Number: 13
'Brendan Villarreal'                Name: Brendan Villarreal -- Personal Number: 18
]

[                                   
'Samuel Jackson',                   Name: Samuel Jackson -- Personal Number: 14
'Will Smith',                       Name: Will Smith -- Personal Number: 10
'Bruce Willis',                     Name: Bruce Willis -- Personal Number: 12
'Tom Holland'                       Name: Tom Holland -- Personal Number: 11
]





•Employees
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
Try to use an object.
At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}" 
Examples
*/