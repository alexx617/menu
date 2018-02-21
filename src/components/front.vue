<template>
	<div class="bodyBox">
		<el-row :gutter="18">
			<el-col :span="6">
				<div class="listBox" @click="gopage()">
					<h3>{{list1.title}}</h3>
					<ul>
						<li class="list">
							<div v-for="(item,i) in list1.list" :key="item">
								<p>{{i}}
									<span>{{item.value}}元</span>
									<b class="hot" v-if="item.hot">热卖</b>
								</p>
							</div>
						</li>
					</ul>
					<div class="add" v-if="list1.add">
						<p v-html="list1.add"></p>
					</div>
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
					<h3>{{list2.title}}</h3>
					<ul>
						<li class="list">
							<div v-for="(item,i) in list2.list" :key="item">
								<p>{{i}}
									<span>{{item.value}}元</span>
									<b class="hot" v-if="item.hot">
										<i v-if="!item.noshow">热卖</i>
									</b>
								</p>
							</div>
						</li>
					</ul>
					<div class="add" v-if="list2.add">
						<p v-html="list2.add"></p>
					</div>
					<div class="img" v-if="list2.img">
						<div v-for="item in list2.img" :key="item.title">
							<img v-bind:src='item.url' />
							<p>{{item.title}}</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="listBox">
					<h3>{{list6.title}}</h3>
					<ul>
						<li class="list">
							<div v-for="(item,i) in list6.list" :key="item">
								<p>{{i}}
									<span>{{item.value}}元</span>
									<b class="hot" v-if="item.hot">热卖</b>
								</p>
							</div>
						</li>
					</ul>
					<div class="add" v-if="list6.add">
						<p v-html="list6.add"></p>
					</div>
				</div>
				<div style="margin-top:12px;" class="listBox cold">
					<h3>{{list4.title}}</h3>
					<ul>
						<li class="list">
							<div v-for="(item,i) in list4.list" :key="item">
								<p>{{i}}
									<span>{{item.value}}元</span>
									<b class="hot" v-if="item.hot">热卖</b>
								</p>
							</div>
						</li>
					</ul>
					<div class="add" v-if="list4.add">
						<p v-html="list4.add"></p>
					</div>
				</div>
				<div style="margin-top:12px;" class="listBox">
					<h3>{{list5.title}}</h3>
					<ul>
						<li class="list">
							<div v-for="(item,i) in list5.list" :key="item">
								<p>{{i}}
									<span>{{item.value}}元</span>
									<b class="hot" v-if="item.hot">热卖</b>
								</p>
							</div>
						</li>
					</ul>
					<div class="add" v-if="list5.add">
						<p v-html="list5.add"></p>
					</div>

					<div class="img" v-if="list5.img">
						<div v-for="item in list5.img" :key="item.title">
							<img v-bind:src='item.url' />
							<p>{{item.title}}</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="listBox">
					<h3>{{list3.title}}</h3>
					<ul>
						<li class="list">
							<div v-for="(item,i) in list3.list" :key="item">
								<p>{{i}}
									<span>{{item.value}}元</span>
									<b class="hot" v-if="item.hot">热卖</b>
								</p>
							</div>
						</li>
					</ul>
					<div class="add" v-if="list3.add">
						<p v-html="list3.add"></p>
					</div>
					<div class="img" v-if="list3.img">
						<div v-for="item in list3.img" :key="item.title">
							<img v-bind:src='item.url' />
							<p>{{item.title}}</p>
						</div>
					</div>
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
        title: "芝士玫瑰盐奶盖（冷 / 暖）",
        add: `可加料(每份1元):<br/>红豆、椰果、西米、粒粒爽、珍珠(2元)`,
        img: {
          1: {
            url: "../static/mochang.png",
            title: "宇治抹茶奶盖茶"
          },
          2: {
            url: "../static/mgz.png",
            title: "鲜芒果肉汁"
          },
          3: {
            url: "../static/hongchanaigai.png",
            title: "水蜜桃奶盖茶"
          },
          4: {
            url: "../static/zs.png",
            title: "鲜紫薯奶露"
          },
          5: {
            url: "../static/kafeinaigai.png",
            title: "咖啡奶盖茶"
          },
          6: {
            url: "../static/hlg.png",
            title: "鲜火龙果汁"
          }
        },
        list: {
          宇治抹茶奶盖茶: {
            value: 10,
            hot: true
          },
          桂花乌龙奶盖茶: {
            value: 10,
            hot: false
          },
          水蜜桃乌龙奶盖茶: {
            value: 10,
            hot: true
          },
          日韩玄米茶奶盖茶: {
            value: 10,
            hot: false
          },
          冰菊普洱茶奶盖茶: {
            value: 10,
            hot: false
          },
          红豆奶盖茶: {
            value: 10,
            hot: false
          },
          大红袍奶盖茶: {
            value: 9,
            hot: false
          },
          苿莉绿茶奶盖茶: {
            value: 9,
            hot: false
          },
          "原味奶盖茶 / 咖啡奶盖茶": {
            value: 9,
            hot: false
          },
          "芒果奶盖茶 / 蓝莓奶盖茶": {
            value: 9,
            hot: false
          },
          "雪柠奶盖茶 / 柠乐奶盖茶": {
            value: 9,
            hot: false
          },
          "巧克力奶盖 / 哈密瓜奶盖": {
            value: 9,
            hot: false
          },
          "麦香奶盖茶 / 提拉米苏奶盖": {
            value: 9,
            hot: false
          }
        }
      },
      list2: {
        title: "港式甜品",
        img: {
          1: {
            url: "../static/1342679765.png",
            title: "鲜芒果水果肠粉"
          },
          2: {
            url: "../static/taojiao.png",
            title: "桃胶皂角米牛奶"
          },
          3: {
            url: "../static/mgxs.png",
            title: "粒粒爽芒果雪山"
          },
          4: {
            url: "../static/xml.png",
            title: "芒果西米捞"
          },
          5: {
            url: "../static/yezhixiaoxiancao.png",
            title: "椰汁烧仙草"
          },
          6: {
            url: "../static/xiancaomangguo.png",
            title: "仙草芒果捞"
          }
        },
        list: {
          桃胶皂角米牛奶: {
            value: 15,
            hot: true
          },
          桃胶西米糖水: {
            value: 15,
            hot: false
          },
          "鲜芒果/鲜香蕉水果肠粉": {
            value: 15,
            hot: true,
            noshow: true
          },
          鲜榴莲水果肠粉: {
            value: 20,
            hot: false
          },
          招牌杨枝甘露: {
            value: 16,
            hot: false
          },
          "芒果班戟 / 香蕉班戟": {
            value: 10,
            hot: false
          },
          芒果西米捞: {
            value: 13,
            hot: true
          },
          "芒果仙草捞 / 芒果椰果捞": {
            value: 13,
            hot: false
          },
          芒果粒汤圆: {
            value: 13,
            hot: false
          },
          椰果红豆芒果捞: {
            value: 13,
            hot: false
          },
          椰汁烧仙草: {
            value: 9,
            hot: true
          },
          椰汁凉粉: {
            value: 5,
            hot: false
          },
          椰汁西米捞: {
            value: 7,
            hot: false
          },
          "仙草西米捞 / 红豆西米捞": {
            value: 9,
            hot: false
          },
          "芝麻汤圆 / 花生汤圆": {
            value: 5,
            hot: false
          }
        }
      },
      list3: {
        title: "有奶有茶（冷 / 暖）",
        // add: `部分可加料(每份1元):<br/>红豆、椰果、西米、粒粒爽、珍珠(2元)`,
        img: {
          1: {
            url: "../static/jinjuningmeng.png",
            title: "金桔柠檬茶"
          },
          2: {
            url: "../static/zznc.png",
            title: "珍珠奶茶"
          }
        },
        list: {
          金桔柠檬茶: {
            value: 9,
            hot: true
          },
          粒粒爽雪柠: {
            value: 7,
            hot: false
          },
          奥利奥奶茶: {
            value: 7,
            hot: false
          },
          原味奶茶: {
            value: 5,
            hot: false
          },
          珍珠奶茶: {
            value: 8,
            hot: true
          },
          椰果奶茶: {
            value: 7,
            hot: false
          },
          仙草奶茶: {
            value: 9,
            hot: false
          },
          草莓奶茶: {
            value: 6,
            hot: false
          },
          西米奶茶: {
            value: 6,
            hot: false
          },
          红豆冰茶: {
            value: 7,
            hot: false
          },
          红豆奶茶: {
            value: 7,
            hot: false
          },
          纯牛奶冰: {
            value: 8,
            hot: false
          },
          咖啡: {
            value: 10,
            hot: false
          },
          百香果金桔柠茶: {
            value: 10,
            hot: true
          },
          酸梅汁: {
            value: 6,
            hot: false
          },
          橙汁: {
            value: 5,
            hot: false
          },
          焦糖大麦茶: {
            value: 8,
            hot: false
          },
          "薄荷雪柠 / 玫瑰雪柠": {
            value: 5,
            hot: false
          },
          "草莓雪柠 / 蓝莓雪柠": {
            value: 5,
            hot: false
          },
          "冰绿茶 / 冰红茶": {
            value: 5,
            hot: false
          },
          "雪柠 / 柠乐": {
            value: 5,
            hot: false
          },
          鲜柠檬水: {
            value: 5,
            hot: false
          }
        }
      },
      list6: {
        title: "鲜榨果昔",
        list: {
          鲜芒果肉汁: {
            value: 10,
            hot: true
          },
          鲜紫薯奶露: {
            value: 9,
            hot: false
          },
          鲜木瓜汁: {
            value: 9,
            hot: false
          },
          鲜香蕉汁: {
            value: 9,
            hot: false
          },
          鲜火龙果汁: {
            value: 10,
            hot: false
          },
          鲜榨西瓜汁: {
            value: 10,
            hot: false
          },
          "鲜榨苹果汁 / 鲜榨雪梨汁": {
            value: 10,
            hot: false
          }
        }
      },
      list4: {
        title: "凉爽冷品",
        list: {
          芋圆杂锦捞: {
            value: 17,
            hot: false
          },
          双球雪糕球: {
            value: 7,
            hot: false
          },
          奥利奥雪糕球: {
            value: 9,
            hot: false
          },
          粒粒爽芒果雪山: {
            value: 15,
            hot: true
          },
          粒粒爽杂果雪山: {
            value: 16,
            hot: false
          },
          芒果西米雪山捞: {
            value: 16,
            hot: false
          }
        }
      },
      list5: {
        title: "暖心热饮",
        img: {
          3: {
            url: "../static/yuyuan.png",
            title: "芋圆杂锦捞"
          },
          4: {
            url: "../static/yangzhiganlu.png",
            title: "杨枝甘露"
          },
          5: {
            url: "../static/banji.png",
            title: "芒果班戟"
          },
          6: {
            url: "../static/aoliao.png",
            title: "奥利奥奶茶"
          }
        },
        list: {
          红糖生姜茶: {
            value: 5,
            hot: true
          },
          "杞子红枣茶 / 可乐煲姜茶": {
            value: 7,
            hot: false
          },
          洛神花果茶: {
            value: 8,
            hot: false
          }
          //   可乐煲姜茶: {
          //     value: 7,
          //     hot: false
          //   },
          //   杞子红枣生姜茶: {
          //     value: 7,
          //     hot: false
          //   }
        }
      }
    };
  },
  methods: {
    gopage() {
      this.$router.push({
        name: "rear"
      });
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
    padding-bottom: 10px;
    margin-bottom: 5px;
    border-bottom: 1px dotted #f7a492;
  }
  .list {
    color: #1b4924;
    div {
      padding: 4.5px 5px;
      margin-bottom: 4px;
    }
    div:nth-child(odd) {
      background: #fbded8;
      border-radius: 1px;
    }
    span {
      float: right;
    }

    i {
      font-style: normal;
    }
  }
}
.add {
  font-size: 20px;
  color: #ff6b00;
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
      margin-left: 35px;
    }
  }
  p {
    text-align: center;
  }
}
</style>
