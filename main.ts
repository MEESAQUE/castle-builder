player.onChat("skycastle", function () {
    castles.buildCastleInTheSky(BLOCK_OF_NETHERITE, posCamera(0, 0, 0), true)
})
player.onChat("castle", function () {
    castles.buildSimpleCastle(BLOCK_OF_NETHERITE)
})
