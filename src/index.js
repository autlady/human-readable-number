module.exports = function toReadable (number) {
    const strings = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    if (number >=0 && number < 20) {
        return strings[number];
    }

    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    if (number >= 20 && number < 100) {
        const numString = number.toString();
        const dozen = +numString[0];
        const ones = +numString[1];
        if (numString[1] === "0") return dozens[dozen];
        return dozens[dozen] + " " + strings[ones];
    }

    if (number >= 100 && number < 1000) {
        const num = number.toString();
        const first = num[0];
        const second = num[1];
        const third = num[2];
        const sum = +(second + third);
        if (number >= 100 && number < 1000) {
            if (second === "0" && third === "0") {
                return strings[first] + " hundred";
            } else if (second === "0") {
                return strings[first] + " hundred " + strings[third];
            } else if (second === "1") {
                return strings[first] + " hundred " + strings[sum];
            } else if (third === "0") {
                return strings[first] + " hundred " + dozens[second];
            } else {
                return strings[first] + " hundred " + dozens[second] + " " + strings[third];
            } 
        }
    }
}



