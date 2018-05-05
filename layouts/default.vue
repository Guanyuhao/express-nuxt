<template>
  <div class="default">
    <el-container>

      <el-header height='30px'>

        <MyTop />

      </el-header>

      <el-main> 
         
        <nuxt/>

      </el-main>

      <el-footer height='116px'>

        <MyFooter />

      </el-footer>
      
    </el-container>
  </div>
</template>

<script>

import MyTop from '~/components/Top.vue'

import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyTop, MyFooter
  }
}
</script>

<style>
.el-header,.el-footer{
  padding: 0;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
