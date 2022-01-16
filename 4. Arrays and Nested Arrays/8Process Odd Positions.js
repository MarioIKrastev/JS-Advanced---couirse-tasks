function oddPositions(input){
const result = input.filter((val, i) => (i % 2 !== 0)).map(x => x*2).reverse().join(' ')
console.log(result);
}
/* 
function oddPositions(input){
return result = input.filter((val, i) => (i % 2 !== 0)).map(x => x*2).reverse().join(' ')}
*/

oddPositions([10, 15, 20, 25])
console.log('------------');
oddPositions([3, 0, 10, 4, 7, 3])
