<script>
import { useRouter } from 'vue-router'
export default {
    
    setup() {
        const $router = useRouter()
        const onChange = (index)=>{
            
            $router.push(index)
        }
        const backhome = ()=>{
            $router.push('/')
        }
        return {
            onChange,
            backhome
        }
    }
}
</script>
<template >
    <div class="box">
        <div class="head">
            <div class="title" @click="backhome">ISR-Restaurant</div>
        </div>
        <div class="main">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu"
                text-color="#fff"
                @select="onChange"
            >
                <el-menu-item index="home">
                    <el-icon>
                        <house />
                    </el-icon>
                    <span>Home</span>
                </el-menu-item>
                <el-menu-item index="user">
                    <el-icon>
                        <user />
                    </el-icon>
                    <span>Users</span>
                </el-menu-item>
                <el-menu-item index="reservation">
                    <el-icon>
                        <ForkSpoon />
                    </el-icon>
                    <span>Reservation</span>
                </el-menu-item>
                <el-menu-item index="inventory">
                    <el-icon>
                        <Refrigerator />
                    </el-icon>
                    <span>Refrigerator</span>
                </el-menu-item>
            </el-menu>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.box {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .head {
        background-color: AliceBlue;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        .title {
            font-size: large;
        }
    }
    .main {
        display: flex;
        flex: 1;
        overflow: hidden;
        .el-menu {
            height: 100%;
        }
        .content{
             height: 100%;
            flex: 1;
            
        }
    }
}
</style>