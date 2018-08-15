<template>
  <div class="research-box news">
    <div class="research-content">
      <ul class="research-ul">
        <li v-for="(newsLi, index) in newsList"  v-if="newsLi.typeId === 4">
          <i class="li-i"></i>
          <router-link to="/research/newsN">
            <b class="title-b">{{newsLi.title}}</b>
          </router-link>
          <p>{{newsLi.content}}</p>
          <div class="li-bottom">
            <span class="type-span type4">{{newsLi.type}}</span>
            <span class="date-span">
              <i></i>{{newsLi.date}}</span>
            <span class="view-span">
              <i></i>{{newsLi.view}}</span>
          </div>
        </li>
      </ul>
      <div class="page-nav">
        <span class="prev-btn page-btn">
          <a href="javascript:;">上一页</a>
        </span>
        <ul class="page-list">
          <li class="active">
            <a href="javascript:;">1</a>
          </li>
          <li>
            <a href="javascript:;">2</a>
          </li>
          <li>
            <a href="javascript:;">3</a>
          </li>
        </ul>
        <span class="next-btn page-btn">
          <a href="javascript:;">下一页</a>
        </span>
        <span class="skip-span">
          到
          <input type="text"> 页
        </span>
        <span class="confirm-btn page-btn">
          <a href="javascript:;">确认</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      newsList: [
        {
          title: '现货黄金跌破1211 下方支撑见1172',
          content: '金盛金融8月14日现货黄金技术面分析：图为黄金的1分钟走势，隔夜价格下跌18.21美元，跌幅达1.5%。图为黄金周线走势，价格跌破长期上升趋势线支撑...',
          typeId: 1,
          type: '行情分析',
          date: '2018/03/29',
          view: '246'
        },
        {
          title: '现货黄金跌破1211 下方支撑见1172',
          content: '金盛金融8月14日现货黄金技术面分析：图为黄金的1分钟走势，隔夜价格下跌18.21美元，跌幅达1.5%。图为黄金周线走势，价格跌破长期上升趋势线支撑...',
          typeId: 2,
          type: '市场动态',
          date: '2018/03/29',
          view: '246'
        },
        {
          title: '现货黄金跌破1211 下方支撑见1172',
          content: '金盛金融8月14日现货黄金技术面分析：图为黄金的1分钟走势，隔夜价格下跌18.21美元，跌幅达1.5%。图为黄金周线走势，价格跌破长期上升趋势线支撑...',
          typeId: 3,
          type: '金银课堂',
          date: '2018/03/29',
          view: '246'
        },
        {
          title: '现货黄金跌破1211 下方支撑见1172',
          content: '金盛金融8月14日现货黄金技术面分析：图为黄金的1分钟走势，隔夜价格下跌18.21美元，跌幅达1.5%。图为黄金周线走势，价格跌破长期上升趋势线支撑...',
          typeId: 4,
          type: '实盘策略',
          date: '2018/03/29',
          view: '246'
        },
        {
          title: '现货黄金跌破1211 下方支撑见1172',
          content: '金盛金融8月14日现货黄金技术面分析：图为黄金的1分钟走势，隔夜价格下跌18.21美元，跌幅达1.5%。图为黄金周线走势，价格跌破长期上升趋势线支撑...',
          typeId: 1,
          type: '行情分析',
          date: '2018/03/29',
          view: '246'
        },
        {
          title: '现货黄金跌破1211 下方支撑见1172',
          content: '金盛金融8月14日现货黄金技术面分析：图为黄金的1分钟走势，隔夜价格下跌18.21美元，跌幅达1.5%。图为黄金周线走势，价格跌破长期上升趋势线支撑...',
          typeId: 1,
          type: '行情分析',
          date: '2018/03/29',
          view: '246'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.research-box.news {
    .research-content {
        margin-top: 52px;
        ul.research-ul {
            width: 805px;
            margin: 16px auto;
            font-size: 0;
            border-bottom: 1px solid #d5d5d5;
            li {
                width: 100%;
                border-radius: 10px;
                padding: 33px 24px 12px 27px;
                box-sizing: border-box;
                margin-bottom: 16px;
                display: block;
                transition: all 0.3s;
                border-top: 1px dashed #dedede;
                .li-i {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    float: left;
                    margin-right: 20px;
                    margin-top: 8px;
                    background-color: #2e8836;
                }
                a {
                    b {
                        display: block;
                        font-size: 20px;
                        color: #333;
                        line-height: 22px;
                        margin-bottom: 13px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                p {
                    // float: left;
                    display: block;
                    line-height: 24px;
                    font-size: 14px;
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .li-bottom {
                    margin-top: 10px;
                    line-height: 20px;
                    .type-span {
                        padding: 0 10px;
                        height: 20px;
                        border-radius: 8px;
                        display: inline-block;
                        text-align: center;
                        font-size: 12px;
                        color: #fff;
                        background-color: #2e8836;
                        margin-right: 20px;
                    }
                    .type2 {
                      background-color: #126fd8;
                    }
                    .type3 {
                      background-color: #e98024;
                    }
                    .type4 {
                      background-color: #e9242d;
                    }
                    span {
                        display: inline-block;
                        font-size: 14px;
                        color: #999;
                        margin-right: 35px;
                        i {
                            width: 14px;
                            height: 14px;
                            display: inline-block;
                            vertical-align: -2px;
                            margin-right: 8px;
                            background: url(../../../assets/images/research/research_icon.png)
                                0 0 no-repeat;
                        }
                    }
                    .view-span {
                        i {
                            width: 18px;
                            background-position-x: -18px;
                        }
                    }
                }
            }
            li:first-child {
                border-top: none;
            }
        }
        .page-nav {
            margin-top: 47px;
            text-align: center;
            line-height: 26px;
            span,
            a {
                height: 26px;
                display: inline-block;
                font-size: 16px;
                color: #999;
                line-height: 26px;
            }
            ul {
                font-size: 0;
                display: inline-block;
                margin: 0 28px;
                vertical-align: -6px;
                li {
                    display: inline-block;
                    margin-left: 16px;
                    a {
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        border: 1px solid #999;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                }
                li:first-child {
                    margin-left: 0;
                }
                li:hover,
                li.active {
                    a {
                        color: #fff;
                        background-color: #2e8836;
                        border-color: #2e8836;
                    }
                }
            }
            span {
                input {
                    width: 46px;
                    height: 24px;
                    border-radius: 10px;
                    border: 1px solid #999;
                    text-align: center;
                    color: #999;
                    font-size: 16px;
                }
            }
            .page-btn {
                width: 66px;
                border: 1px solid #999;
                border-radius: 26px;
            }
            .page-btn:hover {
                a {
                    color: #fff;
                }
                background-color: #2e8836;
                border-color: #2e8836;
            }
            .skip-span {
                margin: 0 30px;
            }
        }
    }
}
</style>

