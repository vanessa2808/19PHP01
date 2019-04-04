function printTheMutipleTable() {
var BCC = "<table border=1 width=40%>";
    for(i=1; i<=9; i++){
		BCC += "<tr>";
    		for(j=2; j<=9; j++) BCC += "<td>"+j+"x"+i+"="+(j*i);
    		BCC += "</td>";
		BCC += "</tr>";
    }
BCC += "</table>";
document.getElementById('display').innerHTML = BCC;
}
