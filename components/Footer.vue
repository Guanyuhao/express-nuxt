<template>
  <div class="footers">
    <div class="top">
      <div class="wrapPc">
          <el-col :span="4">
            <img src="~/assets/img/footer_logo.png" title="以太雾" >               
          </el-col>
          <el-col :span="13" style="height:1px;"></el-col>
          <el-col :span="7">
             <ul class="share">
              <li>
                <img src="~/assets/img/twitter.png" alt="Twitter">
                <span>Twitter</span>
              </li>
              <li>
                <img src="~/assets/img/telegram.png" alt="TeleGram">
                <span>Telegram</span>           
              </li>
              <li>
                <img src="~/assets/img/slack.png" alt="Slack">
                <span>Slack</span>
              </li>
            </ul>
          </el-col>
      </div>
    </div>
    <div class="copyright">
      <div class="wrapPc">
        <span>Copyright</span>&ensp;|&ensp;<span>hi.org</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footers{
    padding-left: 0;
    padding-right: 0;
    .top{
      height: 78px;
      background-color: #272727;
      box-sizing: border-box;
      padding-top: 18px; 
       
      ul{
        display: flex;
        flex-direction: row;
        padding-top: 5px;
        li{
          flex: 1;
          display: flex;
          flex-direction: row;
          cursor: pointer;
          span{
            line-height: 30px;
            color: #575757;
          }
          img{
            margin-right: 10px; 
            margin-left: 10px;             
          }
        }
      }
    }
    .copyright{
      height: 38px;
      background-color: #222222;
      font-size: 12px;
      line-height: 38px;
      text-align: center;
      color: #ffffff;
            
      span:nth-child(2){
          color: #00b4ff;
      }
      
    }
  }
</style>
