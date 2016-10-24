import {Validator} from "./validator";
/**
 * Created by yangxu on 16-10-25.
 */

export const numberReg = /^[0-9]+$/;

export class NumberValidator implements Validator {

    isAcceptable(s: string): boolean {
        return numberReg.test(s);
    }
}

export {NumberValidator as NumberValidatorAlias}