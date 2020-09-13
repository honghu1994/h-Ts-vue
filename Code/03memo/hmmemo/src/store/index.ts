//1.导入 vuex 和 vue
import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper';
import ItemData from '@/model/ItemData';

//2.注册 vuex 到 vue里面
Vue.use(Vuex);

//3.创建 vuex 的仓库对象 state -共享对象和数据 ， mutations-共享方法
let store = new Vuex.Store({
    state: {
        title: '黑马程序员深圳大前端，前度无量~~~',
        isShow:false,// 控制 是否显示 编辑框
        transMemo:null,// 传递数据的桥梁
        aHelper:new ActionHelper(),
        filterCateId:-1,// 筛选分类id
    },
    mutations: {
        showEditMemo(state:any,editMemo:any){
            //1.将传递来的 editMemo 设置给 transMemo
            state.transMemo = editMemo;
            //2.显示编辑框
            state.isShow = true;
        }
    }
});

//4.导入 仓库对象
export default store;