import State from './test.js';
let myState = State.create({
    range: {
	start: 1,
	end: 5 },
    visible: true
});
console.log("--->1",myState.getState());
myState.create('range.type',    {
    absolute: true
});
myState.create({ focus: null });
console.log("--->2",myState.prop('range.type'));
myState.prop('visible', true);
myState.on('range.start', (oldValue, newValue) => {
    console.log('Value before prop change', oldValue);
    console.log('Value after prop change', newValue);
});
myState.prop('range.start', 9);
myState.on('range', (oldValue, newValue) => {
    console.log('Value before prop change', oldValue);
    console.log('Value after prop change', newValue);
});
myState.prop('range.start', 10);
myState.prop('range.type.absolute', false);
myState.next('range', (oldValue, newValue) => {
    console.log('Value before prop change', oldValue);
    console.log('Value after prop change', newValue);
});
myState.prop('range.start', 11);
myState.prop('range.end', 12);
myState.on('range', (oldVal, newVal) => {
    console.log('Value before prop change', oldValue);
    console.log('Value after prop change', newValue);
});
myState.prop('range.start', 12);
myState.prop('range.end', 13);
myState.on('range', (oldVal, newVal) => {
    console.log('Value before prop change', oldValue);
    console.log('Value after prop change', newValue);
});
myState.lock()
myState.prop('range.start', 13)
myState.prop('range.end', 14)
myState.unlock()

myState.on('range.start.man', (oldValue, newValue) => {
  console.log('Value before prop change', oldValue);
  console.log('Value after prop change', newValue);
});
myState.prop('range.start', { 'man': 'monologue' });

myState.on('range', (oldValue, newValue) => {
  console.log('Value before prop change', oldValue);
  console.log('Value after prop change', newValue);
});
myState.prop('range.start', { 'man': 'monologue' });
// console.log(myState.latest)