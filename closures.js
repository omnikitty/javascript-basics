/* https://stackoverflow.com/questions/111102/how-do-javascript-closures-work

Whenever a func is called inside a func,
a closure is used.
A closure is a reference to the scope it 
was declared in that remains open 
after the func returns. */
function buildList(list) {
	var result = [];
	for (var i = 0; i < list.length; i++) {
		var item = 'item' + i;
		console.log(item + ' ' + list[i]); // understanding change of i
		result.push(function () { console.log(item + ' ' + list[i]) });
	}
	return result;
}

function testList() {
	var fnlist = buildList([1, 2, 3]);
	// Using j only to help prevent confusion -- could use i.
	for (var j = 0; j < fnlist.length; j++) {
		fnlist[j]();
	}
}

testList() //logs "item2 undefined" 3 times

/* Happens because each entry in fnList is a func
that does { console.log(item + ' ' + list[i]) } 
as defined in buildList, which is called when calling
testList.
But the list[i] in the func refers back to the scope
it was declared in when logging,
and list[i] remained unchanged since the last iteration
of the for loop in buildList.
i last was 3 (at 3 the for loop terminated) and the 
list provided has length 3 only, which means highest
index is 2; thus list[3] does not exist/ undefined.
This shows when a func is inside another func, a closure
is used!
*/