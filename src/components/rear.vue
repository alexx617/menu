<template>
	<div class="bodyBox">
		<el-row :gutter="40">
			<el-col :span="6">
				<div class="listBox cold" @click="gopage()">
					<h3>{{list1.title}}
						<span>( 打包加收一元 )</span>
					</h3>
					<ul>
						<li class="list">
							<div v-for="(item,i) in list1.list" :key="item">
								<p>{{i}}
									<b class="hot" v-if="item.hot">热卖</b>
								</p>
								<span class="money">{{item.value}}元</span>
							</div>
						</li>
					</ul>
					<div class="img" v-if="list1.img">
						<div v-for="item in list1.img" :key="item.title">
							<img v-bind:src='item.url' />
							<p>{{item.title}}</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="listBox cold">
					<ul>
						<li class="list">
							<div v-for="(item,i) in list2.list" :key="item">
								<p>{{i}}
									<b class="hot" v-if="item.hot">热卖</b>
								</p>
								<span class="money">{{item.value}}元</span>
							</div>
						</li>
					</ul>
					<div class="img" v-if="list2.img">
						<div v-for="item in list2.img" :key="item.title">
							<img v-bind:src='item.url' />
							<p>{{item.title}}</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="listBox">
					<h3>{{list3.title}}
						<span>( 套餐②,③打包加收两元 ; 其他套餐打包加收一元 )</span>
					</h3>
					<ul>
						<li class="list">
							<div>
								<p>① : 乌冬面 / 车仔面 / 公仔面
									<span class="jia">+</span> 饮料</p>
								<span class="money">12元</span>
								<!-- <b class="hot">热卖</b> -->
							</div>
							<div>
								<p>② : 乌冬面 / 车仔面 / 公仔面
									<span class="jia">+</span> 薯条 / 鸡块 / 薯饼
									<span class="jia">+</span> 饮料
								</p>
								<span class="money">20元</span>
								<!-- <b class="hot">热卖</b> -->
							</div>
							<div>
								<p>③ : 乌冬面 / 车仔面 / 公仔面
									<span class="jia">+</span> 奥尔良鸡扒
									<span class="jia">+</span> 饮料
								</p>
								<span class="money">24元</span>
								<!-- <b class="hot">热卖</b> -->
							</div>

							<div>
								<p>④ : 奥尔良鸡扒
									<span class="jia">+</span> 饮料
								</p>
								<span class="money">16元</span>
								<b class="hot">热卖</b>
							</div>
							<div>
								<p>⑤ : 鱼蛋 / 牛肉丸
									<span class="jia">+</span> 奶香爆米花
									<span class="jia">+</span> 饮料
								</p>
								<span class="money">16元</span>
								<!-- <b class="hot">热卖</b> -->
							</div>
							<div>
								<p>⑥ : 鱼蛋 / 牛肉丸
									<span class="jia">+</span> 薯条 / 鸡块
									<span class="jia">+</span> 饮料
								</p>
								<span class="money">17元</span>
								<!-- <b class="hot">热卖</b> -->
							</div>
							<div>
								<p>⑦ : 鱼蛋 / 牛肉丸
									<span class="jia">+</span> 凉拌青瓜 / 虾饼 / 薯饼
									<span class="jia">+</span> 饮料
								</p>
								<span class="money">19元</span>
								<!-- <b class="hot">热卖</b> -->
							</div>
						</li>
					</ul>
					<div class="drink">
						<b>饮料任选一款: 冰茶 / 雪柠 / 柠乐 / 奶茶</b>
					</div>

					<div class="eatImg">
						<div v-for="item in list3.img" :key="item.title">
							<img v-bind:src='item.url' />
							<p>{{item.title}}</p>
						</div>
					</div>
				</div>
				<div class="other">
					<div class="title">
						<h3>滴滴香浓，杯杯温暖，尽在天使街茶饮</h3>
					</div>
					<div>
						<h3>本店地址: 小榄镇文化路90号(风山公园侧)</h3>
						<h3 style="float:right">外卖电话: 22277778</h3>
					</div>
					<div>
						<h5>WIFI账号: 35F008</h5>
						<h5>WIFI密码: 076022277778</h5>
						<h3 style="float:right">外卖微信: 13113908767</h3>
					</div>
					<p style="float:right;font-size:14px;">菜品以实物为准</p>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  data() {
    return {
      list1: {
        title: "金牌小食",
        img: {
          1: {
            url: "../static/gongzaimian.png",
            title: "餐肉公仔面"
          },
          2: {
            url: "../static/chezaimian.png",
            title: "XO酱拌车仔面"
          },
          3: {
            url: "../static/fengzhuai.png",
            title: "水晶凤爪"
          },
          4: {
            url: "../static/youyuhua.png",
            title: "酥炸鱿鱼花"
          }
        },
        list: {
          咖喱鱼蛋: {
            value: 5,
            hot: false
          },
          咖喱牛肉丸: {
            value: 5,
            hot: false
          },
          水晶凤爪: {
            value: 9,
            hot: true
          },
          美式薯条: {
            value: 8,
            hot: true
          },
          酥炸薯饼: {
            value: 9,
            hot: false
          },
          麦乐鸡块: {
            value: 8,
            hot: false
          },
          日式海蜇: {
            value: 9,
            hot: false
          },
          上汤水饺: {
            value: 9,
            hot: false
          },
          咖喱鱼腐: {
            value: 7,
            hot: false
          },
          炸鱼腐: {
            value: 9,
            hot: false
          },
          奶香爆米花: {
            value: 7,
            hot: false
          },
          甜酸酱煎香肠: {
            value: 12,
            hot: true
          },

          酥炸鸡米花: {
            value: 10,
            hot: false
          },
          酥炸鱿鱼花: {
            value: 10,
            hot: true
          },
          酥炸虾饼: {
            value: 9,
            hot: false
          },
          奥尔良烤鸡腿: {
            value: 7,
            hot: true
          },
          奥尔良烤鸡翼2只: {
            value: 12,
            hot: true
          },
          奥尔良烤中翅3只: {
            value: 13,
            hot: true
          }
        }
      },
      list2: {
        img: {
          1: {
            url: "../static/qinggua.png",
            title: "凉拌青瓜"
          },
          2: {
            url: "../static/haize.png",
            title: "日式海蜇"
          },
          3: {
            url: "../static/galiyufu.png",
            title: "咖喱鱼腐"
          },
          4: {
            url: "../static/xiabin.png",
            title: "酥炸虾饼"
          }
        },
        list: {
          XO酱捞乌冬面: {
            value: 8,
            hot: true
          },
          XO酱捞车仔面: {
            value: 8,
            hot: true
          },
          餐肉公仔面: {
            value: 9,
            hot: true
          },
          煎双蛋公仔面: {
            value: 10,
            hot: false
          },
          餐肉乌冬汤面: {
            value: 10,
            hot: false
          },
          餐肉车仔汤面: {
            value: 10,
            hot: false
          },
          餐肉过桥米线: {
            value: 10,
            hot: false
          },
          蒜香生菜: {
            value: 10,
            hot: false
          },
          蒜香大白菜: {
            value: 10,
            hot: false
          },
          蒜香西兰花: {
            value: 10,
            hot: false
          },
          椰香黄金糕: {
            value: 8,
            hot: false
          },

          酥炸绿茶饼: {
            value: 9,
            hot: false
          },
          凉拌青瓜: {
            value: 10,
            hot: false
          },
          青瓜沙律: {
            value: 10,
            hot: false
          },
          鲜杂果沙律: {
            value: 18,
            hot: false
          },
          芝士爆浆鸡扒: {
            value: 19,
            hot: true
          },
          奥尔良鸡扒: {
            value: 12,
            hot: true
          },
          香酥炸鸡排: {
            value: 13,
            hot: true
          },
          黑椒鸡扒: {
            value: 14,
            hot: true
          }
        }
      },
      list3: {
        title: "超值小食套餐",
        img: {
          1: {
            url: "../static/shutiao.png",
            title: "美式薯条"
          },
          2: {
            url: "../static/mailejikuai.png",
            title: "麦乐鸡块"
          },
          3: {
            url: "../static/jizhongyi.png",
            title: "奥尔良烤中翅"
          },
          4: {
            url: "../static/jimihua.png",
            title: "鸡米花"
          },
          5: {
            url: "../static/zhishijipa.png",
            title: "芝士爆浆鸡扒"
          },
          6: {
            url: "../static/wudongtangmian.png",
            title: "餐肉乌冬汤面"
          },
          7: {
            url: "../static/kaojichi.png",
            title: "奥尔良烤鸡翼"
          },
          8: {
            url: "../static/jipa.png",
            title: "奥尔良鸡扒"
          },
          9: {
            url: "../static/baomihua.png",
            title: "奶香爆米花"
          },
          10: {
            url: "../static/yudan.png",
            title: "咖喱鱼蛋"
          },
          11: {
            url: "../static/zhajipa.png",
            title: "香酥炸鸡扒"
          },
          12: {
            url: "../static/xiangchang.png",
            title: "甜酸酱煎香肠"
          },
        }
      }
    };
  },
  methods: {
	  gopage(){
		  this.$router.push({
			name:'front'
        })
	  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.bodyBox {
  width: 1500px;
  height: 1240px;
  padding: 10px;
  padding-bottom: 0;
  //   border: 1px solid #dc8598;
}
.listBox {
  font-size: 25px;
  //   padding: 20px 20px 0 20px;
  h3 {
    color: #f7a492;
    padding-bottom: 15px;
    margin-bottom: 5px;
    border-bottom: 1px dotted #f7a492;
    span {
      font-size: 20px;
      margin-left: 10px;
    }
  }
  .list {
    color: #1b4924;
    p {
      display: inline-block;
    }
    div {
      padding: 5px;
      margin-bottom: 5px;
    }
    div:nth-child(odd) {
      background: #fbded8;
      border-radius: 1px;
    }
    .money {
      float: right;
    }
  }
}
.add {
  font-size: 18px;
  p {
    padding: 5px;
  }
}
.cold {
  h3 {
    color: #6ecbf9;
    border-bottom: 1px dotted #6ecbf9;
  }
  .list {
    color: #10355a;
    div:nth-child(odd) {
      background: #d3edfa !important;
    }
  }
}
.hot {
  background: url("../assets/hot.png") no-repeat left;
  background-size: 24px;
  font-size: 12px;
  padding-left: 27px;
  width: 10px;
  height: 10px;
  color: #ff6b00;
}
.img {
  margin-top: 5px;
  div {
    width: 160px;
    display: inline-block;
    margin-bottom: 10px;
    font-size: 18px;
    img {
      width: 160px;
      height: 110px;
    }
    &:nth-child(even) {
      margin-left: 20px;
    }
  }
  p {
    text-align: center;
  }
}
.jia {
  color: #ff6b00 !important;
  font-weight: bold;
}
.drink {
  margin-top: 20px;
  color: #ff6b00;
}
.eatImg {
  margin-top: 20px;
  div {
    width: 160px;
    display: inline-block;
    margin-bottom: 10px;
    font-size: 18px;
    margin-right: 18px;
    img {
      width: 160px;
      height: 130px;
    }
    // &:nth-child(even) {
    //   margin-left: 15px;
    // }
  }
  p {
    text-align: center;
  }
}
.other {
  margin-top: 10px;
  color: #ff6b00 !important;
  font-size: 24px;
  .title {
    border-bottom: 1px dotted #f7a492;
    padding-bottom: 15px;
    margin-bottom: 15px;
    text-align: center;
    h3 {
      font-weight: bold;
      font-size: 28px;
    }
  }
  div {
    margin-bottom: 15px;
  }
  h3 {
    display: inline-block;
    font-weight: normal;
    font-size: 24px;
  }
  h5 {
    display: inline-block;
  }
}
</style>
