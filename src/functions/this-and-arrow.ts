/**
 * Created by yangxu on 16-10-23.
 */

let user = {
    name: 'Yang',

    getNameFunc: function() {
        return () => {
            console.log(this.name);
        }
    }
};

let func = user.getNameFunc();
func();

let doNotUseThis = function(this:void) {
    // console.log(this.name);
};

doNotUseThis();

let printName = function(this: void, name: string) {
    console.log(name);
};

printName("Yang");