let arr =[
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
]
let isX = true;
function showData() {
    let content = ""
    // lap de ve bang
    // so hang
    for (let i = 0; i < arr.length ; i++) {
        content+=`<tr>`;
    //     so o trong hang
        for (let j = 0; j < arr[i].length; j++) {
            content+=`<td>${arr[i][j]}</td>`
        }
        content+=`</tr>`;
    }
    document.getElementById("data").innerHTML = content;
}
showData();
// changeValue: thay doi gia tri
// tham so: i, j
// thay doi gia tri tai i, j -> x
function changeValue(i, j) {
    arr[i][j] = isX?"x":"o";
    isX=!isX;
    showData();
}
