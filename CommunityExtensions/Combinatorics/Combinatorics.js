var factorialize = function (num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

numi.addFunction({ "id": "combination", "phrases": "choose, combination, ncr, nCr" }, function(values) {
    if (values[0].double > values[1].double){
	    return { "double": (
        factorialize(values[0].double)/
        (factorialize(values[1].double) *
        (factorialize(values[0].double-values[1].double)))) }
    }
    else if (values[0].double < values[1].double || values[0].double == 0){
        return 0;
    }
    else if (values[0].double == values[1].double || values[1].double == 0){
        return 1;
    }
});


numi.addFunction({ "id": "permutation", "phrases": "perm, permutation" }, function(values) {
    if (values[0].double > values[1].double){
	    return { "double": (
        factorialize(values[0].double)/
        ((factorialize(values[0].double-values[1].double)))) }
    }
    else if (values[0].double < values[1].double || values[0].double == 0){
        return 0;
    }
    else if (values[1].double == 0){
        return 1;
    }
    else {
        return factorialize(values[0].double);
    }
});