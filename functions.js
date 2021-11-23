let player = "00";
let toIndex = 0;
let fromIndex = 0;
let arrFrom = ['01', '02', '03', '04', '05', '06', '07', '08', '09',];
let arrTo = ['01', '02', '03', '04', '05', '06', '07', '08', '09',];

function test() {
    console.log(arrFrom);
    arrFrom.splice(1,1);
    console.log(arrFrom);
}

function from() {
    let initialDelay = 3000;
    if (arrFrom.length == 0){
        console.log("NO MORE arrFrom");
        return;
    }
    if (arrFrom.length == 1){
        document.getElementById("up_"+arrFrom[0]).classList.remove('bg-primary');
        document.getElementById("up_"+arrFrom[0]).classList.add('bg-danger');
        arrFrom.splice(0,1);
        return;
    }
    while(initialDelay > 0){
        setTimeout(() => {
            fromIndex = Math.floor(Math.random() * arrFrom.length);
            document.getElementById("turno").value = arrFrom[fromIndex];
            player = arrFrom[fromIndex];
        }, initialDelay);
        initialDelay--;
    }
    setTimeout(() => {
        document.getElementById("up_"+arrFrom[fromIndex]).classList.remove('bg-primary');
        document.getElementById("up_"+arrFrom[fromIndex]).classList.add('bg-danger');
        arrFrom.splice(fromIndex,1);
    }, 3010);
}

function to(){
    if (player == "00") return;

    let toPlayer = "00";
    
    let initialDelay = 3000;
    //arrTo.splice(arrTo.indexOf(player),1);
    console.log(arrTo);
    
    toIndex = Math.floor(Math.random() * arrTo.length);

    while(initialDelay > 0){
        setTimeout(() => {
            toIndex = Math.floor(Math.random() * arrTo.length);
            document.getElementById("down_"+player).value = arrTo[toIndex];
            toPlayer = arrTo[toIndex];
        }, initialDelay);
        initialDelay--;
    }
    setTimeout(() => {
        document.getElementById("down_"+player).classList.remove('bg-warning');
        document.getElementById("down_"+player).classList.remove('text-dark');
        document.getElementById("down_"+player).classList.add('bg-success');
        document.getElementById("down_"+player).classList.add('text-white');
        document.getElementById("down_"+player).value = toPlayer;
        arrTo.splice(toIndex,1);
        console.log(arrTo);
    }, 3010);

}

