
// page load animation

let page_load = document.getElementById("page_load");

window.addEventListener('DOMContentLoaded', function () {
    page_load.style.opacity = "1";
});
window.addEventListener('load', function () {
    page_load.style.opacity = "0";
});

// get to top btn show

window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 200) {
        document.getElementById("get_to_top_btn").style.cssText = "bottom: 5%;"
    }
    else {
        document.getElementById("get_to_top_btn").style.cssText = "bottom: -100%;"
    }
});


// responsive nav bar menu

let menu_btn = document.getElementById("menu_icon");
let menu = document.getElementById("menu");

let menu_btn_click = 0;
menu_btn.addEventListener("click", function () {
    if (menu_btn_click === 0) {
        document.getElementById("menu_slider").style.cssText = "left: 0%;";
        menu.classList.add("menu_lines");
        menu_btn_click++;
    }
    else {
        document.getElementById("menu_slider").style.cssText = "left: -100%;";
        menu.classList.remove("menu_lines");
        menu_btn_click = 0;
    }
});


// header nav link current pointer

let nav_pointer = document.querySelectorAll("nav ul li a");
console.log(nav_pointer)
nav_pointer.forEach(pointer => {
    pointer.addEventListener("click", function () {
        remove_link_class();
        this.classList.add("nav_pointer");
    })
})

function remove_link_class() {
    nav_pointer.forEach(pointer => {
        pointer.classList.remove("nav_pointer");
    })
}



// responsive nav link current pointer

let res_nav_pointer = document.querySelectorAll(".res_nav ul li a");

res_nav_pointer.forEach(res_pointer => {
    res_pointer.addEventListener("click", function () {
        res_remove_link_class();
        this.classList.add("res_nav_pointer");
    })
});

function res_remove_link_class() {
    res_nav_pointer.forEach(res_pointer => {
        res_pointer.classList.remove("res_nav_pointer");
    }
)}


// header social icon pop up

function pop_social_icons() {
    let header_social = document.getElementById("show_social_box");
    let header_social_icon = document.querySelectorAll(".header_social li");

    header_social.classList.toggle("show_header_social");

    header_social_icon.forEach(social => {
        social.classList.toggle("show_header_social_icon");
    });
    document.getElementById("header_share_icon").classList.toggle("share_icon");
}


// header scroll shadow 

window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 85) {
        document.getElementById("header").style.cssText = "box-shadow: 0px 0px 10px 0px rgb(220, 220, 220);"
    }
    else {
        document.getElementById("header").style.cssText = "box-shadow: 0px 0px 0px 0px rgb(220, 220, 220);"
    }
});



// projects show or hide 

let project_btn = document.getElementsByClassName("project_btn");
let project = document.getElementsByClassName("project");

function all_pro_show() {

    let all_class_add = [0, 1, 2, 3, 4, 5, 6, 7];
    all_class_add.forEach(pro => {
        project[pro].classList.add("show_all_pro");
    });

    project_btn[0].style.cssText = "color: rgb(26, 167, 255);"

    let pro_btn_style = [1, 2, 3, 4];
    pro_btn_style.forEach(btn => {
        project_btn[btn].style.cssText = "color: rgb(186, 186, 186);"
    });
}

function all_mobile_pro_show() {

    let all_class_add = [1, 5];
    all_class_add.forEach(pro => {
        project[pro].classList.add("show_all_pro");
    });

    let all_class_remove = [0, 2, 3, 4, 6, 7];
    all_class_remove.forEach(pro => {
        project[pro].classList.remove("show_all_pro");
    });

    project_btn[1].style.cssText = "color: rgb(26, 167, 255);"

    let pro_btn_style = [0, 2, 3, 4];
    pro_btn_style.forEach(btn => {
        project_btn[btn].style.cssText = "color: rgb(186, 186, 186);"
    });
}

