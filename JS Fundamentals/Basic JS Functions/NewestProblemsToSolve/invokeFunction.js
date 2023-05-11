


function printBook()	{
		printCovers();//Invocation	from	another	function:
		printContent();
}
/*
function countDown(x) {
		console.log(x);//Self-invocation	(recursion):
		if	(x	>	0)	{	countDown(x	-	1);	}
}
*/
countDown(6);