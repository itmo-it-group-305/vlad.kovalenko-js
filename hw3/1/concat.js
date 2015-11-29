var A = [ 12, 4, 3, 10, 1, 20 ];
var B = [-3, -7, -100, -33];

var C = A;

for (var i = 0; i < B.length; i++) {
    C.push(B[i]);
}

alert(C);
//
var A = [ 12, 4, 3, 10, 1, 20 ];
var B = [-3, -7, -100, -33];
var newArr = A.concat(B);

alert( newArr ); 