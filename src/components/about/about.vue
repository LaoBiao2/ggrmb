<template>
    <div>
      <div class="content-top">
        <div class="banner">
            <div class="content">
                <div class="txt">
                    <h4>关于金盛</h4>
                </div>                
            </div>            
        </div>
        <div class="content about clearfix">
            <div class="fl">
               <component v-bind:is="type"></component>
            </div>
            <div class="fr">
                <div class="btn_box">
                    <a href="" target="_blank" class="real"><span>免费</span>开立真实账户</a>
                    <a href="" target="_blank" class="demo">申请模拟账户</a>
                </div>
                <div class="type_box">
                    <router-link to="/about/introduce" class="clearfix introduce"><b></b><span>品牌介绍</span><i></i></router-link>
                    <router-link to="/about/protocol" class="clearfix protocol"><b></b><span>协议声明</span><i></i></router-link>
                    <router-link to="/about/notice" class="clearfix notice"><b></b><span>网站公告</span><i></i></router-link>
                    <router-link to="/about/invest" class="clearfix invest"><b></b><span>投资保障</span><i></i></router-link>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>


<script>
import Introduce from "./components/introduce.vue";
import Protocol from "./components/protocol.vue";
import Notice from "./components/notice.vue";
import Invest from "./components/invest.vue";
export default {
	name: "about",
	data() {
		return {
		type: this.$route.params.type
		};
	},
	components: {
		introduce: Introduce,
		protocol: Protocol,
		notice: Notice,
		invest: Invest
	},

	watch: {
		$route(to, form) {
		this.type = to.params.type;
		}
	}
};
</script>

<style lang="scss">
body {
  	background: #f5f7f9;
}
.banner {
	height: 256px;
	background: url(../../assets/images/about/banner.jpg) no-repeat;
	.txt {
		display: table-cell;
		height: 256px;
		vertical-align: middle;
		h4 {
		font-size: 28px;
		color: #ffffff;
		}
	}
}
//
.about {
  margin-top: 50px;
  padding-bottom: 50px;
  .fr {
    width: 285px;
    .btn_box {
      box-sizing: border-box;
      padding: 20px 18px 2px 18px;
      background: #ffffff;
      margin-bottom: 13px;
      border-radius: 5px;
      a {
        position: relative;
        display: block;
        margin-bottom: 20px;
        height: 56px;
        line-height: 56px;
        font-size: 18px;
        text-align: center;
        border-radius: 5px;
        border: 2px solid transparent;
      }
      .real {
        color: #ffffff;
        background: #e98024;
        overflow: hidden;
        span {
          position: absolute;
          left: -17px;
          top: 9px;
          display: block;
          font-size: 12px;
          height: 28px;
          width: 92px;
          color: #e98024;
          line-height: 28px;
          transform: rotate(-45deg);
          background: #ffffff;
        }
      }
      .demo {
        color: #2e8836;
        border-color: #2e8836;
      }
    }
    .type_box {
      background: #ffffff;
      a {
        display: block;
        padding: 15px 0;
      }
      b {
        float: left;
        width: 10px;
        height: 18px;
        margin: 5px 30px 0 50px;
        background: url(../../assets/images/about/about_icon.png) 0 -75px;
      }
      i {
        float: right;
        width: 29px;
        height: 29px;
        margin-right: 55px;
        background: url(../../assets/images/about/about_icon.png);
      }
      span {
        float: left;
        font-size: 18px;
        margin-top: 5px;
        color: #333333;
      }
      .introduce i {
        background-position-x: -137px;
        background-position-y: -36px;
      }
      .protocol i {
        background-position-x: -179px;
        background-position-y: -36px;
      }
      .notice i {
        background-position-x: -219px;
        background-position-y: -36px;
      }
      .invest i {
        background-position-x: -259px;
        background-position-y: -36px;
      }
      a.router-link-active i, a:hover i {
        background-position-y: 0px;
      }
      a.router-link-active b, a:hover b {
        background-position-x: -21px;
      }
      a.router-link-active span, a:hover span {
        color: #2e8836;
      }
    }
  }
  .about-box {
    width: 915px;
  }
}
</style>
