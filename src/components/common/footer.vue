<template>
  	<div class="footer-box">
		<div class="footer">
			<div class="content">
				<ul class="link-ul">
					<li>金盛荣誉</li>
					<li>合作机构</li>
					<li>友情链接</li>
					<li>关于金盛</li>
					<li>市场动态</li>
					<li>实盘策略</li>
					<li>软件下载</li>
					<li>产品介绍</li>
					<li>马上咨询</li>
					<li>申请代理</li>
				</ul>
				<ul class="honor">
					<i class="honor-i"></i>
					<li class="li-1">
						<i></i>
						<span>贵金属业最佳<br/>交易平台大奖</span>
					</li>
					<li class="li-2">
						<i></i>
						<span>贵金属业最佳<br/>交易平台大奖</span>
					</li>
					<li class="li-3">
						<i></i>
						<span>贵金属业最佳<br/>交易平台大奖</span>
					</li>
					<li class="li-4">
						<i></i>
						<span>贵金属业最佳<br/>交易平台大奖</span>
					</li>
					<li class="li-5">
						<i></i>
						<span>贵金属业最佳<br/>交易平台大奖</span>
					</li>
					<li class="li-6">
						<i></i>
						<span>贵金属业最佳<br/>交易平台大奖</span>
					</li>
				</ul>
				<div class="bottom-box clearfix">
					<div class="left-box">
						<ul>
							<li class="li-1"><a href="javascript:;"></a></li>
							<li class="li-2"><a href="javascript:;"></a></li>
							<li class="li-3"><a href="javascript:;"></a></li>
							<li class="li-4"><a href="javascript:;"></a></li>
							<li class="li-5"><a href="javascript:;"></a></li>
						</ul>
						<span class="copyright">Copyright 2017-2018 © GGFSG 金盛金融</span>
						<span class="tip">投资有风险，选择需谨慎，预期或测算收益不等于实际收益。 </span>
					</div>
					<div class="right-box">
						<div>
							<span class="span-1"></span>
							<span class="span-2"></span>
							<span class="span-3"></span>
						</div>
						<a href="javascript:;" class="service"><i></i>在线客服</a>
						<span class="tel">客服热线：400-009-2727</span>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
    name: "vueFooter",
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
.footer {
    text-align: center;
    background-color: #2a3052;
    ul {
        li {
            display: inline-block;
        }
    }
    ul.link-ul {
        li {
            font-size: 16px;
            color: #fff;
            margin-left: 58px;
            line-height: 68px;
        }
        li:first-child {
            margin-left: 0;
        }
    }
    ul.honor {
        width: 100%;
        height: 95px;
        border: 1px solid #fff;
        border-radius: 10px;
        position: relative;
        font-size: 0;
        display: table;
        margin-bottom: 36px;
        i.honor-i {
            position: absolute;
            width: 0;
            height: 0;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #fff transparent;
            top: -10px;
            left: 26px;
        }
        li {
            width: 16.6%;
            height: 95px;
            display: inline-block;
            display: table-cell;
            vertical-align: middle;
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            i {
                width: 71px;
                height: 82px;
                display: inline-block;
                vertical-align: middle;
                background: url(../../assets/images/common_icon.png) 0 9px no-repeat;
            }
            span {
                display: inline-block;
                vertical-align: middle;
            }
        }
        .li-2 i {
            width: 56px;
            background-position-x: -105px;
        }
        .li-3 i {
            width: 67px;
            background-position-x: -197px;
        }
        .li-4 i {
            width: 68px;
            background-position-y: -112px;
        }
        .li-5 i {
            width: 53px;
            background-position: -106px -112px;
        }
        .li-6 i {
            width: 68px;
            background-position: -197px -112px;
        }
    }
    .bottom-box {
        padding-bottom: 30px;
        .left-box {
            float: left;
            text-align: left;
            ul {
                font-size: 0;
                margin-bottom: 16px;
                li {
                    width: 26px;
                    height: 26px;
                    display: inline-block;
                    margin-right: 10px;
                    a {
                        width: 100%;
                        height: 100%;
                        background: url(../../assets/images/common_icon.png) -10px -217px no-repeat;
                        display: inline-block;
                    }
                }
                .li-2 a {
                    background-position-x: -46px;
                }
                .li-3 a {
                    background-position-x: -81px;
                }
                .li-4 a {
                    background-position-x: -116px;
                }
                .li-5 a {
                    background-position-x: -152px;
                }
            }
            span {
                font-size: 14px;
                color: #fff;
                line-height: 1;
                display: block;
            }
            span.copyright {
                margin-bottom: 16px;
            }
        }
        .right-box {
            float: right;
            div {
                margin-bottom: 20px;
                span {
                    width: 91px;
                    height: 41px;
                    display: inline-block;
                    background: url(../../assets/images/common_icon.png) -10px -270px no-repeat;
                }
                .span-2 {
                    width: 114px;
                    margin-left: 34px;
                    background-position-x: -135px;
                }
                .span-3 {
                    width: 108px;
                    margin-left: 25px;
                    background-position-x: -274px;
                }
            }
            a.service {
                width: 95px;
                height: 28px;
                line-height: 28px;
                // display: inline-block;
                margin-right: 48px;
                font-size: 14px;
                color: #fff;
                background-color: #e98024;
                border-radius: 5px;
                float: right;
            }
            span.tel {
                font-size: 14px;
                color: #fff;
                line-height: 28px;
            }
        }
    }
}
</style>
