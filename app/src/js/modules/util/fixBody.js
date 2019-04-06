'use strict';
// モーダル表示時に背景を止める
class FixBody {
  constructor() {
    this.scrollTop = 0
  }

  fix() {
    const body = document.querySelector('body')
    const scrollTop = window.scrollY
    body.setAttribute(
      'style',
      `top: -${scrollTop}px; position: fixed; width: 100%`
    )

    this.scrollTop = scrollTop
  }

  release() {
    const body = document.querySelector('body')
    body.setAttribute('style', ``)

    console.log(window)
    console.log(this.scrollTop)

    window.scrollTo(0, this.scrollTop)
  }
}

export default new FixBody()
