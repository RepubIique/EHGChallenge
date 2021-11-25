//create react component named colorGen

import React from 'react'

export const ColorGen = () => {
  //generate random color
  const randomColor = (i) => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  //Iterates random colour over Canvas and places a colour in each pixel
  const draw = () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height
    const pixels = []
    for (let i = 0; i < width * height; i++) {
      pixels.push(randomColor())
    }
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        ctx.fillStyle = pixels[i * height + j]
        ctx.fillRect(i, j, 1, 1)
      }
    }
  }

  //Sort the colours by luminance
  const sortLu = () => {
    draw()
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height
    const pixels = []
    for (let i = 0; i < width * height; i++) {
      pixels.push(ctx.getImageData(i % width, Math.floor(i / height), 1, 1).data)
    }

    // formula courtesy of https://en.wikipedia.org/wiki/Relative_luminance
    const sorted = pixels.sort((a, b) => {
      const hueA = 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
      const hueB = 0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2]
      return hueA - hueB
    })
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        ctx.fillStyle = `rgb(${sorted[i * height + j][0]}, ${sorted[i * height + j][1]}, ${
          sorted[i * height + j][2]
        })`
        ctx.fillRect(i, j, 1, 1)
      }
    }
  }

  return (
    <div>
      <canvas id="canvas" width="128" height="256" />
      <div>
        <button onClick={draw}>Draw</button>
        <button onClick={sortLu}>Sort by luminance</button>
      </div>
    </div>
  )
}
