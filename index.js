const numberMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
};

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
    // TODO: real code goes here!
    if (time === '0:00') {
        return 'midnight';
    }

    if (time === '12:00') {
        return 'midday';
    }

    const [hours, minutes] = time.split(':');

    if (minutes === '00') {
        return convertNumberToWord(hours) + " o'clock";
    }

    if (minutes === '30') {
        return 'half past ' + convertNumberToWord(hours);
    }

    if (minutes === '15') {
        return 'quarter past ' + convertNumberToWord(hours);
    }

    const nextHour = (Number.parseInt(hours) + 1).toString();

    if (minutes === '45') {
        return 'quarter to ' + convertNumberToWord(nextHour);
    }

    if (minutes < '30') {
        return `${convertNumberToWord(minutes)} past ${convertNumberToWord(
            hours
        )}`;
    }

    const minutesTo = 60 - Number.parseInt(minutes);
    return `${convertNumberToWord(
        minutesTo.toString()
    )} to ${convertNumberToWord(nextHour)}`;
}

function convertNumberToWord(numberString) {
    if (numberString.startsWith('0')) {
        numberString = numberString.replace('0', '');
    }
    return numberMap[numberString] ?? '';
}

module.exports = { convertTimeToWords };
