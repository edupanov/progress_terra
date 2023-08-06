// дабвляет к каждому слову в строке рандомную цифру
export const addRandomDigitAfterEachWord = (inputString: string): string => {
    let words = inputString.split('-');
    if (words.length === 1) {
        words = words.join('').split(' ');
    }
    const resultArray: string[] = [];
    for (const word of words) {
        const randomDigit = Math.floor(Math.random() * 10);
        resultArray.push(word + randomDigit);
    }
    return resultArray.join(' ');
};