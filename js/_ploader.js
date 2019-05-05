let movingBox = document.getElementById("_b1");
let box_1 = document.getElementById("_b2");
let box_2 = document.getElementById("_b3");
let box_3 = document.getElementById("_b4");
let box_4 = document.getElementById("_b5");
let forwardAnim = true;
function animate(){
    let leftvalue = Math.round(getComputedStyle(movingBox,null).getPropertyValue("left").split("px")[0]);
    if(forwardAnim){
        if(leftvalue == 92){
            forwardAnim = false;
        }
        if(leftvalue > 5){
            box_1.classList.add("_bb");
            box_1.classList.remove("_bf");
        }
        if(leftvalue >= 26 ){
            box_2.classList.add("_bb");
            box_2.classList.remove("_bf");
        }
        if(leftvalue >=51){
            box_3.classList.add("_bb");
            box_3.classList.remove("_bf");
        }
        if(leftvalue >= 76){
            box_4.classList.add("_bb");
            box_4.classList.remove("_bf");
        }
    }else{
        if(leftvalue == 0){
            forwardAnim = true;
        }
        if(leftvalue <= 86){
            box_4.classList.add("_bf");
            box_4.classList.remove("_bb");
        }
        if(leftvalue <= 65){
            box_3.classList.add("_bf");
            box_3.classList.remove("_bb");
        }
        if(leftvalue <=40){
            box_2.classList.add("_bf");
            box_2.classList.remove("_bb");
        }
        if(leftvalue <= 17){
            box_1.classList.add("_bf");
            box_1.classList.remove("_bb");
        }
    }
    return requestAnimationFrame(animate);
}
animate();