let old = {};
import State from './test.js';
let myState = State({
    range: {
	    start: 1,
	    end: 5 
    },
	 visible: true
});

let base = myState.getState();
//console.log("--->1",base)
// var my = myState.create('range.start',{
//     absolute: true
// })
myState.on('range.start.man', (oldValue, newValue) => {
    console.log('Value before prop change', oldValue);
    console.log('Value after prop change', newValue);
});
myState.prop('range.start',{'man':'monologue'});
// console.log(myState.latest)


