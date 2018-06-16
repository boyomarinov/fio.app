<template>
    <div class="login-page" @keyup.enter="authenticate()">
        <div class="login-form">
            <div class="title">
                <div class="logo">
                    <span class="text">Lunch</span>
                </div>
            </div>
            <span class="login-text">Login</span>
            <div class="form">
                <div class="input">
                    <input type="text" placeholder="Username" v-model="login" />
                    <i class="fio ff-user"></i>
                </div>
                <!--<div class="input">-->
                    <!--<input type="password" placeholder="Username" v-model="login" />-->
                    <!--<i class="fio ff-user"></i>-->
                <!--</div>-->
                <div class="submit-button" @click='authenticate()'>
                    <span>Login</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '@/services/rest/authentication-service';

export default {
    data() {
        return {
            login: '',
            password: ''
        }
    },
    
    methods: {
        async authenticate() {
            const res = await login(this.login, this.password);
            this.$store.dispatch('setToken', res.token);
            this.$store.dispatch('setUser', res.user);
            this.$router.push('/home');
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styl/color-scheme'
    
    login-input-color = #688ab1

    placeholder()
        &::-webkit-input-placeholder
            {block}
        &:-moz-placeholder
            {block}
        &::-moz-placeholder
            {block}
        &:-ms-input-placeholder
            {block}


    .login-page
        height 100%
        background url(../assets/images/login-background.png) center no-repeat
        background-size cover
        display flex
        align-items center

    .login-form
        width 320px
        height 568px
        background-color primary
        margin-left 20%
        padding-left 16px
        padding-right 16px
        display flex
        flex-direction column

        .title
            display flex
            align-items center
            height 25px
            margin-top 50px

            .logo
                height 20px
                width 44.5px
                background url(../assets/images/fio-logo.svg) center no-repeat
                background-size cover

            .text
                color white
                font-size 16px
                border-left 1px solid primary-light
                margin-left 11px
                padding-left 11px

        .login-text
            color white
            margin-top 50px
            font-size 18px

        .form
            display flex
            flex-direction column
            align-items flex-end
            margin-top 16px

            .input 
                position relative
                height 36px
                width 100%

                &:not(:last-child)
                    margin-bottom 10px

                input
                    height 100%
                    width 100%
                    background-color login-input-color
                    border none
                    font-size 12px
                    padding-left 49px
                    color text-and-icons

                    &:hover
                    &:active
                    &:focus
                        padding-left 48px
                        border 1px solid text-and-icons
                        outline none

                    +placeholder()
                        color divider
                i 
                    position absolute
                    left 0
                    top 1px
                    width 36px
                    height 34px
                    line-height 35px
                    text-align center
                    color white
                    border-right 1px solid primary-light

            .submit-button
                width 136px
                height 36px
                margin-top 20px
                font-size 14px
                border-radius 2px
                background-color text-and-icons
                color primary
                display flex
                align-items center
                justify-content center

                &:hover 
                    cursor pointer

                    span
                        opacity 0.5
</style>

