//Object for Shapes
let shapes = {
    circle: {
        user: "2. Enter Radius",
        name: "Circle",
        size: 5,
        measure: "RADIUS",
        side: "r",
        area_formula: "3.14 * r * r",
        perimeter_formula: "2 * 3.14 * r",
        area: function (size) {
            return 3.14 * (size * size);
        },
        perimeter: function (size) {
            return 2 * (3.14 * size);
        },
    },
    square: {
        user: "2. Enter Size",
        name: "Square",
        size: 5,
        measure: "SIZE",
        side: "s",
        area_formula: "s * s",
        perimeter_formula: "4 * s",
        area: function (size) {
            return size * size;
        },
        perimeter: function (size) {
            return (4 * size);
        },
    },
    traingle: {
        user: "2. Enter Side (Base and Height)",
        name: "Equilateral Traingle",
        size: 5,
        measure: "SIZE",
        side: "s",
        area_formula: "0.433 * s * s",
        perimeter_formula: "3 * s",
        area: function (size) {
            return 3.14 * (size * size);
        },
        perimeter: function (size) {
            return 2 * (3.14 * size);
        },
    },
    // pentagon: {
    //     user: "2. Enter Side",
    //     name: "Pentagon",
    //     size: 5,
    //     measure: "SIZE",
    //     side: "s a",
    //     apothem:4,
    //     area_formula: "(s * a)/2",
    //     perimeter_formula: "5 * s",
    //     area: function (size) {
    //         return (5 * size)/2;
    //     },
    //     perimeter: function (size) {
    //         return 5 * size;
    //     },
   // }
};

