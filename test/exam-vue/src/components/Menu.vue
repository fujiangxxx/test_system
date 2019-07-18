<template>
    <el-col :span="12">
        <el-menu
                default-active="2"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>考生管理</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">基本操作</template>
                    <el-menu-item index="1-1">
                        <router-link to="/selectStu">考生查询</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>老师管理</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">基本操作</template>
                    <el-menu-item index="2-1">
                        <router-link to="/selectTe">老师查询</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>班级管理</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">基本操作</template>
                    <el-menu-item index="1-1">
                        <router-link to="/addClasses">班级添加</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/selectClasses">班级查询</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>试题管理</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">方向管理</template>
                    <el-menu-item index="1-1">
                        <router-link to="/addFangxiang">方向添加</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/selectFangxiang">方向查询</router-link>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">类型管理</template>
                    <el-menu-item index="2-1">
                        <router-link to="/addType">类型添加</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <router-link to="/typeSelect">类型查询</router-link>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">试题操作</template>
                    <el-menu-item index="3-1">
                        <router-link to="/addTest">试题添加</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-submenu{
        width: 200px;
    }
    .el-main{
        position: relative;
    }
</style>