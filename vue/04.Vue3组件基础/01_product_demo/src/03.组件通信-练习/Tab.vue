<template>
  <div class="tab">
    <div class="tab-item" v-for="title, index in titles" :key='title' @click='itemClick(index)'
      :class="{ chouseStyle: index == chouseIndex, }">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => [

      ],
    }
  },
  emits: [
    'tabClick',
  ]
  ,
  data() {
    return {
      chouseIndex: -1
    }
  },
  methods: {
    itemClick(index) {
      this.chouseIndex = index;
      this.$emit('tabClick',index);
    }
  }

}
</script>
<style scoped>
.chouseStyle {
  background-color: orange;
}

.tab {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
}

.tab-item {
  flex: 1;
}</style>