//Step 1 get started
let shapes_given = ["circle", "square", "traingle"];
let step_1 = document.querySelector(".step-1");
let step_2 = document.querySelector(".step-2");
let step_3 = document.querySelector(".step-3");
firstStep();
function firstStep() {
    step_1.style.display = "block";
    step_2.style.display = "none";
    step_3.style.display = "none";
    let next_btn = document.querySelector("#next");
    next_btn.style.display = "none";
    document.getElementById("shapes").addEventListener("click", (event) => {
        //storing the value of clicked shape
        localStorage.setItem("isClicked", event.target.id);
        //Displaying Next button after clicking shape and tick icon
        next_btn.style.display = "block";
        if (event.target.id == localStorage.getItem("isClicked")) {
            if (event.target.id == "circle") {
                let clicked_shape = document.querySelector("." + localStorage.getItem("isClicked") + ">.tick");
                clicked_shape.style.display = "block";
                let unclicked_shape_1 = document.querySelector(".square>.tick");
                console.log(unclicked_shape_1);
                unclicked_shape_1.style.display = "none";
                let unclicked_shape_2 = document.querySelector(".traingle>.tick-t");
                console.log(unclicked_shape_1);
                unclicked_shape_2.style.display = "none";
                // let unclicked_shape_3 = document.querySelector(".pentagon>.tick");
                // console.log(unclicked_shape_3);
                // unclicked_shape_3.style.display = "none";
            }
            else if (event.target.id == "square") {
                let clicked_shape = document.querySelector("." + localStorage.getItem("isClicked") + ">.tick");
                clicked_shape.style.display = "block";
                let unclicked_shape_1 = document.querySelector(".circle>.tick");
                unclicked_shape_1.style.display = "none";
                let unclicked_shape_2 = document.querySelector(".traingle>.tick-t");
                unclicked_shape_2.style.display = "none";
                // let unclicked_shape_3 = document.querySelector(".pentagon>.tick");
                // console.log(unclicked_shape_3);
                // unclicked_shape_3.style.display = "none";
            }
            else if (event.target.id == "traingle") {
                console.log(event.target.id);
                let clicked_shape = document.querySelector("." + localStorage.getItem("isClicked") + ">.tick-t");
                clicked_shape.style.display = "block";
                let unclicked_shape_1 = document.querySelector(".square>.tick");
                unclicked_shape_1.style.display = "none";
                let unclicked_shape_2 = document.querySelector(".circle>.tick");
                unclicked_shape_2.style.display = "none";
                // let unclicked_shape_3 = document.querySelector(".pentagon>.tick");
                // console.log(unclicked_shape_3);
                // unclicked_shape_3.style.display = "none";
            }
            // else if (event.target.id == "pentagon") {
            //     let clicked_shape = document.querySelector("." + localStorage.getItem("isClicked") + ">.tick");
            //     clicked_shape.style.display = "block";
            //     let unclicked_shape_1 = document.querySelector(".square>.tick");
            //     unclicked_shape_1.style.display = "none";
            //     let unclicked_shape_2 = document.querySelector(".circle>.tick");
            //     unclicked_shape_2.style.display = "none";
            //     let unclicked_shape_3 = document.querySelector(".traingle>.tick-t");
            //     unclicked_shape_3.style.display = "none";
            // }
        }
        document.getElementById("next").addEventListener("click", () => {
            next();
        });
        console.log(localStorage.getItem("isClicked"));
    });
}
function next() {
    console.log("Next function called");
    step_2.style.display = "block";
    step_1.style.display = "none";
    step_3.style.display = "none";
    document.getElementById("myForm").reset();
    for (temp in shapes) {
        if (temp == localStorage.getItem("isClicked")) {
            localStorage.setItem("selected_shape_details", JSON.stringify(shapes[temp]));
            console.log("Object key:" + JSON.stringify(shapes[temp]));
            //Step-2 Get Started
            console.log("Step 2 get started");
            let shape_details = JSON.parse(localStorage.getItem("selected_shape_details"));
            console.log(shape_details.user);
            let heading = document.getElementById("radius");
            heading.innerText = shape_details.user;
            document.getElementById("calculate").addEventListener("click", () => {
                calculate();
            });
        }
    }

}
function calculate() {
    //Onclick calculate button
    localStorage.setItem("size", document.getElementById("size").value);
    console.log(localStorage.getItem("size"));
    console.log("Step 3 get started");
    step_1.style.display = "none";
    step_2.style.display = "none";
    step_3.style.display = "block";
    for (temp in shapes) {
        if (temp == localStorage.getItem("isClicked")) {
            if (!(localStorage.getItem("size") == "")) {
                shapes[temp].size = localStorage.getItem("size");
            }
            localStorage.setItem('area', shapes[temp].area.toString());
            localStorage.setItem('perimeter', shapes[temp].perimeter.toString());
            localStorage.setItem("selected_shape_details", JSON.stringify(shapes[temp]));
        }
    }
    //To add content to HTML using JS
    let shape_details = JSON.parse(localStorage.getItem("selected_shape_details"));
    let shape = document.querySelector("#get-shape");
    shape.setAttribute("class", localStorage.getItem("isClicked"));
    let shape_name = document.querySelector(".s-name");
    shape_name.innerText = shape_details.name;
    let row_1_col_1 = document.querySelector(".row-1>.col-1");
    row_1_col_1.innerText = shape_details.measure;
    let row_1_col_2 = document.querySelector(".row-1>.col-2");
    row_1_col_2.innerText = shape_details.side;
    let row_1_col_3 = document.querySelector(".row-1>.col-3");
    row_1_col_3.innerText = shape_details.size + " cm";
    let row_2_col_2 = document.querySelector(".row-2>.col-2");
    row_2_col_2.innerText = shape_details.area_formula;
    let row_2_col_3 = document.querySelector(".row-2>.col-3");
    let area = localStorage.getItem('area');
    let area_value = eval('(' + area + ')');
    row_2_col_3.innerText = area_value(shape_details.size).toFixed(2) + " sq cm";
    let row_3_col_2 = document.querySelector(".row-3>.col-2");
    row_3_col_2.innerText = shape_details.perimeter_formula;
    let row_3_col_3 = document.querySelector(".row-3>.col-3");
    let perimeter = localStorage.getItem('perimeter');
    let perimeter_value = eval('(' + perimeter + ')');
    row_3_col_3.innerText = perimeter_value(shape_details.size).toFixed(2) + " cm";
}

document.getElementById("start").addEventListener("click", () => {
    location.reload();
});

function validate() {
    let size = document.getElementById("values").value;
    console.log(size);
    return false;
}