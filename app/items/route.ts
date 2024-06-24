export async function GET() {
  /* const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  }); 
    const data = await res.json(); */

  // 模拟一些数据作为响应
  const data = await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        firstMenuName: "收款账户和账单收款",
        firstMenuId: "d13644e52f3945d4a9640f7969b6bfe7",
        secondMenuName: "收款账户操作说明",
        secondMenuId: "menu003001",
        question: "开通一个收款账户需要多久？",
        answer:
          "<span> \n <table>  \n  <tbody>\n   <tr> \n    <td>账户类型</td> \n    <td>账户名称</td> \n    <td>开通时效</td> \n   </tr> \n   <tr> \n    <td>全球收款账户</td> \n    <td>XTransfer摩根大通收款账户<br>XTransfer德意志收款账户</td> \n    <td>申请后立即开通</td> \n   </tr> \n   <tr> \n    <td>全球收款账户</td> \n    <td>XTransfer丹麦收款账户<br>XTransfer卢森堡收款账户</td> \n    <td>申请后15分钟内开通</td> \n   </tr> \n   <tr> \n    <td>全球收款账户</td> \n    <td>XTransfer星展收款账户</td> \n    <td>申请后3个香港工作日内开通</td> \n   </tr> \n   <tr> \n    <td>本地收款账户</td> \n    <td>XTransfer美国本地收款账户<br>XTransfer欧元区本地收款账户(合作银行：The Currency Cloud)<br>XTransfer加拿大本地收款账户<br>XTransfer欧洲本地收款账户<br>XTransfer英国本地收款账户（合作银行：Banking Circle S.A. UK Branch）<br>XTransfer丹麦本地收款账户</td> \n    <td>申请后15分钟内开通</td> \n   </tr> \n   <tr> \n    <td>本地收款账户</td> \n    <td>其余本地收款账户</td> \n    <td>申请后立即开通</td> \n   </tr> \n  </tbody> \n </table> </span>",
        parent: null,
      });
    }, 1000)
  );

  return Response.json({ data });
}
