import * as d3 from "./helpers/d3-service"
import {override, getSizes} from "./helpers/common"

/**
 * ClipPath: component that creates an SVG defs element with a rectangular clipping path
 * @param {selection} _container d3 selection representing the svg element
 * @returns {object} object containing methods for the component
*/
export default function ClipPath (_container) {
  let config = {
    margin: {
      top: 60,
      right: 30,
      bottom: 40,
      left: 70
    },
    width: 800,
    height: 500
  }

  const cache = {
    container: _container,
    clipPath: null,
    chartWidth: null,
    chartHeight: null,
  }

  function build () {
    if (!cache.clipPath) {
      cache.clipPath = cache.container.append('defs')
        .append('clipPath')
        .attr('id', 'mark-clip')
        .append('rect')
    }

    const {chartWidth, chartHeight} = getSizes(config, cache)
    cache.chartWidth = chartWidth
    cache.chartHeight = chartHeight

    cache.clipPath
      .attr('width', cache.chartWidth)
      .attr('height', cache.chartHeight)
  }

  function setConfig (_config) {
    config = override(config, _config)
    return this
  }

  function render() {
    build()
  }

  return {
    setConfig,
    render
  }
}