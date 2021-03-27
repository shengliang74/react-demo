interface ISubCom {
    type: string,
    parentType: string,
    name: string,
}

// 组件树baseProps
interface IBaseProps {
    children: Any
}

// 计算dom位置的必要数据 getBounding返回的
interface IDOMReact {
    left: number,
    right: number,
    top: number,
    bottom: number
}

// target dom相对于当前dom位置信息
interface IDomPlaceInfo {
    isInDom: boolean
    isInsideTop: boolean,
    isInsideBottom: boolean,
    isOutsideTop: boolean,
    isOutsideBottom: boolean
}