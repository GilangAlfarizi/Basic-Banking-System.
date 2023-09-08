// let saldo = 1000;

// document.getElementById('saldo').textContent = saldo

// const updateSaldo = (saldo) => {
//     document.getElementById('saldo').textContent = saldo;
// }

// const tambahSaldo = () => {
//     let input = prompt("Masukan jumlah yang ingin ditambahkan")
//     saldo = saldo + parseInt(input);
//     updateSaldo(saldo)
// }

// const kurangiSaldo = () => {
//     let input = prompt("Masukan jumlah yang ingin dikurangi")

//     if(saldo < input){
//         window.alert('Saldo anda kosong')
//     } else {
//         saldo = saldo - parseInt(input);
//         updateSaldo(saldo)
//     }
// }


class BankAccount {
    constructor (nama, saldo) {
        this.nama = nama
        this.saldo = saldo
    }


    deposit(amount) {
        if (amount > 0) {
            setTimeout(() =>  {
                this.saldo += amount
                console.log(`Berhasil menambahkan ${amount} ke akun ${this.nama}. Saldo: ${this.saldo}`) 
            }, 1000)
        } else {
            console.log('jumlah yang dimasukkan harus lebih besar dari 0')
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.saldo) {
            setTimeout(() => {
                this.saldo -= amount
                console.log(`Berhasil mengurangi ${amount} ke akun ${this.nama}. Saldo: ${this.saldo}`)
            }, 1000)
        } else {
            console.log(`Berhasil mengurangi ${amount} ke akun ${this.nama}. Saldo: ${this.saldo}`)
        }
    }

    checkBalance() {
        console.log(`Saldo akun ${this.nama}: ${this.saldo}`);
    }
}




