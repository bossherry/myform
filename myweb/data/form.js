//1、获取用户校园卡号的输入框
var cardInput=document.getElementById("cardNumber");
    //开始重置
let flag1=false,flag2=false,flag3=false;
var card='';
let password='';
let second='';
//2、绑定onblur事件，失去焦点后操作
cardInput.onblur=function(){
     card=cardInput.value;
    //验证长度是否正确
   let  test1=card.length>=4&&card.length<21;
   let errmsg= document.getElementById("card_err")
    if(card===''||card===null){
        errmsg.innerText='校园卡号不能为空'
        return
    }
    if(test1){
        errmsg.innerText='';
    }
    else{
        errmsg.innerText='校园卡号长度必须为4~20位';
        return
    }
    //输入校验
    let matchString = /^[a-zA-Z][a-zA-Z0-9_]*$/
    if (!card.match(matchString)) {
        errmsg.innerText = '请以英文字母开头,仅包含英文字母,数字,下划线'
        return
    }
    flag1 = true;
}
    //口令验证

    //1、获取用户口令的输入框
    var passwordInput=document.getElementById("passwordNumber");
      passwordInput.onblur=function(){
       password=passwordInput.value;
       let errmsg= document.getElementById("password_err");
       if(password===''||password===null){
        errmsg.innerText='口令不能为空'
        return
    }
       //判断口令长度是否达标
       if(password.length<8||password.length>25){
          errmsg.innerText='口令长度不能小于8或者大于25';
          return
       }
       else{
        errmsg.innerText='';
       }
       flag2=true;
      }

     //二次口令验证

     var secondInput=document.getElementById("secondPassword");
     secondInput.onblur= function(){
         second=secondInput.value;
         let errmsg=document.getElementById("secondpassword_err");
         //验证二次口令
         if(second===''||second===null){
            errmsg.innerText='二次口令不能为空';
            return
        }
         if(second!=password){
            errmsg.innerText='二次口令必须与口令相同！';
            return
         }
         else{
            errmsg.innerText='';
         }
         flag3=true;
     }

     //提交验证
     var submitButton=document.getElementById("submit");
     submitButton.onclick=function(){
        if(flag1&&flag2&&flag3){
            if(password===second){
               // alert("card");
             window.location.href= "./data/new.html?card="+card;
             return false
            }
          }
          else{
            alert("请重新填写！")
          }
       
     }
    
