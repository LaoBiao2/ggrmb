<template>
    <div class="hello">
        <div class="content-top">
            <div class="banner">
                <h2>金盛贵金属代理平台</h2>
                <h4>选择金盛GGFSG 您事业的转折点</h4>
                <div class="a-box">
                    <a href="javascript:;" class="a-consult">代理业务咨询</a>
                    <a href="javascript:;" class="a-account">开立免费账户</a>
                </div>
            </div>
            <div class="box b1">
                <div class="content">
                    <h5 class="title">我们的优势</h5>
                    <ul>
                        <li class="li-1">
                            <i></i>
                            <b>实力雄厚</b>
                            <p>FSP&FSA<br/>双重监管</p>
                        </li>
                        <li class="li-2">
                            <i></i>
                            <b>强大平台</b>
                            <p>MT4交易平台<br/>支持多种客户端</p>
                        </li>
                        <li class="li-3">
                            <i></i>
                            <b>成本特低</b>
                            <p>只需100美元<br/>即可交易</p>
                        </li>
                        <li class="li-4">
                            <i></i>
                            <b>特快存取</b>
                            <p>特快网上存取<br/>2小时到账</p>
                        </li>
                        <li class="li-5">
                            <i></i>
                            <b>投资保障</b>
                            <p>银行资金监管<br/>保障财富安全</p>
                        </li>
                        <li class="li-6">
                            <i></i>
                            <b>专业客服</b>
                            <p>24小时专业客服<br/>快速解决</p>
                        </li>
                    </ul>
                    <i class="split"></i>
                </div>
            </div>
            <div class="box b2">
                <div class="content">
                    <h5 class="title">行情资讯</h5>
                    <div class="nav-top clearfix">
                        <ul>
                            <li v-for="(val, index) in items" v-bind:key="index" v-bind:class="{active:index==dataId}" @click="addC(index)">{{val}}
                                <i></i>
                            </li>
                            <!-- <li>市场动态<i></i></li>
							<li>实盘策略<i></i></li>
							<li>金银课堂<i></i></li> -->
                        </ul>
                        <a href="javascript:;" class="more-a">More &gt;</a>
                    </div>
                    <div class="nav-content clearfix">
                        <div class="nav-c1">
                            <div class="left-box">
                                <div class="img-box">
                                    <img src="/static/images/index/nav_img.jpg" alt="">
                                </div>
                                <a href="javascript:;">了解详情</a>
                            </div>
                            <ul>
                                <li class="active clearfix">
                                    <div class="content-box">
                                        <p class="li-title">
                                            <i></i>市场静待欧银决议 黄金短线调整</p>
                                        <p class="li-content">周三黄金开盘，价格小幅上涨，日内整体波动相对狭窄。上 周特朗普连续两个交易日对美联储表达不满情...</p>
                                    </div>
                                    <span class="date">2018-07-25</span>
                                </li>
                                <li class="clearfix">
                                    <div class="content-box">
                                        <p class="li-title">
                                            <i></i>市场静待欧银决议 黄金短线调整</p>
                                        <p class="li-content">周三黄金开盘，价格小幅上涨，日内整体波动相对狭窄。上 周特朗普连续两个交易日对美联储表达不满情...</p>
                                    </div>
                                    <span class="date">2018-07-25</span>
                                </li>
                                <li class="clearfix">
                                    <div class="content-box">
                                        <p class="li-title">
                                            <i></i>市场静待欧银决议 黄金短线调整</p>
                                        <p class="li-content">周三黄金开盘，价格小幅上涨，日内整体波动相对狭窄。上 周特朗普连续两个交易日对美联储表达不满情...</p>
                                    </div>
                                    <span class="date">2018-07-25</span>
                                </li>
                                <li class="clearfix">
                                    <div class="content-box">
                                        <p class="li-title">
                                            <i></i>市场静待欧银决议 黄金短线调整</p>
                                        <p class="li-content">周三黄金开盘，价格小幅上涨，日内整体波动相对狭窄。上 周特朗普连续两个交易日对美联储表达不满情...</p>
                                    </div>
                                    <span class="date">2018-07-25</span>
                                </li>
                                <li class="clearfix">
                                    <div class="content-box">
                                        <p class="li-title">
                                            <i></i>市场静待欧银决议 黄金短线调整</p>
                                        <p class="li-content">周三黄金开盘，价格小幅上涨，日内整体波动相对狭窄。上 周特朗普连续两个交易日对美联储表达不满情...</p>
                                    </div>
                                    <span class="date">2018-07-25</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box b3">
                <div class="content">
                    <h5 class="title">MT4平台优势</h5>
                    <span class="title2">国际主流 覆盖全球90%交易量</span>
                    <div class="content-box clearfix">
                        <ul class="left-ul">
                            <li>
                                <p class="li-title">
                                    <i></i>功能齐全
                                </p>
                                <p class="li-content">即时报价，界面清晰直观；画图工具，技术指标方便易用止 损、止盈、锁仓风控功能齐全</p>
                            </li>
                            <li>
                                <p class="li-title">
                                    <i></i>操作简单
                                </p>
                                <p class="li-content">多客户端下载，方便快捷，无论何时何地都可轻松交易</p>
                            </li>
                            <li>
                                <p class="li-title">
                                    <i></i>下单灵活
                                </p>
                                <p class="li-content">快速下单，单击0.2秒成交；平台稳定，交易安全无忧</p>
                            </li>
                        </ul>
                        <ul class="right-ul">
                            <li class="li-1">
                                <i></i>
                                <span>Windows</span>
                            </li>
                            <li class="li-2">
                                <i></i>
                                <span>iPhone</span>
                            </li>
                            <li class="li-3">
                                <i></i>
                                <span>Android</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    metaInfo: {
        title: 'Index',
        meta: [{
            name: "keywords",
            content: "Index黄金暴跌,黄金多头"
        }, {
            name: "description",
            content: "Index黄金本周开局就失守1200美元关键心理关口，周二多头试图重夺该关口，但斩戟而归，周三相继失守。"
        }]
    },
    data() {
        return {
            dataId: '0',
            items: ['行情分析', '市场动态', '实盘策略', '金银课堂']
        };
    },
    methods: {
        addC(i) {
            this.dataId = i;
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/assets/style/index";
</style>
