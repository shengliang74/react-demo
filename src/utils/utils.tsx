import {util} from "@shengliang74/utils";

// 计算 pageX pageY 相对DOMReact的位置信息用于上移还是下移
export const getInDomData = function (DOMReact:IDOMReact, pageX:number, pageY:number): IDomPlaceInfo {
    const obj:IDomPlaceInfo = {
        isInDom: false, // 是否在DOMReact Dom里
        isInsideTop: false, // DOMReact dom 里面的上半部
        isInsideBottom: false, // DOMReact dom 里面的下半部
        isOutsideTop: false, // DOMReact dom 上面
        isOutsideBottom: false // DOMReact dom 下面
    }

    if(!(DOMReact instanceof Object)){
        return obj
    }

    const xFlag = pageX > DOMReact.left && pageX < DOMReact.right;
    const yFlag = pageY > DOMReact.top && pageY < DOMReact.bottom;
    const yCenter = (DOMReact.bottom - DOMReact.top)/2+DOMReact.top;
    obj.isInDom = xFlag && yFlag;
    obj.isOutsideTop = pageY < DOMReact.top;
    obj.isInsideTop = pageY >= DOMReact.top && pageY < yCenter;
    obj.isInsideBottom = pageY >= yCenter && pageY < DOMReact.bottom;
    obj.isOutsideBottom = pageY >= DOMReact.bottom;
    return obj
}

// 获取一个随机数
export const getRandomNumber = function ():string {
    return `${new Date().getTime()}-${Math.floor(Math.random()*10000)}`
}