<template lang="pug">
    .content-header(app fixed)
        i.fio(:class='icon')
        h2 {{ text }}
</template>

<script>
export default {
    props: {
        icon: String,
        text: String
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styl/color-scheme'

    .content-header
        height 60px
        width 100%
        border-bottom 1px solid divider
        display inline-flex
        align-items center
        
        i, h2
            font-size 20px
            color text-primary
            margin-left 16px

        h2
            font-weight 400
            letter-spacing 1px
</style>

