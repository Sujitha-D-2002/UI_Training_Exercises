console.log();
console.log("<---------Play with variables-------->");
console.log();
console.log(1+2); 
console.log("apple"+"orange"); 
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1===true);
console.log(2=="2");
console.log();
console.log("<---------Play with Arrays-------->");
console.log();
console.log("<---------11 Players Created-------->");
player=["Hardik Pandya","Virat Kholi","Ashwin","Bhuvaneeshwar","Raina","Bravo","Rohit sharma","KL Ragul","MS Dhoni","Kurnal Pandya","Chahal"];
console.log(player);
console.log();
console.log("<---------First Player Removed-------->");
player.shift();
console.log(player.length);
console.log();
console.log("<---------New Player added-------->");
player.push("Jadeja");
console.log(player.length+" "+player);
console.log();
console.log("<---------Sorted Player List-------->");
console.log(player.sort());
console.log();
console.log("<---------Jersey Number-------->");
var randomNum=3;
player.forEach((v,i) => {
    console.log(v+" "+(i+randomNum));
    randomNum++;
});
console.log("<---------Upper Case-------->");
newPlayer=[];
for(i=0;i<player.length;i++){
    newPlayer[i]=player[i].toUpperCase();
}
console.log(newPlayer);
console.log();
console.log("<---------Play with Function-------->");

console.log();
console.log("<---------Print numbers 1 to 100-------->");
function printNumber(){
    for(i=1;i<=100;i++){
        console.log(i);
    }
}
printNumber();

console.log();
console.log("<---------Display Today Date-------->");
function printDate(){
    var date=new Date();
    var day=date.getDate().toString();
    var month=(date.getMonth()-'0'+1).toString();
    console.log(day.padStart(2, '0')+"-"+month.padStart(2,'0')+"-"+date.getFullYear());
}
printDate();

console.log();
console.log("<---------Display Fahrenheit value-------->");
var fahren=fahrenheit(30);
console.log(fahren+"F");
function fahrenheit(c){
    return (c*1.8)+32;
}

console.log();
console.log("<---------Display average of array-------->");
var arr=average([5,7,30,10,6]);
console.log(arr);
function average(arr){
    sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}

console.log();
console.log("<---------Display Reverse String-------->");
var str=reverseStr("SiriusCDW");
console.log(str);
function reverseStr(s){
    var strConcat="";
    for(i=s.length-1;i>=0;i--){
        strConcat=strConcat+s[i];
    }
    return strConcat;
}