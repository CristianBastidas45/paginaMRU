let simular =document.getElementById('simular');
let reset =document.getElementById('reset');
let distancia = document.getElementById('distancia');
let play = document.getElementById('play');
let graf = document.getElementById('btn_graf');
let tab = document.getElementById('btn_tab');


const ctx = document.getElementById('grafica');
const ctx2 = document.getElementById('grafica2');

play.addEventListener('click',calcular);
graf.addEventListener('click',realizar_graficas);
simular.addEventListener('click',calcular);
reset.addEventListener('click',resetear);
tab.addEventListener('click',creartablas);

const grafica = new Chart(ctx,{
    type: 'line',
    data: {
        labels: [1,2,3,4],
        datasets:[{
            label: 'distancia',
            data: [0,0,0,0],
            borderColor: 'rgb(200,0,0)'
        }]
    }
}) 
const grafica2 = new Chart(ctx2,{
    type: 'line',
    data: {
        labels: [1,2,3,4],
        datasets:[{
            label: 'velocidad',
            data: [0,0,0,0],
            borderColor: 'rgb(200,0,0)'
        }]
    }
})


function calcular(){
    let velocidad =document.getElementById('primerNumero').value;
    let tiempo =document.getElementById('segundoNumero').value;
    let s=velocidad*tiempo;
    distancia.innerHTML='La distancia recorrida es= '+s+' metros' ;

    document.getElementById("moto").style.transform = "translate("+s+"vw)"; 
    document.getElementById("moto").style.transition= tiempo+"s";
}

function resetear(){
    distancia.innerHTML='La distancia recorrida es=';
    document.getElementById("moto").style.transform = "translate(0vw)";
}

function realizar_graficas(){
    const tiempo_gra = [];
    const dis_gra = [];
    const vel_gra = [];
    let velocidad =document.getElementById('primerNumero').value;
    let tiempo =document.getElementById('segundoNumero').value;
    if(velocidad==0 || tiempo==0){
        window.alert('Velocidad y/o tiempo son cero');
    }else{
        window.alert('Grafica realizada');
        for(var i=0;i<=tiempo;i++){
            tiempo_gra[i]=i;
            dis_gra[i]=i*velocidad;
            vel_gra[i]=velocidad;
        }
        
        grafica.data.datasets[0].data = dis_gra;
        grafica.data.labels= tiempo_gra;
        grafica.update();
        grafica2.data.datasets[0].data = vel_gra;
        grafica2.data.labels= tiempo_gra;
        grafica2.update();
    }
    
}

function creartablas(){
    let velocidad =document.getElementById('primerNumero').value;
    let tiempo =document.getElementById('segundoNumero').value;
    let tbl =document.getElementById('tabla1')
    let filas= tbl.getElementsByTagName('tr');
    if(filas.length>1){
        for(var i=filas.length;i>1;i--){
            document.getElementById('tabla1').deleteRow(-1);            
        }       
    }
    
    for(var i=0;i<=tiempo;i++){
        
        let tabla1 = tbl.insertRow(i+1);
        let col1 = tabla1.insertCell(0);
        let col2 = tabla1.insertCell(1);
        col1.innerHTML=i;
        col2.innerHTML=i*velocidad;
    }
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabla1").deleteRow(i);
  }