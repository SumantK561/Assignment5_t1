function addNumber(){
	
			var fn = parseInt(document.getElementById("num1").value);
            var sn = parseInt(document.getElementById("num2").value);
            var res = fn + sn;
            document.getElementById("txtres").value = res;
}


function subNumber(){
	
			var fn = parseInt(document.getElementById("num3").value);
            var sn = parseInt(document.getElementById("num4").value);
            var res = fn - sn;
            document.getElementById("txtres1").value = res;
}

function mulNumber(){
	
			var fn = parseInt(document.getElementById("num5").value);
            var sn = parseInt(document.getElementById("num6").value);
            var res = fn * sn;
            document.getElementById("txtres2").value = res;
}

function divNumber(){
	
			var fn = parseInt(document.getElementById("num7").value);
            var sn = parseInt(document.getElementById("num8").value);
            var res = fn / sn;
            document.getElementById("txtres3").value = res;
}