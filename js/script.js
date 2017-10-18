if(typeof String.prototype.repeater !== "function") {

    String.prototype.repeater = function(x) {

        var res = "";

        for (var i = 0; i < x; i++) {
            res += this;
        }

        return res;
    };
}

var stringTestowy = "Hejka :) ";
console.log(stringTestowy.repeater(4));