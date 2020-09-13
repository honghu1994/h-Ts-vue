<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{memo.title}}</h5>
        <ul class="tools">
          <li class="edit" @click="showEdit"></li>
          <li class="delete" @click="doDel"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{memo.createTime}}</span>
        <span class="category">分类: {{$store.state.aHelper.getCategoryName(memo.categoryId) }}</span>
      </h6>
      <div class="content">
        <div class="text">{{memo.content}}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  //删除方法
  doDel(): void {
    //1.问一问是否确认要删除
    if (!window.confirm(`确认要删除【${this.memo.title}】的笔记吗？`)) return;

    //2.如果确认，则调用 actionHelper中的删除方法
    this.$store.state.aHelper.remove(this.memo.id);
  }

  //打开 编辑框，显示要修改的笔记数据
  showEdit(): void {
    //1.创建副本
    let newMemo = JSON.parse( JSON.stringify(this.memo) );
    //2.传递 给 transMemo
    this.$store.commit('showEditMemo',newMemo);
  }
}
</script>