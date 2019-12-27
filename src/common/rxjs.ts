/**
 * 简易观察者模式提供非父子组件通过vux跨组件通讯
 */

// 观察者
export class Observable<Res> {
  // 任务列表
  taskList: Function[] = [];
  constructor(fn?: Function) {
    // 不存在函数则属于多播形式
    if (fn) {
      const observer = {
        next: (res: Res) => {
          this.taskList.forEach(o => {
            try {
              o(res);
            } catch (error) {
              console.warn(error);
            }
          });
        },
        complete: () => {
          // 解绑所有回调
          this.taskList.length = 0;
        }
      };
      try {
        fn(observer);
      } catch (error) {
        console.warn(error);
      }
    }
  }

  // 订阅
  subscribe(fn: Function) {
    const cb = typeof fn === "function" ? fn : res => res;
    this.taskList.push(cb);
  }

  // 转换为promise可支持async await
  toPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.subscribe(res => {
        resolve(res);
      });
    });
  }
}

// 目标者
export class Subject<Res> {
  // 所有观察者
  observerList: Observable<any>[] = [];

  // 目标多播
  next(...arg: Res[]) {
    this.observerList.forEach(e => {
      e.taskList.forEach(o => {
        try {
          o.apply(this, arg);
        } catch (error) {
          console.warn(error);
        }
      });
    });
  }

  asObservable() {
    const observable = new Observable();
    this.observerList.push(observable);
    return observable;
  }

  complete() {
    this.observerList.forEach(e => {
      e.taskList.length = 0;
    });
    this.observerList.length = 0;
  }
}
