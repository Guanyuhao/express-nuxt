<template>
  <div class="footer">
    <div class="top">
      <div class="wrapPc">
        <div class="logo">
          <img src="~/assets/img/footer_logo.png" title="以太雾" >
          <ul class="share clear_fix">
            <li>
              <img src="~/assets/img/twitter.png" alt="Twitter">
              <span>Twitter</span>
            </li>
            <li>
              <img src="~/assets/img/telegram.png" alt="TeleGram">            
              Telegram
            </li>
            <li>
              <img src="~/assets/img/slack.png" alt="Slack">            
              Slack
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    <div class="copyright">
      <div class="wrapPc">
        <span>Copyright</span>|<span>hi</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer{
    padding-left: 0;
    padding-right: 0;
    
    .top{
      height: 78px;
      background-color: #272727;
      line-height: 78px;
      .logo{
        padding-top: 18px;
      }
      ul{
        float: right;
       
        li{
          float: left;
          img{
            float: left;
          }
          span{
            vertical-align: top;
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
