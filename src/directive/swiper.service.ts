export const swiper = {
  inserted: (el: HTMLElement, bind: any) => {
    let oriX: number,
      oriY,
      moveX: number = 0,
      offsetX: number = 0;
    let m;
    let isScrolling;
    const maxoffset = -68 * 2; // 最大伸展68
    const touchStartFn = (e: any) => {
      if (m) {
        cancelAnimationFrame(m);
      }
      isScrolling = undefined;
      offsetX = offsetX || 0;
      oriX = e.touches[0].pageX;
      oriY = e.touches[0].pageY;
      document.removeEventListener("touchmove", eDefault);
    };
    const touchmoveFn = (e: any) => {
      bind.value.isOpen = true;
      const curX = e.touches[0].pageX;
      const curY = e.touches[0].pageY;
      const _moveX = curX - oriX;
      const _moveY = curY - oriY;
      if (typeof isScrolling === "undefined") {
        isScrolling = !!(Math.abs(_moveY) >= Math.abs(_moveX));
      }
      if (isScrolling) {
        return;
      }
      e.stopPropagation();
      let tempX = curX - oriX + offsetX;
      if (tempX > 0) {
        tempX = 0;
      }
      if (tempX < maxoffset / 2) {
        const addNum = Math.floor(tempX - maxoffset / 2) / 4;
        tempX = maxoffset / 2 + addNum;
        if (tempX < maxoffset) {
          tempX = maxoffset;
        }
      }
      moveX = tempX;
      translate(moveX);
    };
    const touceEndFn = (e: any) => {
      offsetX = moveX;
      if (offsetX > maxoffset / 2 || offsetX === undefined) {
        bind.value.isOpen = false;
        slideTo(0);
      } else {
        bind.value.isOpen = true;
        slideTo(maxoffset / 2);
      }
      document.removeEventListener("touchmove", eDefault);
    };
    el.addEventListener("touchstart", touchStartFn);
    el.addEventListener("touchmove", touchmoveFn);
    el.addEventListener("touchend", touceEndFn);
    function eDefault(e: any) {
      e.preventDefault();
    }
    function translate(distance: number) {
      el.style.transform = `translate3d(${distance}px, 0, 0)`;
      el.style.webkitTransform = `translate3d(${distance}px, 0, 0)`;
    }
    function slideTo(num: number) {
      let change = num - moveX;
      let maxT = 17,
        t = 0;
      const running = () => {
        m = window.requestAnimationFrame(running);
        t++;
        if (t > maxT) {
          t = maxT;
          window.cancelAnimationFrame(m);
          moveX = offsetX;
          return;
        }
        const distance = moveX + (change * t) / maxT;
        offsetX = distance;
        translate(distance);
      };
      running();
    }
  }
};
