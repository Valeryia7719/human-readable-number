module.exports = function toReadable (number) {
    let Units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let Donzens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let Result = '';
    if ( number >= 0 && number < 20 ) {
        Result = Units[number];
    } 
    else if ( number >= 20 && number < 100 ) {
        number = String(number);
        let donzen = number[0];
        Result += Donzens[+donzen-1];
        let unit = number[1];
        if (unit == 0) {
            Result += '';
        } else {
        Result += " " + Units[unit];
        }
    }
    else if ( number >= 100 && number <= 999 ) {
        number = String(number);
        Result += Units[number[0]] + ' hundred'
        let donzen = number[1];
        if (donzen == 0) {
            Result += '';
        }
        else if (donzen == 1) { 
            let second = String(number[1]) + String(number[2]);
            Result +=' ' + Units[+second];
        } 
        else {
        Result += ' ' + Donzens[+donzen-1];
        }
        let unit = number[2];
        if (unit == 0 || donzen == 1 ) {
            Result += '';
        }
        else {
            Result += " " + Units[unit];
        }        
    }
    return Result;
}