function all_cus_pro_show() {

    let all_class_add = [2, 6];
    all_class_add.forEach(pro => {
        project[pro].classList.add("show_all_pro");
    });

    let all_class_remove = [0, 1, 3, 4, 5, 7];
    all_class_remove.forEach(pro => {
        project[pro].classList.remove("show_all_pro");
    });

    project_btn[2].style.cssText = "color: rgb(26, 167, 255);"

    let pro_btn_style = [0, 1, 3, 4];
    pro_btn_style.forEach(btn => {
        project_btn[btn].style.cssText = "color: rgb(186, 186, 186);"
    });
}

function all_test_pro_show() {

    let all_class_add = [3, 4, 7];
    all_class_add.forEach(pro => {
        project[pro].classList.add("show_all_pro");
    });

    let all_class_remove = [0, 1, 2, 5, 6];
    all_class_remove.forEach(pro => {
        project[pro].classList.remove("show_all_pro");
    });

    project_btn[3].style.cssText = "color: rgb(26, 167, 255);"

    let pro_btn_style = [0, 1, 2, 4];
    pro_btn_style.forEach(btn => {
        project_btn[btn].style.cssText = "color: rgb(186, 186, 186);"
    });
}

function all_ui_pro_show() {

    let all_class_add = [0];
    all_class_add.forEach(pro => {
        project[pro].classList.add("show_all_pro");
    });

    let all_class_remove = [1, 2, 3, 4, 5, 6, 7];
    all_class_remove.forEach(pro => {
        project[pro].classList.remove("show_all_pro");
    });

    project_btn[4].style.cssText = "color: rgb(26, 167, 255);"

    let pro_btn_style = [0, 1, 2, 3];
    pro_btn_style.forEach(btn => {
        project_btn[btn].style.cssText = "color: rgb(186, 186, 186);"
    });
}

// responsive project nav 

let res_project_nav_con = document.getElementById("project_nav_btn");
project_nav_btn_count = 0;
res_project_nav_con.addEventListener("click", function () {
    if (project_nav_btn_count === 0) {
        document.getElementById("res_project_nav").classList.toggle("show_res_pro_nav");
        document.getElementById("pro_filter_arrow").classList.toggle("rot_pro_btn_icon");
    }
});

let res_project_nav_btn = document.querySelectorAll("#res_project_nav li");

res_project_nav_btn.forEach(pro_btn => {
    pro_btn.addEventListener("click", function () {
        remove_pro_btn_class();
        this.classList.add("current_pro");
    })
})

function remove_pro_btn_class() {
    res_project_nav_btn.forEach(pro_btn => {
        pro_btn.classList.remove("current_pro");
    })
}


// year of exp counter
let yoe = document.getElementById("year_of_exp");
let count = 0;
function yoe_counter() {
    count++;
    if (count >= 10) {
        count = 10;
    }
    yoe.textContent = count;
}
setInterval(yoe_counter, 100);

// exp number counter

let exp_num = document.getElementsByClassName("exp_num");
let exp_num_count1 = 0;
let exp_num_count2 = 0;
let exp_num_count3 = 0;
let exp_num_count4 = 0;

function app_dev() {
    exp_num_count1++;
    if (exp_num_count1 >= 2) {
        exp_num_count1 = 2;
    }
    exp_num[0].textContent = exp_num_count1;
}
function consultants() {
    exp_num_count2++;
    if (exp_num_count2 >= 40) {
        exp_num_count2 = 40;
    }
    exp_num[1].textContent = exp_num_count2;
}
function awards() {
    exp_num_count3++;
    if (exp_num_count3 >= 12) {
        exp_num_count3 = 12;
    }
    exp_num[2].textContent = exp_num_count3;
}
function employee() {
    exp_num_count4++;
    if (exp_num_count4 >= 160) {
        exp_num_count4 = 160;
    }
    exp_num[3].textContent = exp_num_count4;
}

