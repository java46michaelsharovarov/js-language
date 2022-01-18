function displayMatrix(matrix) {
         for (let i = 0; i < matrix.length; i++) {
                 let row = '';
                 for (let j = 0; j < matrix[i].length; j++) {
                    row = spacesInLine(row,matrix[i][j]);
                 }
                 console.log(row);
         }  
    }
function matrixTransp(matrix) {
         for (let j = 0, i = 0; j < matrix[i].length; j++) {
                 let row = '';
                 for (let i = 0; i < matrix.length; i++) {
                    row = spacesInLine(row,matrix[i][j]);
                 }
                 console.log(row);
         }  
    }
function spacesInLine(row, element){
    if(element > 9 && element <= 99){
        row = row + element + '   '                         
     }
     else if(element > 99 && element <= 999){                      
        row = row + element + '  '   
     }
     else if(element > 999){
        row = row + element + ' '
     } 
     else{
        row = row + element + '    '
     }
    return row;
}
const matrix = [[1, 22, 3], [4, 1312, 659], [71, 8, 9], [100, 0, 12]];
displayMatrix(matrix);
console.log();
matrixTransp(matrix);


const arHw = [13, 28, 4, 15, 25, -10, 40, 17,27];
arHw.sort(function (a, b){
    if(a % 2 != 0 && b % 2 != 0){
        return b - a;
    }
    else if(a % 2 == 0 && b % 2 == 0){
            return a - b;
        }
});
console.log(`arHW is ${arHw.toString()}`);