class MStorage {
  // private writeTime: any;

  constructor() {
    // this.writeTime = Number(new Date());
  }

  public isNotExist(value: any) {
    return value === null || typeof(value) === 'undefined';
  }

  /**
   * set 方法，设置
   * @param key String 键
   * @param value 值
   * @param expired writeTime 写入时间，单位：ms
   */
  public set (key, value, expired) {
    let data = {
      value,
      // writeTime: this.writeTime,
      expired
    };
    // 值是数组，不能直接存储，需要转换 JSON.stringify
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * get 方法，获取
   * @param key 键
   */
  public get (key) {
    const dataJSON: string | null = localStorage.getItem(key);
    // 当目标不存在时直接结束
    if (this.isNotExist(dataJSON)) {
      return null;
    }

    let data = JSON.parse(dataJSON || '');
    return data.value;
  }

  /**
   * remove 方法，删除
   * @param key 键
   */
  public remove (key) {
    localStorage.removeItem(key);
  }

  /**
   * isOutPeriod 方法，判断 value 值是否过期
   * @param value 值
   */
  public isOutPeriod (value) {
    if (!value.value) {
      return true;
    }
    let readTime = Number(new Date());
    return (readTime - value.writeTime) > value.expired;
  }
}

// console.log('class', MStorage)

const Storage = new MStorage()
// console.log('class1', Storage)

export default Storage

// class Animal {
//   move(distanceInMeters: number = 0) {
//       console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }

// console.log(new Animal())

// export default new Animal