const exp_counter_timing = setInterval(() => {
    app_dev();
    consultants();
    awards();
    employee();
}, 10);



// get more num change 

let get_more_detail = document.getElementsByClassName("get_more_detail");
let get_more_num = document.getElementsByClassName("get_more_num");

if (get_more_num.length > 0) {
    get_more_num[0].addEventListener("click", function () {

        get_more_detail[0].classList.add("get_more_detail_show");
        get_more_num[0].style.cssText = "color: rgb(26, 167, 255);"
        get_more_num[0].classList.add("get_more_num_slider");

        let remove_get_more = [1, 2, 3];
        remove_get_more.forEach(remove => {
            get_more_detail[remove].classList.remove("get_more_detail_show");
            get_more_num[remove].style.cssText = "color: rgb(186, 186, 186);"
            get_more_num[remove].classList.remove("get_more_num_slider");
        });
    });

    get_more_num[1].addEventListener("click", function () {

        get_more_detail[1].classList.add("get_more_detail_show");
        get_more_num[1].style.cssText = "color: rgb(26, 167, 255);"
        get_more_num[1].classList.add("get_more_num_slider");

        let remove_get_more = [0, 2, 3];
        remove_get_more.forEach(remove => {
            get_more_detail[remove].classList.remove("get_more_detail_show");
            get_more_num[remove].style.cssText = "color: rgb(186, 186, 186);"
            get_more_num[remove].classList.remove("get_more_num_slider");
        });
    });

    get_more_num[2].addEventListener("click", function () {

        get_more_detail[2].classList.add("get_more_detail_show");
        get_more_num[2].style.cssText = "color: rgb(26, 167, 255);"
        get_more_num[2].classList.add("get_more_num_slider");

        let remove_get_more = [0, 1, 3];
        remove_get_more.forEach(remove => {
            get_more_detail[remove].classList.remove("get_more_detail_show");
            get_more_num[remove].style.cssText = "color: rgb(186, 186, 186);"
            get_more_num[remove].classList.remove("get_more_num_slider");
        });
    });

    get_more_num[3].addEventListener("click", function () {

        get_more_detail[3].classList.add("get_more_detail_show");
        get_more_num[3].style.cssText = "color: rgb(26, 167, 255);"
        get_more_num[3].classList.add("get_more_num_slider");

        let remove_get_more = [0, 1, 2];
        remove_get_more.forEach(remove => {
            get_more_detail[remove].classList.remove("get_more_detail_show");
            get_more_num[remove].style.cssText = "color: rgb(186, 186, 186);";
            get_more_num[remove].classList.remove("get_more_num_slider");
        });
    });
}


// contact section form focus, input, blur validation

let input_text = document.querySelectorAll(".input_text");
let input_label = document.querySelectorAll(".input_box label");
let err_msg = document.querySelectorAll(".input_box p");

input_text[0].addEventListener("focus", function () {
    input_label[0].style.cssText = "opacity: 0;"
    input_text[0].classList.remove("error");
    err_msg[0].innerHTML = "";
});

input_text[0].addEventListener("blur", function () {
    if (input_text[0].value.length === 0) {
        input_label[0].style.cssText = "opacity: 1;"
        input_text[0].classList.add("error");
        err_msg[0].innerHTML = "The text field is required";
    }

    else if (input_text[0].value.length < 5) {
        err_msg[0].innerHTML = "Enter minimum 5 character";
        input_text[0].classList.add("error");
    }

});

input_text[1].addEventListener("focus", function () {
    input_label[1].style.cssText = "opacity: 0;"
    input_text[1].classList.remove("error");
    err_msg[1].innerHTML = "";
});

input_text[1].addEventListener("input", function () {

    if (!input_text[1].value.includes("@gmail.com")) {
        err_msg[1].innerHTML = "This is not a valid email";
        input_text[1].classList.add("error");
    }

    else if (input_text[1].value.includes("@gmail.com")) {
        err_msg[1].innerHTML = "";
        input_text[1].classList.remove("error");
    }
});

