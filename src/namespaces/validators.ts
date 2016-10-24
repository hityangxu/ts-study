/**
 * Created by yangxu on 16-10-25.
 */
namespace prs.Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;

    export class LettersOnlyValidator implements StringValidator {

        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }
}


let validator = new prs.Validation.LettersOnlyValidator();

console.log(validator.isAcceptable("123"));
console.log(validator.isAcceptable("abc"));