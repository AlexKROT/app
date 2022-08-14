function calc(operator,a,b) {
switch (operator) {
    case 'add': 
        return a+b;
    case 'multi':
        return a*b;
    case 'subtract':
        return a-b;
    default: 
     return "Введите правильную операцию для вычисления"    
}

/*
    if (operator=='add'){
    return a+b;
} if (operator=='multi'){
    return a*b;
} if (operator=='subtract'){
    return a-b;
}
else {
   return "Error"
} 
*/
}
console.log('Результат: '+calc('muttlti',2,3));