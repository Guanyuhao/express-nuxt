<template>
    <div class="tokenList">
        <el-row v-for="(item,index) in tokenList" class="rows" :key="index">
            <el-col :span="13">
                <div class="grid-content bg-purple" style="margin-left:26px;margin-top:18px;">
                    <dl class="rowsDl">
                        <dt>
                            <img src="~/assets/img/slack.png" alt="">
                        </dt>
                        <dd>
                            <p>{{item.name}}</p>
                            <span>{{item.intru}}</span>
                        </dd>
                    </dl>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light" style="margin-left:120px;margin-top:18px;">
                    <p>总供给</p>
                    <span>{{item.num}} CNHA</span>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content bg-purple-light" style="margin-left:56px;margin-top:18px;">
                    <p>令牌持有人</p>
                    <span>{{item.anum}} 个地址</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tokenList: [
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                    { name: "CNHA", intru: "是一个基于区块链开的分散协议，旨在用过区块链和分布存储技术构建全球免费内容娱乐法国队和于温卡就是多输氨基酸客户端", num: "1.00000.0000.000", anum: "192348" },
                ]
            }
        },
        components: {
        },
    }
</script>
<style lang="scss" scoped>
    .tokenList {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        box-shadow: rgb(220, 220, 220) 0px 0px 20px;
        .tokenBox {
            width: 1200px;
            margin: 0 auto;
        }
        .rows {
            width: 100%;
            height: 80px;
            background: #f5f7f9;
            .grid-content {
                p {
                    color: #333333;
                    font-size: 16px;
                }
                span {
                    font-size: 12px;
                    color: #999999;
                }
            }
            .rowsDl {
                width: 100%;
                overflow: hidden;
                dt {
                    margin-right: 12px;
                    float: left;
                    line-height: 42px;
                    img {
                        width: 44px;
                        height: 44px;
                        vertical-align: middle;
                    }
                }
                dd {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    p {
                        color: #00b4ff;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    span {
                        font-size: 12px;
                        color: #999999;
                    }
                }
            }
        }
        .rows:nth-child(even) {
            background: #ffffff;
        }
    }
</style>