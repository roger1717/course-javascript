// closures


// funcion para crear cuentas

function crearcuentabancaria(saldoinicial) {
    let saldo = saldoinicial;

    return {
        depositar(cantidad) {
            saldo += cantidad;
            return `depositado $${cantidad}, saldo actual: {saldo}`
        },
        retirar(cantidad) {
            if (cantidad > saldo) {
                return 'fondos insuficientes';
            }
            saldo -= cantidad;
            return `retirado $ ${cantidad} . saldo actual : $${saldo}`
        },
        consultarsaldo(){
            return `saldo : $${saldo}.`
        }
    }
}

const micuenta = crearcuentabancaria(1000);
console.log(micuenta.consultarsaldo());
console.log(micuenta.depositar(500)); 
console.log(micuenta.retirar(200)); 