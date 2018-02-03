<template>
  <div id='second-component'>
    {{ createTime }}
    <span v-if="login">hello {{userName}}</span>
    <span v-show="login">hello {{userName}}</span>
    <span>{{num}}</span><br>
    <span>{{obj.count}}</span>
    <p>
      <button @click="add">add1</button>
    </p>
  </div>
</template>

<script>
  var obj = {
    count: 1,
    arr: [1, 2, 3]
  };
  export default {
    data() {
      return {
        login: true,
        userName: 'yangqianghui',
        createTime: new Date(),
        num: 1,
        obj: obj
      }
    },
    methods: {
      add() {
        this.num++;
      }
    }
  }
</script>
