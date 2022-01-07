const calculator ={
    plus: function (a,b) {
        return a+b;
    },

    minus: function(a,b){
        return a-b;
    }
};

const plusResult = calculator.plus(2, 4);
const minusResult = calculator.minus(plusResult, 1);