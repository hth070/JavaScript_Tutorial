/*
Print Certificate
▪ Write	a	function	that	receives	a	grade	and	an	array,	
containing	two	strings	and	prints	a	formatted	
certificate
▪ If	the	student	failed,	print "Student	does	not	
qualify"
printCertificate(5.25,	['Peter',	'Carter']);
//	~~~~~~~~~~~~~~~~~
//	~~	Certificate	~~
//	~~~			~~~~~		~~~~
//	Peter	Carter
//	Very	good	(5.25)
*/

function printCertificate(grade, studentName) {
    if (grade >= 5.5) {
      console.log('~~~~~~~~~~~~~~~~~');
      console.log('~~ Certificate ~~');
      console.log('~~~           ~~~~~       ~~~~');
      console.log(studentName[0] + ' ' + studentName[1]);
      console.log('Very good (' + grade + ')');
    } else {
      console.log('Student does not qualify');
    }
  }
  
  printCertificate(5.25, ['Peter', 'Carter']);
  printCertificate(5.55, ['Peter', 'Carter']);
  
  