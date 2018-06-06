<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">

                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#495060'}">
                    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                广告管理
                            </template>
                            <!-- <MenuItem name="1-1"> 轮播图 </MenuItem> -->
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                分类管理
                            </template>
                            <!-- <MenuItem name="2-1"> 添加分类 </MenuItem>
                            <MenuItem name="2-2"> 管理分类 </MenuItem> -->
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                活动管理
                            </template>
                            <!-- <MenuItem name="3-1"> 推荐商品 </MenuItem> -->
                            <!-- <MenuItem name="3-2"> 优惠特卖 </MenuItem> -->
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '500px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
             <Footer class="layout-footer-center">2018-2028 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    background: #495060;
    text-align: center;
    color: #f5f7f9
}
</style>