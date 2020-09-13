import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
import Category from '@/model/CateEnum';

class ActionHelper {
    //1.负责数据处理 -------------------------------------------------------
    dataHelper: DataHelper = new DataHelper('memoData', 'id');
    //1.1 笔记数组
    memoList!: Array<ItemData>;

    // 构造函数：读取本地数据，并设置给 成员变量 memoList
    constructor() {
        //读取本地数据，将 笔记数组 保存 到 this.memoList 变量中
        this.memoList = this.readData();
    }

    // 读取本地数据，并返回 ItemData类型数组
    readData(): Array<ItemData> {
        //1.读取 本地 的 Object数组 - dataHelper
        let arrObj = this.dataHelper.readData();

        //2.将 Object数组 转成 ItemData数组
        let arrItem = arrObj.map((ele: any) => {

            let item: ItemData = new ItemData();

            item.id = ele.id;
            item.categoryId = ele.categoryId;
            item.title = ele.title;
            item.content = ele.content;
            item.createTime = ele.createTime;

            return item;
        });

        //3.返回itemData数组
        return arrItem;
    }

    getCategoryName(cateId: Category): string {
        const arrNames = ['工作', '生活', '学习'];
        return arrNames[cateId];
    }

    //2.负责业务处理 -------------------------------------------------------
    //2.1 新增笔记
    add(item: ItemData): number {
        //a.保存到本地 dataHelper.addData ，会返回 生成的 id值
        item.id = this.dataHelper.addData(item);
        //b.将笔记添加到 笔记数组中
        this.memoList.push(item);
        //c.将 笔记数组 重新保存到 本地
        this.dataHelper.saveData(this.memoList);
        //d.返回 新笔记的 id
        return item.id;
    }

    //2.2 修改笔记
    edit(item: ItemData): void {
        //a.找出 数组中 id 相同 的对象
        let editItem: ItemData | undefined = this.memoList.find((ele) => {
            return ele.id == item.id;
        });
        //b.修改 对象的值：将 传入对象item各个属性的值 覆盖设置 给 数组中找到对象的属性
        if (editItem) {
            editItem.categoryId = item.categoryId;
            editItem.title = item.title;
            editItem.content = item.content;

            //c.将更新后的 数组 重新保存到 本地localstorage
            this.dataHelper.saveData(this.memoList);
        }
    }

    //2.3 删除笔记
    remove(id: number): void {
        //a.根据id 找出 要删除的 对象 在数组中的 下标
        let index: number = this.memoList.findIndex((ele) => {
            return ele.id === id;
        })

        //b.根据下标 调用 数组.splice方法来删除对象
        if (index > -1) {
            this.memoList.splice(index, 1);
            //c.将删除对象后的 数组重新保存回 localstorage
            this.dataHelper.saveData(this.memoList);
        }
    }
}

export default ActionHelper;