input_text[1].addEventListener("blur", function () {
    if (input_text[1].value.length === 0) {
        input_label[1].style.cssText = "opacity: 1;"
        input_text[1].classList.add("error");
        err_msg[1].innerHTML = "The text field is required";
    }
});

input_text[2].addEventListener("focus", function () {
    input_label[2].style.cssText = "opacity: 0;"
    input_text[2].classList.remove("error");
    err_msg[2].innerHTML = "";
});

input_text[2].addEventListener("input", function () {

    if (isNaN(input_text[2].value)) {
        err_msg[2].innerHTML = "This is not a number";
        input_text[2].classList.add("error");
    }

    else if (!isNaN(input_text[2].value)) {
        err_msg[2].innerHTML = "";
        input_text[2].classList.remove("error");
    }
})

input_text[2].addEventListener("blur", function () {
    if (input_text[2].value.length === 0) {
        input_label[2].style.cssText = "opacity: 1;"
        input_text[2].classList.add("error");
        err_msg[2].innerHTML = "Only number are required";
    }

    else if (!isNaN(input_text[2].value) && input_text[2].value.length < 10) {
        err_msg[2].innerHTML = "Enter minimum 10 digit";
        input_text[2].classList.add("error");
    }
});

input_text[3].addEventListener("focus", function () {
    input_label[3].style.cssText = "opacity: 0;"
    input_text[3].classList.remove("error");
    err_msg[3].innerHTML = "";
});

input_text[3].addEventListener("blur", function () {
    if (input_text[3].value.length === 0) {
        input_label[3].style.cssText = "opacity: 1;"
        input_text[3].classList.add("error");
        err_msg[3].innerHTML = "The text field is required";
    }

    else if (input_text[3].value.length < 10) {
        err_msg[3].innerHTML = "Enter minimum 10 character";
        input_text[3].classList.add("error");
    }
})

// form submit condition

function validateForm() {
    let isValid = true;

    if (input_text[0].value.length === 0) {
        input_label[0].style.cssText = "opacity: 1;"
        input_text[0].classList.add("error");
        err_msg[0].innerHTML = "The text field is required";
        isValid = false;
    }

    if (input_text[0].value.length >= 1 && input_text[0].value.length < 5) {
        err_msg[0].innerHTML = "Enter minimum 5 character";
        input_text[0].classList.add("error");
        isValid = false;
    }

    if (!input_text[1].value.includes("@gmail.com")) {
        err_msg[1].innerHTML = "This is not a valid email";
        input_text[1].classList.add("error");
        isValid = false;
    }

    if (input_text[1].value.length === 0) {
        input_label[1].style.cssText = "opacity: 1;"
        input_text[1].classList.add("error");
        err_msg[1].innerHTML = "The text field is required";
        isValid = false;
    }

    if (isNaN(input_text[2].value)) {
        err_msg[2].innerHTML = "This is not a number";
        input_text[2].classList.add("error");
        isValid = false;
    }

    if (!isNaN(input_text[2].value) && input_text[2].value.length < 10) {
        err_msg[2].innerHTML = "Enter minimum 10 digit";
        input_text[2].classList.add("error");
        isValid = false;
    }

    if (input_text[2].value.length === 0) {
        input_label[2].style.cssText = "opacity: 1;"
        input_text[2].classList.add("error");
        err_msg[2].innerHTML = "Only number are required";
        isValid = false;
    }

    if (input_text[3].value.length < 10) {
        err_msg[3].innerHTML = "Enter minimum 10 character";
        input_text[3].classList.add("error");
        isValid = false;
    }

    if (input_text[3].value.length === 0) {
        input_label[3].style.cssText = "opacity: 1;"
        input_text[3].classList.add("error");
        err_msg[3].innerHTML = "The text field is required";
        isValid = false;
    }

    return isValid;
}


