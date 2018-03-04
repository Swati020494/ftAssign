import State from './script.js';
console.log('------------------------------------------begin----------------------------------------');
let myState = State.create({
    range: {
	start: 1,
	end: 5 },
    visible: true
});
console.log('------------------------------------------1----------------------------------------');
console.log("--->1",myState.getState());
myState.create('range.type',    {
    absolute: true
});
myState.create({ focus: null });
console.log("--->2",myState.prop('range.type'));
myState.prop('visible', true);

console.log('------------------------------------------2----------------------------------------');
myState.on('range.start', (oldVal, newVal) => {
    console.log('Value before prop change', oldVal);
    console.log('Value after prop change', newVal);
});
myState.prop('range.start', 9);

console.log('------------------------------------------3----------------------------------------');

myState.on('range', (oldVal, newVal) => {
    console.log('Value before prop change', oldVal);
    console.log('Value after prop change', newVal);
});
myState.prop('range.start', 10);

myState.prop('range.type.absolute', false);

console.log('------------------------------------------4----------------------------------------');

myState.next('range', (oldVal, newVal) => {
    console.log('Value before prop change', oldVal);
    console.log('Value after prop change', newVal);
});
myState.prop('range.start', 11);
myState.prop('range.end', 12);

console.log('------------------------------------------5----------------------------------------');

myState.on('range', (oldVal, newVal) => {
    console.log('Value before prop change', oldVal);
    console.log('Value after prop change', newVal);
});
myState.prop('range.start', 12);
myState.prop('range.end', 13);

console.log('------------------------------------------6----------------------------------------');

myState.on('range', (oldVal, newVal) => {
    console.log('Value before prop change', oldVal);
    console.log('Value after prop change', newVal);
});
myState.lock();
myState.prop('range.start', 13)
myState.prop('range.end', 14)
myState.unlock();

console.log('------------------------------------------7----------------------------------------');

myState.on('range.start.man', (oldVal, newVal) => {
  console.log('Value before prop change', oldVal);
  console.log('Value after prop change', newVal);
});
myState.prop('range.start', { 'man': 'monologue' });

console.log('------------------------------------------8----------------------------------------');

myState.on('range', (oldVal, newVal) => {
  console.log('Value before prop change', oldVal);
  console.log('Value after prop change', newVal);
});
myState.prop('range.start', { 'man': 'monologue' });
console.log('------------------------------------------end----------------------------------------');
