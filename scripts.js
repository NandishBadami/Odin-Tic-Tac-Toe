let td = document.querySelectorAll('td');
let turn = "X";

var list = [0,0,0,0,0,0,0,0,0]
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6]
]
var bool = true;
document.querySelector('.restart-button').addEventListener('click', () => {
    for(let i=0; i<list.length;i++) {
        td[i].textContent = '';
        list[i] = 0;
    }
    turn = "X";
    bool = true;
    document.querySelector('.p1').textContent = '';
});
document.querySelector('.start-button').addEventListener('click', function () {
    if(document.querySelector('.player1').value && document.querySelector('.player2').value) {
        document.querySelector('.p2').textContent = "You can start playing the game now";
        for(let i = 0; i < td.length;i++) {
            td[i].addEventListener("click", function () {
                if(bool === true && list[i] == 0) {
                td[i].innerHTML = turn;
                list[i] = td[i].textContent;
                console.log(list);
                console.log('i: ' + i);
                for(let line of lines) {
                    let sum = 0;
                    for (pos of line){ 
                            if(list[pos] != 0 && list[pos] === list[line[0]]) {
                                sum++;
                                console.log(sum);
                            }
                    }
                    if(sum == 3) {
                        bool = false;
                        if(turn === "X") {
                            document.querySelector('.p1').textContent = `${document.querySelector('.player1').value}(${turn}) has won the game, click on restart button to start new game`;
                        } else {
                            document.querySelector('.p1').textContent = `${document.querySelector('.player2').value}(${turn}) has won the game, click on restart button to start new game`;
                        }
                        break;
                    }
                    let count = 0;
                    for(let l of list) {
                        if(l!=0) count++;
                    }
                    if(count == 9) document.querySelector('.p1').textContent = "Its a Tie! game, click on restart button to start new game"
                }
                if (turn === "X") turn = "O";
                else turn = "X";
            }
            });
        }
    }
});