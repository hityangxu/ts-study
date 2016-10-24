///<reference path="validators.ts"/>
///<reference path="NumberValidator.ts"/>

/**
 * Created by yangxu on 16-10-25.
 */

let letterValidator = new prs.Validation.LettersOnlyValidator();
console.log(letterValidator.isAcceptable("123"));

import validation = prs.Validation;

let numberValidator = new validation.NumberValidator();
console.log(numberValidator.isAcceptable("321"));