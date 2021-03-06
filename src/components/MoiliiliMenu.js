import React, { Component } from "react"

export default class MoiliiliMenu extends Component {
  componentDidMount() {
    function addScript(src) {
      var s = document.createElement("script")
      s.setAttribute("src", src)
      document.body.appendChild(s)
    }
    addScript("//web5.zuppler.com/common.js")
    addScript("//web5.zuppler.com/order.js")
  }
  render() {
    return (
      <div
        id="zuppler-menu"
        data-channel-url="http://api.zuppler.com/v3/channels/kozosushi.json"
        data-integration="kozosushimoiliili"
        data-restaurant-id="7911"
        data-locale="en"
        data-item="plus"
        data-cart="simple"
        data-colors-background="#ffffff"
        data-colors-highContrast="#171717"
        data-colors-midContrast="#333333"
        data-colors-lowContrast="#999999"
        data-colors-brand="#064761"
        data-colors-heroBackground="#9e5375"
        data-colors-heroContrast="#FFFFFF"
        data-fonts-heading="DM Serif Text"
        data-fonts-body="Open Sans"
        data-fonts-deco="Open Sans"
      >
        <div id="zloading">Please wait. Loading menu...</div>
      </div>
    )
  }
}
