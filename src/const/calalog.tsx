interface ICalalogComList {
    type: String,
    name: String,
    subCom: ISubCom[]
}

export const CalalogComList: ICalalogComList[] = [
    {
        type: 'button',
        name: '按钮',
        subCom: [
            {
                parentType: 'button',
                type: 'button-normal',
                name: '普通按钮',
            }
        ],
    },
    {
        type: 'text',
        name: '文本',
        subCom: [
            {
                parentType: 'text',
                type: 'text-cricle',
                name: '文本',
            }
        ],
    },
    {
        type: 'img',
        name: '图片',
        subCom: [
            {
                parentType: 'img',
                type: 'img-normal',
                name: '图片',
            }
        ],
    },
    {
        type: 'nav',
        name: '导航',
        subCom: [
            {
                parentType: 'nav',
                type: 'nav-bottom',
                name: '底部导航',
            }
        ],
    }
]; 