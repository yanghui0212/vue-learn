<template>
  <div id='second-component'>
    {{ createTime }}
    <span v-if="login">hello {{userName}}</span>
    <span v-show="login">hello {{userName}}</span>
    <span>{{num}}</span><br>
    <span>{{obj.count}}</span>
    <p>
      <button @click="add">add</button>
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
    },
    //
    beforeCreate() {
      console.log("beforeCreate+++");
    },
    //
    created() {
      console.log("created+++");
    },
    //
    beforeMount() {
      console.log("beforeMount+++");
    },
    //
    mounted() {
      console.log("mounted+++");
    },
    //
    beforeUpdate() {
      console.log("beforeUpdate+++");
    },
    //
    updated() {
      console.log("updated+++");
    },
    //
    activated() {
      console.log("activated+++");
    },
    //
    deactivated() {
      console.log("deactivated+++");
    },
    //
    beforeDestroy() {
      console.log("beforeDestroy+++");
    },
    //
    deactivated() {
      console.log("deactivated+++");
    }
  }
</script>
