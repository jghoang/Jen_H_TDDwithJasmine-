//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n){
    var sum = 0;
    for(i = 0; i <= n; i++){
      sum += i; 
       }
  return sum;
       }
    Sum1toN(2);
    Sum1toN(3);
    Sum1toN(4);
    Sum1toN(5);

//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr){
   
        n1 = Number(arr[0]);
        n2 = Number(arr[arr.length - 1]);{
        sum = n1+n2;
        }
       return sum;
   }
    sumFirstLast([1,2]);
    sumFirstLast([2,3,8]);
    sumFirstLast([-6,23,3,-4]);
    sumFirstLast([11,2,3,7]);

    
//Returns largest number in array
function returnLargest(arr){
//     var max = arr[0];
//     for(var i=1; i<arr.length; i++){
//      if(arr[i] > max){
//          max = arr[i];
//      }
//     }
//     return max;
}
console.log(returnLargest([1,2,8,10]));
console.log(returnLargest([11,1,5,9]));


describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("returnLargest", function() { 
    it("should return 10 when we pass [1,2,8,10] as an argument", function() { 
        expect(returnLargest([1,2,8,10])).toEqual(10); 
    });
    it("should return 11 when we pass [11,1,5,9] as an argument", function(){
        expect(returnLargest([11,1,5,9])).toEqual(11);
    });
});
