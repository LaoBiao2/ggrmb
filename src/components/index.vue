<template>
    <div class="hello">
        <div class="content-top">
            <div class="banner">
                <h2>金盛贵金属代理平台</h2>
                <h4>选择金盛GGFSG 您事业的转折点</h4>
                <div class="a-box">
                    <a :href="serviceUrl" class="a-consult">代理业务咨询</a>
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
                            <li v-for="(val, index) in itemMenu" v-bind:key="index" v-bind:class="{active:index==dataId}" @click="addC(index)">{{val.name}}
                                <i></i>
                            </li>
                        </ul>
                        <a href="javascript:;" class="more-a">More &gt;</a>
                    </div>
                    <div class="nav-content clearfix">
                        <div class="nav-c1" v-for="(v, i) in list" v-bind:key="i" v-if="v.id == dataId">
                            <div class="left-box">
                                <div class="img-box">
                                    <img src="/static/images/index/nav_img.jpg" alt="">
                                </div>
                                <a href="javascript:;">了解详情</a>
                            </div>
                            <ul>
                                <li class="clearfix" v-for="(val, index) in v.items" v-bind:key="index" :class="{active: index == itemsId}" @mouseenter="enter(index)" :data-newsid="val.news_id">
                                    <div class="content-box">
                                        <p class="li-title">
                                            <i></i>{{val.title}}</p>
                                        <p class="li-content">{{val.descriptions}}</p>
                                    </div>
                                    <span class="date">{{val.create_time}}</span>
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
    data() {
        return {
            dataId: '0',
            pageTitle: '',
            pageKeywords: '',
            pageDescription: '',
            serviceUrl: '',
            itemMenu: [],
            itemsId: 0,
            list: [{
                id: 0,
                items: []
            }, {
                id: 1,
                items: []
            }, {
                id: 2,
                items: []
            }, {
                id: 3,
                items: []
            }]
            
        }
    },
    metaInfo() {
        return {
            title: this.pageTitle,
            meta: [
                { vmid: 'keywords', name: 'keywords', content: this.pageKeywords},
                { vmid: 'description', name: 'description', content: this.pageDescription}
            ]
        }
    },
    methods: {
        addC(i) {
            this.dataId = i;
            console.log(this.test);
        },
        enter(index) {
            this.itemsId = index;
        },
        jsonpData() {
            this.$axios.get('/api/index/index_data')
            .then(this.cs);
        },
        cs(res) {
            this.pageTitle = res.data.header.title;
            this.pageKeywords = res.data.header.keywords;
            this.pageDescription = res.data.header.descriptions;
            this.serviceUrl = res.data.base.service_url;
            this.itemMenu = res.data.menu;
            this.list[0].items = res.data.analysis;
            this.list[1].items = res.data.information;
            this.list[2].items = res.data.celue;
            this.list[3].items = res.data.xuetang;
            console.log(res.data);
        }
    },
    mounted() {
        this.jsonpData();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/assets/style/index";
</style>

