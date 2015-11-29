
// bonus
var arr=[10,-10,5,0,8,-12,-23.5,1.2];
var n = arr.length;
 for (var i = 0; i < n-1; i++)
 {
     for (var j = 0; j < n-1-i; j++)
     { 
         if (arr[j+1] < arr[j])
         { 
             var t = arr[j+1]; 
             arr[j+1] = arr[j];
             arr[j] = t; 
         }}}                     
    alert(arr);  