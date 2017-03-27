<template lang="pug">
  a.header-logo(href="/")
    img.image(src="../asset/image/light-bulb.png", alt="Light Bulb", title="A Light-bulb emoji.")
    | Light Bulb
</template>

<style lang="stylus">
  @import '../style/config.styl'

  .header-logo
    box-sizing: border-box
    display: inline-block
    height: 100%
    padding-top: $header-logo.padding
    padding-bottom: @padding-top
    line-height: $header-logo.height - 2 * $header-logo.padding

    & > .image
      float: left
      max-height: 100%
</style>
