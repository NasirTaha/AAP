var a;
a = 3;
console.log(a);
function fun1() {
    //console.log(a+1);


}
function btnFirstButton_OnClick() {


    var temValue;
 var flage;
    flage = null;
    temValue = typeof(null) + "<br>"
        + typeof (flage) + "<br>"
    + Boolean(flage);
    document.getElementById("demo").innerHTML = temValue;
}
fun1();

console.log(a);
