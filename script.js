var computerNumber = 24
var userNumber

while(userNumber != computerNumber) {
    var userNumber = prompt ('Įveskite skaičių')

    if(computerNumber > userNumber){
        alert('Skaičius turi būti didenis')
    }
    else if(computerNumber < userNumber){
        alert('Skaičius turi būti mažesnis')
    }
    else if(computerNumber == userNumber) {
        alert('Teisingai')
    }
    else if (isNaN(userNumber) || 'userNumber = 0'){
        alert('Įveskite tinkamą skaičių')
    }
}