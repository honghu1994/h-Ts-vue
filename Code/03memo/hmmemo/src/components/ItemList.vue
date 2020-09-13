<template>
    <div id="memos" class="container">
        <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item"/>
    </div>
</template>

<script lang='ts'>
//1.导入 vue
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import MemoItem from './MemoItem.vue'


//2.编写组件类
@Component({
    components:{
        MemoItem
    }
})
export default class ItemList extends Vue {
  //a.声明 笔记数组（方便在 当前 组件中调用）
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;
  constructor(){
      super();
      window.console.log(this.memoArr.length);
  }

  filterMemo(){
      if(this.$store.state.filterCateId==-1){
          return this.memoArr;
      }else{
          return this.memoArr.filter((item:any)=>{
              return item.categoryId == this.$store.state.filterCateId;
          });
      }
  }
}
</script>