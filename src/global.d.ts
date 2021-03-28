
// 组件树baseProps
declare interface IBaseProps {
    children: Any
}

// 计算dom位置的必要数据 getBounding返回的
declare interface IDOMReact {
    left: number,
    right: number,
    top: number,
    bottom: number
}

// target dom相对于当前dom位置信息
declare interface IDomPlaceInfo {
    isInDom: boolean
    isInsideTop: boolean,
    isInsideBottom: boolean,
    isOutsideTop: boolean,
    isOutsideBottom: boolean
}