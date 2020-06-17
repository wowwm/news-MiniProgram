const news = [
  {
    id: "001",
    title: "xinwen001",
    poster: "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
    add_date: "2020-2-6",
    content: "经济观察报 记者 沈怡然 直到2月3日，李翠（化名）被排除了新冠病毒肺炎，她才感到再一次被生活眷顾了。李翠是湖北仙桃人，算上“非典”时期，她已经第二次因疑似感染而被多日隔离。\n 今年1月24日到2月4日，全国从日增200例，到日增3000多例，各地医院还有23000多人作为疑似感染者接受隔离，李翠是其中之一，从发热到被隔离的8天内，“好像在坐过山车”。"
  },
  {
    id: "002",
    title: "xinwen002",
    poster: "http://img5.imgtn.bdimg.com/it/u=1035415831,1465727770&fm=26&gp=0.jpg",
    add_date: "2020-2-6",
    content: "经济观察报 记者 沈怡然 直到2月3日，李翠（化名）被排除了新冠病毒肺炎，她才感到再一次被生活眷顾了。李翠是湖北仙桃人，算上“非典”时期，她已经第二次因疑似感染而被多日隔离。\n 今年1月24日到2月4日，全国从日增200例，到日增3000多例，各地医院还有23000多人作为疑似感染者接受隔离，李翠是其中之一，从发热到被隔离的8天内，“好像在坐过山车”。"
  },
  {
    id: "003",
    title: "xinwen003",
    poster: "http://bbs.jooyoo.net/attachment/Mon_0905/24_65548_2835f8eaa933ff6.jpg",
    add_date: "2020-2-6",
    content: "经济观察报 记者 沈怡然 直到2月3日，李翠（化名）被排除了新冠病毒肺炎，她才感到再一次被生活眷顾了。李翠是湖北仙桃人，算上“非典”时期，她已经第二次因疑似感染而被多日隔离。\n 今年1月24日到2月4日，全国从日增200例，到日增3000多例，各地医院还有23000多人作为疑似感染者接受隔离，李翠是其中之一，从发热到被隔离的8天内，“好像在坐过山车”。"
  }
]

//获取新闻列表
function getNewList(){
  let list = [];
  for(var i = 0; i<news.length; i++){
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.content = news[i].content;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list;
}

//获取新闻内容
function getNewsDetail(newsID){
  let message={
    code:"404",
    news:{}
  };
  for(var i = 0; i<news.length; i++){
    if(newsID == news[i].id){
      message.code = "200";
      message.news = news[i];
      break;
    }
  }
  return message;
}

//接口
module.exports={
  getNewList:getNewList,
  getNewsDetail:getNewsDetail
}