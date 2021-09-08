//Função recursiva, recursividade!!! 

function fatorial(n){ 
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
Cálculo Fatorial

5! = 5 x 4 x 3 x 2 x 1 = 120 
ou 5! = 5 * 4!
ou n! = n * (n-1)!
exceto 1!, pq 1! = 1
*/