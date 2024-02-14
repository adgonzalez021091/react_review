import { useEffect } from "react";
const x = () => {
  let s = sleep(3000);
  s.then((r) => {
    console.log("This is executed after 3 second....", r);
  });
};
const funcAsync = async () => {
  await setTimeout(() => {}, 2500);
  return Math.random().toString + "...tomando";
};
const sleep = (i: number) => {
  return new Promise<number>(async (resolve) => {
    await setTimeout(() => {
      resolve(Math.random());
    }, i);
  });
};
export default function Testing({ children }) {
  useEffect(() => {
    //x();
    //y();
  }, []);

  const processResources = (a: number, b: number, c: number) => {
    console.log(a, b, c);
  };
  Promise.all([sleep(3000), sleep(5000), sleep(10000)]).then((...args) => {
    processResources(args[0][0], args[0][1], args[0][2]);
  });

  const sequence = async (arr: (() => void)[]) => {
    const arr2 = new Array(arr.length);
    for (const element of arr) {
      arr2.push(await element());
      console.log(arr2)
    }
    return arr2;
  };
  const taskToBeExecutendSequentially = [funcAsync, funcAsync, funcAsync];
  function y() {
    const allFinished = sequence(taskToBeExecutendSequentially);
    console.log("allFinished", allFinished);
  }

  const exercise2 = (arr:number[],num:number) => {
    const maxSum = arr.reduce((sum,el,i) => {
      if(i<=num-1){
        sum+=el;
      }else{
        const tmpSum = sum +el - (arr[i-num]);
        if(sum <= tmpSum){
          sum = tmpSum
        }
      }
      return sum
    },0)
    return maxSum
  }
  const exercise2_old = (arr:number[],num:number) => {
    let maxSum = 0;
    arr.forEach((el,i)=> {
      if(i<=num-1){
        maxSum+=el;
      }else{
        const tmpSum = maxSum +el - (arr[i-num]);
        if(maxSum <= tmpSum){
          maxSum = tmpSum
        }
      }
    })
    return maxSum;
  }
  function w (){
    console.log(1)

    setTimeout(() => {
      console.log(2)
    },0)
    new Promise(resolve => resolve("")).then(() => console.log(3)).then(() => console.log(4))
  }
  w();
    //console.log("max summ....",exercise2([-1,3,-3,4,-3,-6],3))
  return (
    <>
      <div className="p-11 bg-black text-white">{children}</div>
    </>
  );
}
