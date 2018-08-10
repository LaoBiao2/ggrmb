<template>
    <div class="product-box invest">
        <div class="tab-content">
            <ul>
                <li class="li-1">
                    <span class="span-i"><i></i></span><b class="title-b">专业投资服务</b>
                    <p>金盛金银（GGPM）聘请业界资深分析师组成分析团队，为投资者剖析各项财经新闻和相关数据， 并采取在线直播形式为投资者实时把脉行情波动， 把握投资机遇。另外客服中心为投资者提供24小时在线咨询。</p>
                </li>
                <li class="li-2">
                    <span class="span-i"><i></i></span><b class="title-b">安全交易</b>
                    <p>金盛金银（GGPM）保障客户放心安全在互联网进行各项交易， 采用国际领先网络编码技术，再配合其他专为网上交易而设的保护措施 ，用于对抗各类型网络攻击及黑客行为，防止未经授权的登入和交易。</p>
                </li>
                <li class="li-3">
                    <span class="span-i"><i></i></span><b class="title-b">资金安全便捷</b>
                    <p>金盛金银（GGPM）客户资金与公司运营资金分存于不同银行账户，保证客户资金独立托管。金盛金银（GGPM） 提供多种支付方式，存款即时到账，提现2小时内处理，确保投资者资金安全性与流动性。</p>
                </li>
                <li class="li-4">
                    <span class="span-i"><i></i></span><b class="title-b">隐私安全保护</b>
                    <p>金盛金银（GGPM）采用最新SSL编程密码技术保护客户资料传输免拦截与盗取， 采取银行级别安全保护措施确保投资环境安全。公司严格遵守纽西兰相关隐私保护法律法规， 制定了严谨的客户信息保护流程和保密机制，确保客户隐私信息不被泄露。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'invest'
}
</script>

<style lang="scss">
.product-box.invest {
    width: 886px;
    .tab-content {
        margin-top: 52px;
        ul {
            width: 884px;
            margin: 0 auto;
            font-size: 0;
            li {
                width: 100%;
                border-radius: 10px;
                padding: 18px 24px 18px 27px;
                box-sizing: border-box;
                margin-bottom: 16px;
                display: block;
                transition: all .3s;
                .span-i {
                    width: 125px;
                    height: 118px;
                    border-radius: 10px;
                    float: left;
                    margin-right: 22px;
                    -webkit-box-shadow: 1px 1px 18px #59219f; 
                    -moz-box-shadow: 1px 1px 18px #59219f; 
                    box-shadow: 1px 1px 18px #59219f;
                    background-color: #59219f;
                    i {
                        width: 60px;
                        height: 60px;
                        display: block;
                        margin: 29px auto;
                        background: url(../../../assets/images/about/about_icon.png) 0 -104px no-repeat;
                    }
                }
                b {
                    display: block;
                    font-size: 18px;
                    color: #333;
                    line-height: 22px;
                    margin-bottom: 12px;
                }
                p {
                    // float: left;
                    display: block;
                    line-height: 28px;
                    font-size: 16px;
                    color: #666;
                }
            }
            li.active,
            li:hover {
                -webkit-box-shadow: 1px 1px 18px #b7b7b7; 
                -moz-box-shadow: 1px 1px 18px #b7b7b7; 
                box-shadow: 1px 1px 18px #b7b7b7;
            }
            .li-2 {
                .span-i {
                    background-color: #e98024;
                    -webkit-box-shadow: 1px 1px 18px #e98024; 
                    -moz-box-shadow: 1px 1px 18px #e98024; 
                    box-shadow: 1px 1px 18px #e98024;
                }
                
            }
        }
    }
}
</style>

