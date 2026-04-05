// cohercion implicita

  console.log('5'+3);
  console.log('5'-3);
  console.log(true+1);

  // Conversion explicita

  const str = '42';  //llega como str
  const num = Number(str);
  console.log(typeof num,num);  //verificamos que sea numerico

  const int = parseInt(str,10); //convertir a entero
  console.log(int); 

  const float = parseFloat('3.1416'); //convertirlo a flotante
  console.log(float)

  const textos = String(234);   //convertir a texto (string)
  console.log(typeof textos)

  const bool = Boolean(1);  // convertir a booleano
  console.log(bool); 