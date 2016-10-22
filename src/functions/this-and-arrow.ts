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