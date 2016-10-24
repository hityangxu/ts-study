///<reference path="validators.ts"/>
/**
 * Created by yangxu on 16-10-25.
 */



namespace prs.Validation {

    const numberRegexp = /^[0-9]+$/;

    export class NumberValidator implements StringValidator {

        isAcceptable(s: string): boolean {
            return numberRegexp.test(s);
        }
    }
}

console.log(new prs.Validation.NumberValidator().isAcceptable("123"));