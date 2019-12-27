import { Coordinate } from "./mealMenu";

class Ball {
  startDir: Coordinate = {
    x: 0,
    y: 0
  };

  endDir: Coordinate = {
    x: 0,
    y: 0
  };

  velocity: Coordinate = {
    x: 0,
    y: -10
  };

  gravity = 0.98;

  radius: number;

  color: string = "#00B1B5";

  target: HTMLSpanElement;

  timer: any;

  constructor(startDir: Coordinate, endDir: Coordinate, radius: number) {
    this.startDir = startDir;
    this.endDir = endDir;
    this.radius = radius;
    this.initDom();
  }

  initDom() {
    const ball = document.createElement("span");
    const style = {
      position: "absolute",
      top: 0,
      left: 0,
      width: `${this.radius}rem`,
      height: `${this.radius}rem`,
      backgroundColor: this.color,
      zIndex: 999,
      borderRadius: "50%",
      transform: `translate3d(${this.startDir.x}px, ${this.startDir.y}px, 0)`,
      webkitTransform: `translate3d(${this.startDir.x}px, ${this.startDir.y}px, 0)`
    };
    Object.assign(ball.style, style);
    this.target = ball;
    document.body.append(this.target);
    this.getTime();
  }

  running() {
    const style = {
      transform: `translate3d(${this.startDir.x}px, ${this.startDir.y}px, 0)`,
      webkitTransform: `translate3d(${this.startDir.x}px, ${this.startDir.y}px, 0)`
    };
    Object.assign(this.target.style, style);
  }

  destory() {
    this.target.remove();
  }

  throwDown(callback) {
    this.startDir.x += this.velocity.x;
    this.velocity.y += this.gravity;
    this.startDir.y += this.velocity.y;
    if (this.startDir.y >= this.endDir.y) {
      this.velocity.y = 0;
      this.velocity.x = 0;
      this.startDir.x = this.endDir.x;
      this.startDir.y = this.endDir.y;
      window.cancelAnimationFrame(this.timer);
      this.destory();
      callback();
    }
    this.running();
  }

  getTime() {
    let maxT = 0; // 计算多少帧下落完成
    let vy = this.velocity.y;
    let g = this.gravity;
    let y = this.startDir.y;
    while (y < this.endDir.y) {
      vy += g;
      y += vy;
      maxT++;
    }
    const change = this.endDir.x - this.startDir.x;
    this.velocity.x = change / maxT;
  }
}

export function throwBall(
  startDir: Coordinate,
  endDir: Coordinate,
  radius: number,
  callback: Function
): void {
  const ball = new Ball(startDir, endDir, radius);
  const handle = () => {
    ball.timer = window.requestAnimationFrame(handle);
    ball.throwDown(callback);
  };
  handle();
}
