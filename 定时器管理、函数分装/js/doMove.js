/**
 * Created by ThankGod on 2017/8/28.
 */
function doMove(obj,attr,dir,target,endFn){

    dir = parseInt(getStyle(obj,attr)) < target ? dir : -dir;
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        //速度
        var speed = parseInt(getStyle(obj,attr)) + dir;

        if (speed > target && dir > 0 || speed < target && dir < 0){
            speed = target;
        }

        obj.style[attr] = speed + 'px';

        if( speed === target){
            clearInterval(obj.timer);
            endFn && endFn();
        }
    },10);
}

function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}