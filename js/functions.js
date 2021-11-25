let fromIndex = 0;
let fromPlayer = "00";
let arrFrom = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];

let toIndex = 0;
let toPlayer = "00";
let arrTo = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];

let arrAux = [];

let arrSoundsFrom = ['coin','correct','msok','ring','kirby','secret'];
let arrSoundsTo = ['fart','retard','concha','gay'];

let delayMax = 100;

const timer = ms => new Promise(res => setTimeout(res, ms));

document.addEventListener('DOMContentLoaded', function(){
    reset();
}, false);

function reset(){
    document.getElementById("divTo").querySelectorAll('input[type=text]').forEach(e =>{ e.value='--'});
}

async function from() {
    document.getElementById("btnFrom").classList.remove('bg-danger');
    document.getElementById("btnFrom").classList.remove('text-white');
    document.getElementById("btnFrom").classList.add('btn-outline-danger');
    document.getElementById("btnFrom").classList.add('text-red');
    document.getElementById("btnFrom").disabled = true;


    if (arrFrom.length == 0) return;

    if (arrFrom.length == 1) {
        document.getElementById(arrSoundsFrom[Math.floor(Math.random() * arrSoundsFrom.length)]).play();
        document.getElementById("up_"+arrFrom[0]).classList.remove('bg-primary');
        document.getElementById("up_"+arrFrom[0]).classList.add('bg-danger');
        fromPlayer = arrFrom[0];
        arrFrom.splice(0,1);
        document.getElementById("bntTo").classList.remove('btn-outline-success');
        document.getElementById("bntTo").classList.remove('text-green');
        document.getElementById("bntTo").classList.add('btn-success');
        document.getElementById("bntTo").classList.add('text-white');
        document.getElementById("bntTo").disabled = false;
        return;
    }
    
    document.getElementById("box").play();
    for (let delay = 1; delay <= delayMax; delay+=1) {
        fromIndex = Math.floor(Math.random() * arrFrom.length);
        fromPlayer = arrFrom[fromIndex];
        document.getElementById("turno").value = arrFrom[fromIndex];
        document.getElementById("up_"+arrFrom[fromIndex]).classList.remove('bg-primary');
        document.getElementById("up_"+arrFrom[fromIndex]).classList.add('bg-danger');
        await timer(delay);
        document.getElementById("up_"+arrFrom[fromIndex]).classList.remove('bg-danger');
        document.getElementById("up_"+arrFrom[fromIndex]).classList.add('bg-primary');
    }
    document.getElementById(arrSoundsFrom[Math.floor(Math.random() * arrSoundsFrom.length)]).play();
    document.getElementById("up_"+arrFrom[fromIndex]).classList.remove('bg-primary');
    document.getElementById("up_"+arrFrom[fromIndex]).classList.add('bg-danger');
    arrFrom.splice(fromIndex,1);
    
    
    document.getElementById("bntTo").classList.remove('btn-outline-success');
    document.getElementById("bntTo").classList.remove('text-green');
    document.getElementById("bntTo").classList.add('btn-success');
    document.getElementById("bntTo").classList.add('text-white');
    document.getElementById("bntTo").disabled = false;
}


async function to() {
    document.getElementById("bntTo").classList.remove('btn-success');
    document.getElementById("bntTo").classList.remove('text-white');
    document.getElementById("bntTo").classList.add('btn-outline-success');
    document.getElementById("bntTo").classList.add('text-green');
    document.getElementById("bntTo").disabled = true;

    if (arrTo.length == 0) return;

    if (arrTo.length == 1) {
        document.getElementById(arrSoundsTo[Math.floor(Math.random() * arrSoundsTo.length)]).play();
        document.getElementById("down_"+fromPlayer).classList.remove('bg-warning');
        document.getElementById("down_"+fromPlayer).classList.remove('text-dark');
        document.getElementById("down_"+fromPlayer).classList.add('bg-success');
        document.getElementById("down_"+fromPlayer).classList.add('text-white');
        document.getElementById("down_"+fromPlayer).value = arrTo[0];
        arrTo.splice(0,1);
        return;
    }

    let index = arrTo.indexOf(fromPlayer);
    if (index != -1){
        arrTo.splice(index,1);
    }
   
    document.getElementById("box").play();
    for (let delay = 1; delay <= delayMax; delay+=1) {
        toIndex = Math.floor(Math.random() * arrTo.length);
        toPlayer = arrTo[toIndex];
        document.getElementById("down_"+fromPlayer).value = arrTo[toIndex];
        await timer(delay);
    }
    document.getElementById(arrSoundsTo[Math.floor(Math.random() * arrSoundsTo.length)]).play();
    arrAux.push(toPlayer);
    document.getElementById("down_"+fromPlayer).classList.remove('bg-warning');
    document.getElementById("down_"+fromPlayer).classList.remove('text-dark');
    document.getElementById("down_"+fromPlayer).classList.add('bg-success');
    document.getElementById("down_"+fromPlayer).classList.add('text-white');
    arrTo.splice(toIndex,1);

    if (arrAux.indexOf(fromPlayer) == -1)
        arrTo.push(fromPlayer);

    arrTo.sort();
    arrAux.sort();

    document.getElementById("btnFrom").classList.remove('btn-outline-danger');
    document.getElementById("btnFrom").classList.remove('text-red');
    document.getElementById("btnFrom").classList.add('bg-danger');
    document.getElementById("btnFrom").classList.add('text-white');
    document.getElementById("btnFrom").disabled = false;
}
