import { DataFile } from './DataFile.js'

$(document).ready(function () {
    const rows = document.getElementById('rows');
    const btn = document.getElementById('btn-calc');

    var dateOfProduct, value, product;
    var arrayCell = [];

    btn.addEventListener('click', () => {
        var highestValue = 0;
        for(var i = 0; i < arrayCell.length; i++){

            highestValue = arrayCell[i].value > highestValue ? arrayCell[i].value : highestValue; 
        }       
        document.getElementById('products').innerHTML = `<span> O produto de maior valor custa R$ ${ highestValue } </span>`
        
    });

    $.ajax({
        url: 'data.csv',
        dataType: 'text',
    }).done(successFunction);

    function buildTable(){
        var tdHtml = "<table>";

        for(var i = 0; i < arrayCell.length; i++ ){
            tdHtml +=   `<tr>
                            <td> ${arrayCell[i].date} <td/>
                            <td> ${arrayCell[i].value}<td/>
                            <td> ${arrayCell[i].product}<td/>
                        </tr>`
        }

        tdHtml += "</table>"
        document.getElementById('rows').innerHTML = tdHtml;
    }

    function successFunction(data) {
        var allRows = data.split(/\r?\n|\r/);
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
            var rowCells = allRows[singleRow].split(',');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                // if (singleRow > 0) {
                    if (rowCell === 0) {
                        dateOfProduct = rowCells[rowCell];
                    }
                    else if (rowCell === 1) {
                        value = rowCells[rowCell];
                    }
                    else if (rowCell === 2) {
                        product = rowCells[rowCell];
                        arrayCell.push(new DataFile(dateOfProduct, value, product))
                    }
                // }
            }
        }
        buildTable();
        console.log(arrayCell);
    }

});
