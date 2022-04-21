//@ts-nocheck
import { Injectable } from '@angular/core';
import { Burst, Timeline } from '@mojs/core';

@Injectable({ providedIn: 'root' })
export class AnimatedLinkProvider {
  private items = ['grids', 'controls', 'typed'];
  private key = '_mojs_burst_parent_'
  private getId = (id)=>this.key+id

  /**
   * CHEAT (link?.nodeName check)
   * Need to use this function into features.components.html AND FR/EN.json to propagate (mouseover) event
   * issue with angular, need to search that shit
   */
  public initBurst() {
    this.items.forEach((itemId) => {
      const link = document.getElementById(this.getId(itemId))?.children.item(0); // Always 1 item, or link at first
      if (!link?.nodeName) return;
      if (link?.nodeName.toLowerCase() !== 'a') return;
      const itemDim = link.getBoundingClientRect(),
        itemSize = {
          x: itemDim.right - itemDim.left,
          y: (itemDim.bottom - itemDim.top)-5,
        },
        shapes = ['line', 'curve'],
        colors = ['#2FB5F3', '#FF0A47', '#FF0AC2', '#47FF0A'];

      const chosenC = Math.floor(Math.random() * colors.length),
        chosenS = Math.floor(Math.random() * shapes.length);

      // create shape
      const burst = new Burst({
        left: itemDim.left + (itemSize.x / 2),
        top: itemDim.top +( itemSize.y / 2),
        radiusX: itemSize.x,
        radiusY: itemSize.y,
        count: 8,
        children: {
          shape: shapes[chosenS],
          radius: 10,
          scale: { 0.8: 1 },
          fill: 'none',
          points: 7,
          stroke: colors[chosenC],
          strokeDasharray: '100%',
          strokeDashoffset: { '-100%': '100%' },
          duration: 350,
          delay: 100,
          easing: 'quad.out',
          isShowEnd: false,
        },
      });
      link.addEventListener('mouseenter', function () {
        burst.play();
      });
    });
  }
}
