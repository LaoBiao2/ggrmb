<template>
    <div class="product-box rule">
        <div class="table-box">
            <table>
                <tr>
                    <td>产品</td>
                    <td>伦敦金</td>
                    <td>伦敦银</td>
                </tr>
                <tr>
                    <td>合约单位（每手）</td>
                    <td>100盎司</td>
                    <td>2500盎司</td>
                </tr>
                <tr>
                    <td>最低价格波幅</td>
                    <td>伦敦金0.1美元</td>
                    <td>伦敦银0.01美元</td>
                </tr>
                <tr>
                    <td>点 差</td>
                    <td>0.5美元</td>
                    <td>0.04美元</td>
                </tr>
                <tr>
                    <td>最小交易量</td>
                    <td colspan="2">每张单最少交易0.1手</td>
                </tr>
                <tr>
                    <td>最大交易量</td>
                    <td colspan="2">每张单最多交易10手</td>
                </tr>
                <tr>
                    <td>交易编码费</td>
                    <td colspan="2">建仓及平仓交易编码费用全免</td>
                </tr>
                <tr>
                    <td>交易保证金 </td>
                    <td colspan="2">1000美元/手</td>
                </tr>
                <tr>
                    <td>维持保证金</td>
                    <td colspan="2">平日1000美元/手，周末1000美元/手（周末调整时间请见公告）</td>
                </tr>
                <tr>
                    <td>持仓过夜利息</td>
                    <td colspan="2">买入：2.25% ；卖出：0.75%</td>
                </tr>
                <tr>
                    <td>交易时间</td>
                    <td colspan="2">
                        <p>
                            北京时间周一上午6:31至周六凌晨3:30（夏令期间） 周一上午7:01至周六凌晨4:00（冬令期间）
                        <br/>期间美国夏令时凌晨5点到6点（美国冬令早上6点到7点）为结算时间，无法进行交易。
                        <br/>结算时间若有零星价格波动，不影响交易单盈亏。结算时间过后夏令6:01分(冬令7:01分)开市交易。
                        </p>
                    </td>
                </tr>
            </table>
        </div>
        <div class="remark-box">
            <p class="remark">*备注</p>
            <ul>
                <li>
                    <i></i>
                    <p>所有非美元存款，均会被兑换成美元。取款时，本公司将按照固定汇率为客户兑换相应币种。</p>
                </li>
                <li>
                    <i></i>
                    <p>本公司对短线交易并没有特别限制。只要是正常的交易，短线交易可获接受。</p>
                </li>
                <li>
                    <i></i>
                    <p>客户与本公司发生纠纷时，本公司保留公布客户的交易历史记录及事务记录以澄清自身的权力。</p>
                </li>
                <li>
                    <i></i>
                    <p>客户明白及同意，交易平台是依照自身的执行机制处理订单，当同一时间， 多张订单都到达有效价位时，执行顺序并非按照到价先后，交易单的建立顺序也会是判断因素之一。 凡牵涉平台处理同时到价交易单的顺序问题， 客户同意以交易平台的处理机制为准，金盛金银对交易平台的处理机制有最终解释权。</p>
                </li>
                <li>
                    <i></i>
                    <p>挂单与止损/获利距离现价的设定距离在不同时段可能有不同设置。金盛金银保留随时更改设定距离的权利而不需事前通知， 所有设定距离一概以交易平台系统实际设定为准。</p>
                </li>
                <li>
                    <i></i>
                    <p>在触发挂单价之后经过的止损或获利价位，交易系统会视为到达止损或获利。 若在挂单触发价之前经过止损或获利价位， 因挂单还未触发，不视为到达止损或获利价位。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'rule'
}
</script>

<style lang="scss">
.product-box.rule {
        width: 880px;
        .table-box {
            width: 800px;
            /* height: 800px; */
            text-align: center;
            border-radius: 5px;
            overflow: hidden;
            border: 1px solid #b1b1b1;
            table {
                width: 100%;
                table-layout:fixed;
                tr:first-child {
                    background-color: #0e2752;
                    border-top: none;
                    td {
                        color: #fff;
                    }
                }
                tr {
                    border-top: 1px solid #b1b1b1;
                    td {
                        width: 33.3%;
                        height: 60px;
                        line-height: 26px;
                        border-left: 1px solid #b1b1b1;
                        font-size: 16px;
                        color: #666;
                    }
                    td:first-child {
                        border-left: none;
                    }
                }
                tr:last-child {
                    td:last-child {
                        text-align: left;
                        p {
                            font-size: 16px;
                            line-height: 26px;
                            width: 464px;
                            margin: 18px auto;
                        }
                    }
                }
            }
        }
        .remark-box {
            width: 800px;
            text-align: left;
            margin-top: 22px;
            font-size: 16px;
            color: #333;
            ul {
                margin: 10px 0 0 38px;
                li {
                    width: 100%;
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 24px;
                    display: block;
                    i {
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background-color: #2e8836;
                        float: left;
                        margin: 10px 18px 0 0;
                    }
                    p {
                        // float: left;
                        display: block;
                        line-height: 24px;
                        padding-left: 23px;
                        box-sizing: border-box;
                    }
                }
            }
        }
    }
</style>

