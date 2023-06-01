let PKrand = Math.floor(Math.random() * 9) + 10
$(`#PK`).text(PKrand)

let one = `1.png`
let two = `2.png`
let three = `3.png`
let four = `4.png`
let five = `5.png`
let six = `6.png`

let rand = 0
let rand2 = 0
let rand3 = 0
let s = 0

function getRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

function f1() {
    let cub1 = getRandom(6)
    console.log(cub1)
    switch (cub1) {
        case 1:
            $(`#cub-1`).attr(`src`, one)
            rand = cub1
            break
        case 2:
            $(`#cub-1`).attr(`src`, two)
            rand = cub1
            break
        case 3:
            $(`#cub-1`).attr(`src`, three)
            rand = cub1
            break
        case 4:
            $(`#cub-1`).attr(`src`, four)
            rand = cub1
            break
        case 5:
            $(`#cub-1`).attr(`src`, five)
            rand = cub1
            break
        case 6:
            $(`#cub-1`).attr(`src`, six)
            rand = cub1
            break
    }
}
function f2(){
    let cub2 = getRandom(6)
    console.log(cub2) 
    switch (cub2) {
        case 1:
            $(`#cub-2`).attr(`src`, one)
            rand2 = cub2
            break
        case 2:
            $(`#cub-2`).attr(`src`, two)
            rand2 = cub2
            break
        case 3:
            $(`#cub-2`).attr(`src`, three)
            rand2 = cub2
            break
        case 4:
            $(`#cub-2`).attr(`src`, four)
            rand2 = cub2
            break
        case 5:
            $(`#cub-2`).attr(`src`, five)
            rand2 = cub2
            break
        case 6:
            $(`#cub-2`).attr(`src`, six)
            rand2 = cub2
            break
    }
}
function f3(){
    let cub3 = getRandom(6)
    console.log(cub3) 
    switch (cub3) {
        case 1:
            $(`#cub-3`).attr(`src`, one)
            rand3 = cub3
            break
        case 2:
            $(`#cub-3`).attr(`src`, two)
            rand3 = cub3
            break
        case 3:
            $(`#cub-3`).attr(`src`, three)
            rand3 = cub3
            break
        case 4:
            $(`#cub-3`).attr(`src`, four)
            rand3 = cub3
            break
        case 5:
            $(`#cub-3`).attr(`src`, five)
            rand3 = cub3
            break
        case 6:
            $(`#cub-3`).attr(`src`, six)
            rand3 = cub3
            break
    }
    return cub3
}

$(`#but1`).click(function(){
if (s<=4){
    f1()
    s++
}
else {
    alert(`Попытки закончились,нажмите GAME OVER`)
}
})
$(`#but2`).click(function(){
    if (s<=4){
        f2()
        s++
    }
    else {
        alert(`Попытки закончились,нажмите GAME OVER`)
    }
    })
    $(`#but3`).click(function(){
        if (s<=4){
            f3()
            s++
        }
        else {
            alert(`Попытки закончились,нажмите GAME OVER`)
        }
        })
        $(`#but0`).click(
            function(){
                if(s<=4){
                    f1();
                    f2();
                    f3();
                    s++
                }
                else{
                alert(`Попытки закончились,нажмите GAME OVER`)
                }
            }
        )

        $(`#result`).click(
            function(){
                let sum = Number(rand + rand2 + rand3)
                console.log(sum)
                if(sum>PKrand){
                    $(`#result-out`).text(`Победа`)
                }
                if (sum == PKrand){
                    $(`#result-out`).text(`Ничья`)
                }
                if(sum<PKrand){
                    $(`#result-out`).text(`Проигрыш`)
                }
                if((rand == 4 && rand2 == 5 && rand3 == 6) || (rand == 4 && rand2 == 6 && rand3 == 5) || (rand == 5 && rand2 == 4 && rand3 == 6) || (rand == 5 && rand2 == 6 && rand3 == 4) || (rand == 6 && rand2 == 4 && rand3 == 5) || (rand == 6 && rand2 == 5 && rand3 == 4)) {
                $(`#result-out`).text(`Победа`)
                }
            }
        )
function f6(){
    if((rand == 1 && rand2 == 2 && rand3 == 3)){
        alert(`Проигрыш`)
    }
    if((rand == 1 && rand2 == 3 && rand3 == 2)){
        alert(`Проигрыш`)
    }
    if((rand == 2 && rand2 == 1 && rand3 == 3)){
        alert(`Проигрыш`)
    }
    if((rand == 2 && rand2 == 3 && rand3 == 1)){
        alert(`Проигрыш`)
    }
    if((rand == 3 && rand2 == 2 && rand3 == 1)){
        alert(`Проигрыш`)
    }
    if((rand == 3 && rand2 == 1 && rand3 == 2)){
        alert(`Проигрыш`)
    }
    if((rand == 4 && rand2 == 5 && rand3 == 6)){
        alert(`Победа`)
    }
    if((rand == 4 && rand2 == 6 && rand3 == 5)){
        alert(`Победа`)
    }
    if((rand == 5 && rand2 == 4 && rand3 == 6)){
        alert(`Победа`)
    }
    if((rand == 5 && rand2 == 6 && rand3 == 4)){
        alert(`Победа`)
    }
    if((rand == 6 && rand2 == 4 && rand3 == 5)){
        alert(`Победа`)
    }
    if((rand == 6 && rand2 == 5 && rand3 == 4)){
        alert(`Победа`)
    }
}
$(`#result`).click(f6)