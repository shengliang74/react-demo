interface ICalalogComList {
    type: String,
    name: String,
    subCom: ISubCom[]
}
interface ISubCom {
    type: String,
    subType: String,
    name: String,
}
export const CalalogComList: ICalalogComList[] = [
    {
        type: 'button',
        name: '按钮',
        subCom: [
            {
                type: 'button',
                subType: 'button-normal',
                name: '普通按钮',
            }
        ],
    },
    {
        type: 'text',
        name: '文本',
        subCom: [
            {
                type: 'text',
                subType: 'text-jump',
                name: '跳链',
            }
        ],
    },
    {
        type: 'img',
        name: '图片',
        subCom: [],
    },
    {
        type: 'headerFooter',
        name: '头低',
        subCom: [
            {
                type: 'headerFooter',
                subType: 'headerFooter-header',
                name: '吸头',
            }, {
                type: 'headerFooter',
                subType: 'headerFooter-footer',
                name: '吸地',
            }
        ],
    }
]; 