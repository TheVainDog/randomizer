let fromIndex = 0;
let fromPlayer = "00";
let arrFrom = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];

let toIndex   = 0;
let toPlayer   = "00";
let arrTo   = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];

const timer = ms => new Promise(res => setTimeout(res, ms));

async function from() {
    
    if (arrFrom.length == 0) return;

    if (arrFrom.length == 1) {
        document.getElementById("coin").play();
        document.getElementById("up_"+arrFrom[0]).classList.remove('bg-primary');
        document.getElementById("up_"+arrFrom[0]).classList.add('bg-danger');
        fromPlayer = arrFrom[0];
        arrFrom.splice(0,1);
        return;
    }
    
    document.getElementById("box").play();
    for (let delay = 1; delay <= 100; delay+=1) {
        fromIndex = Math.floor(Math.random() * arrFrom.length);
        fromPlayer = arrFrom[fromIndex];
        document.getElementById("turno").value = arrFrom[fromIndex];
        document.getElementById("up_"+arrFrom[fromIndex]).classList.remove('bg-primary');
        document.getElementById("up_"+arrFrom[fromIndex]).classList.add('bg-danger');
        await timer(delay);
        document.getElementById("up_"+arrFrom[fromIndex]).classList.remove('bg-danger');
        document.getElementById("up_"+arrFrom[fromIndex]).classList.add('bg-primary');
    }
    document.getElementById("coin").play();
    document.getElementById("up_"+arrFrom[fromIndex]).classList.remove('bg-primary');
    document.getElementById("up_"+arrFrom[fromIndex]).classList.add('bg-danger');
    arrFrom.splice(fromIndex,1);
}


async function to() {
    if (arrTo.length == 0) return;

    if (arrTo.length == 1) {
        document.getElementById("kids").play();
        document.getElementById("down_"+fromPlayer).classList.remove('bg-warning');
        document.getElementById("down_"+fromPlayer).classList.remove('text-dark');
        document.getElementById("down_"+fromPlayer).classList.add('bg-success');
        document.getElementById("down_"+fromPlayer).classList.add('text-white');
        document.getElementById("down_"+fromPlayer).value = arrTo[0];
        arrTo.splice(0,1);
        return;
    }
        
    document.getElementById("box").play();
    for (let delay = 1; delay <= 100; delay+=1) {
        toIndex = Math.floor(Math.random() * arrTo.length);
        toPlayer = arrTo[toIndex];
        document.getElementById("down_"+fromPlayer).value = arrTo[toIndex];
        await timer(delay);
    }
    document.getElementById("kids").play();
    document.getElementById("down_"+fromPlayer).classList.remove('bg-warning');
    document.getElementById("down_"+fromPlayer).classList.remove('text-dark');
    document.getElementById("down_"+fromPlayer).classList.add('bg-success');
    document.getElementById("down_"+fromPlayer).classList.add('text-white');
    arrTo.splice(toIndex,1);
}