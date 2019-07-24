<template>
  <div>
    <div class="wrap">
      <div class="wrap-flex">
        <div class="box title">
          <p class="line">x 一一一一一一一一一ㄧx</p>
          <div>
            <h1>九九乘法表</h1>
            <p>multiplication chart</p>
          </div>

          <p class="line">x 一一一一一一一一一ㄧx</p>
        </div>
        <div class="box" v-for="j in 8">
          <ul>
            <div class="big_math">{{ j + 1 }}</div>
            <li v-for="i in 9">{{ j+1 }} x {{ i }} = {{ (j+1) * i}}</li>
          </ul>
        </div>
      </div>

      <footer>
          <p class="cpy-text">Copyright © 2019 HexSchool. All rights reserved.</p>
      </footer>
    </div>

    <!-- 
         <ul>
           <li v-for="todo in todos">{{ todo.text }}</li>
         </ul> 
    !-->
  </div>
</template>

<script>
export default {
  name: "multiplication",
  data() {
    return {
      // todos: [
      //   { text: "学习 JavaScript" },
      //   { text: "学习 Vue" },
      //   { text: "整个牛项目" }
      // ]
    };
  }
};
</script>


 <style lang="scss" scoped>
* {
  font-family: Helvetica;
  margin: 0;
}

.wrap {
  width: 1280px;
  height: 1372px;
  background: #f0f0f0;
}
.wrap-flex {
  display: flex;
  flex-wrap: wrap;
  padding: 80px 85px;
  justify-content: space-between;
  align-content: space-between;
  width: 1113px;
  height: 1180px;
}
.box {
  width: 350px;
  height: 366px;
  border-radius: 100px 0px 30px 0px;
  background: #ffffff;
}

.big_math {
  color: #2eb738;
  font-size: 8rem;
  text-shadow: 2px 2px #fff, 6px 5px #f0f0f0;
  height: 128px;
  line-height: 110px;
}
.box ul {
  // margin: 0;
  // padding: 64px 40px;
  padding: 0;
  width: 100%;
  height: 238px;
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 64px 0;
}
.box ul li {
  list-style: none;
  color: #2eb738;
  width: 118.08px;
  font-size: 1.5rem;
}
.title {
  display: flex;
  color: #2eb738;
  background: transparent;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  h1,
  p {
    margin: 0;
  }
  h1 {
    width: 280px;
    font-size: 54px;
  }
  p {
    width: 274px;
    font-size: 33px;
  }
  .line {
    font-size: 24px;
  }
}

footer {
height: 34px;
background-color: #2eb738;
  p {
    color: #ffffff;
    float: right;
    font-size: 16px;
    padding: 8px 15px 0px 0px;
  }
}

</style>
