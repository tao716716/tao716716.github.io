// console.log('hhh');
// setInterval(()=>{alert('下午好陈欣')},5000);
//声明一个全局变量
var long;
function xinzeng(){
    //获取tableid节点
    var getxinzeng =document.getElementById('tableid');
    //获取插入的位置
    var long = tableid.rows.length;
    //插入行节点
    var newrow = getxinzeng.insertRow(long);
    //插入列节点
    var nameColumn = newrow.insertCell(0);
    var phoneColumn = newrow.insertCell(1);
    var actionColumn = newrow.insertCell(2);
    //给新增行的列赋予默认值
    nameColumn.innerHTML=null;
    phoneColumn.innerHTML=null;
    actionColumn.innerHTML='<button onclick="xinzeng()">新增</button><button onclick="bianji(this)">编辑</button><button onclick="shanchu(this)">删除</button>';   
    //long
    this.long=tableid.rows.length;
    
}
   //删除行
function shanchu(button){
    if(long>2){       
    var row=button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    long--;
    }
}
   //编辑
function bianji(button){
    var row = button.parentNode.parentNode;
    //赋值
    row.cells[0].innerHTML = prompt("请输入名字:");
    row.cells[1].innerHTML = prompt("请输入联系方式:");
}

////
function st(){
    var stl= document.createElement('style');
    stl.textContent ='th{font-size:30px !important;}';
    document.head.appendChild(stl);
}