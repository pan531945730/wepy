import wepy from 'wepy'

function log() {
    var arg = [].slice.call(arguments)
    console.log.apply(null, arg)
}
export default class Mixin extends wepy.mixin {
    data = {
        mixin: 'This is mixin data.'
    }
    methods = {
        tap() {
            this.mixin = 'mixin data was changed'
            log('mixin method tap')
        }
    }

    onLaunch() {
        log('mixin onLaunch')
    }

    onLoad() {
        console.log(this.$name)
        log('mixin onLoad')
    }

    onShow() {
        log('mixin onShow')
    }

    onReady() {
        log('mixin onReady')
    }

    onHide() {
        log('mixin onHide')
    }

    onError() {
        log('mixin onError')
    }

}
