
function LoopdePares(valor:number): number {
  for(let i=0; i<=100;i++){ 
    var num=i;
    var suma = num + valor;
    if((suma % 2==0)){
      console.log("El numero " + suma + " es par");
    }else{
        console.log(num);
    }
  }
  return valor;
}