let tab_3 = document.querySelector("#tabs-3");
let table = document.querySelector(".table");
for (temp in locations) { 
    console.log(temp);
    let row=document.createElement("div");
    row.setAttribute("class","row");
    let col_1=document.createElement("div");
    col_1.setAttribute("class","col-1");
    let image=document.createElement("img");
    image.setAttribute("src","assests/images/260-2608718_american-flag-in-a-circle-hd-png-download.png")
    col_1.append(image);
    let col_2=document.createElement("div");
    col_2.setAttribute("class","col-2");
    let para_1=document.createElement("p");
    para_1.innerText=locations[temp].country;
    col_2.append(para_1);
    let col_3=document.createElement("div");
    col_3.setAttribute("class","col-3");
    let para_2=document.createElement("p");
    para_2.innerText=locations[temp].state;
    col_3.append(para_2);
    let col_4=document.createElement("div");
    col_4.setAttribute("class","col-4");
    let para_3=document.createElement("p");
    para_3.innerText=locations[temp].contact;
    col_4.append(para_3);
    row.append(col_1);
    row.append(col_2);
    row.append(col_3);
    row.append(col_4);
    table.append(row);
    if(temp%2==0){
        row.style.backgroundColor="#eeeeee";
    }
    else{
        row.style.backgroundColor="#f2d9f7";
    }
}