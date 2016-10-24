/**
 * Created by yangxu on 16-10-25.
 */
export interface Validator {
    isAcceptable(s: string): boolean;
}