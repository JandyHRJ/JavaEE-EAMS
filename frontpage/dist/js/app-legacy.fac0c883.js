(function(){"use strict";var e={6895:function(e,t,a){a(6992),a(8674),a(9601),a(7727);var l,o,n,r,s=a(8935),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"back"},[a("router-view")],1)},p=[],c={data:function(){return{}},methods:{}},u=c,m=a(1001),d=(0,m.Z)(u,i,p,!1,null,null,null),f=d.exports,h=a(2809),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"140"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},g=[],b=(a(3290),{data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}}),v=b,_=(0,m.Z)(v,y,g,!1,null,null,null),w=_.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.employer,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"员工姓名"}},[a("el-input",{model:{value:e.employer.name,callback:function(t){e.$set(e.employer,"name",t)},expression:"employer.name"}})],1),a("el-form-item",{attrs:{label:"员工工号"}},[a("el-input",{model:{value:e.employer.account,callback:function(t){e.$set(e.employer,"account",t)},expression:"employer.account"}})],1),a("el-form-item",{attrs:{label:"员工性别"}},[a("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.employer.gender,callback:function(t){e.$set(e.employer,"gender",t)},expression:"employer.gender"}},[a("el-option",{attrs:{label:"男",value:"1"}}),a("el-option",{attrs:{label:"女",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"员工电话"}},[a("el-input",{model:{value:e.employer.phone,callback:function(t){e.$set(e.employer,"phone",t)},expression:"employer.phone"}})],1),a("el-form-item",{attrs:{label:"员工密码"}},[a("el-input",{model:{value:e.employer.password,callback:function(t){e.$set(e.employer,"password",t)},expression:"employer.password"}})],1),a("el-form-item",{attrs:{label:"员工邮件"}},[a("el-input",{model:{value:e.employer.email,callback:function(t){e.$set(e.employer,"email",t)},expression:"employer.email"}})],1),a("el-form-item",{attrs:{label:"员工角色"}},[a("el-select",{attrs:{placeholder:"请选择员工类型"},model:{value:e.employer.role,callback:function(t){e.$set(e.employer,"role",t)},expression:"employer.role"}},[a("el-option",{attrs:{label:"员工",value:"0"}}),a("el-option",{attrs:{label:"部门经理",value:"1"}}),a("el-option",{attrs:{label:"副总经理",value:"2"}}),a("el-option",{attrs:{label:"总经理",value:"3"}}),a("el-option",{attrs:{label:"人事人员",value:"4"}}),a("el-option",{attrs:{label:"财务人员",value:"5"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),a("el-button",[e._v("取消")])],1)],1)},$=[],I=(a(8309),{data:function(){return{employer:{}}},methods:{onSubmit:function(){var e=this;this.employer.createTime=this.formatDate(),console.log(this.formatDate(this.employer.createTime)),this.$http.post("insertEmpInfo?account="+this.employer.account+"&createTime="+this.employer.createTime+"&email="+this.employer.email+"&gender="+this.employer.gender+"&name="+this.employer.name+"&password="+this.employer.password+"&phone="+this.employer.phone+"&role="+this.employer.role).then((function(t){t.data?(e.$message({message:"添加成功",type:"success"}),e.$router.push("/employer/AllEmployer")):e.$message({message:"添加失败",type:"error"})}))},formatDate:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,l=e.getDate();return a<10&&(a="0"+a),l<10&&(l="0"+l),t+"-"+a+"-"+l}}}),S=I,k=(0,m.Z)(S,x,$,!1,null,null,null),T=k.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"apply",attrs:{model:e.apply,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"请假开始时间"}},[a("el-col",{attrs:{span:10}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.apply.startTime,callback:function(t){e.$set(e.apply,"startTime",t)},expression:"apply.startTime"}})],1)],1),a("el-form-item",{attrs:{label:"请假天数"}},[a("el-input",{model:{value:e.apply.duringTime,callback:function(t){e.$set(e.apply,"duringTime",t)},expression:"apply.duringTime"}})],1),a("el-form-item",{attrs:{label:"请假原因"}},[a("el-input",{model:{value:e.apply.reason,callback:function(t){e.$set(e.apply,"reason",t)},expression:"apply.reason"}})],1),a("el-form-item",{attrs:{label:"请假类型"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.apply.type,callback:function(t){e.$set(e.apply,"type",t)},expression:"apply.type"}},[a("el-option",{attrs:{label:"事假",value:"0"}}),a("el-option",{attrs:{label:"年假",value:"1"}}),a("el-option",{attrs:{label:"婚假",value:"2"}}),a("el-option",{attrs:{label:"产检",value:"3"}}),a("el-option",{attrs:{label:"产假",value:"4"}}),a("el-option",{attrs:{label:"哺乳",value:"5"}}),a("el-option",{attrs:{label:"陪产",value:"6"}}),a("el-option",{attrs:{label:"外出",value:"7"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),a("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)},D=[],A={data:function(){return{apply:{}}},created:function(){null!=this.$route.query.type&&(this.apply.type=this.$route.query.type)},methods:{onSubmit:function(){var e=this,t=window.sessionStorage.getItem("empId");this.apply.startTime=this.apply.startTime.toISOString().substring(0,10)+" "+this.apply.startTime.toISOString().substring(11,19),console.log("applyVacation/"+t+"/"+this.apply.startTime+"/"+this.apply.duringTime+"/"+this.apply.reason+"/"+this.apply.type),this.$http.post("applyVacation/"+t+"/"+this.apply.startTime+"/"+this.apply.duringTime+"/"+this.apply.reason+"/"+this.apply.type).then((function(t){t.data?(e.$message({message:"添加成功",type:"success"}),e.$router.push("/apply/applyList")):e.$message({message:"添加失败",type:"error"})}))},resetForm:function(){this.apply={}}}},E=A,Z=(0,m.Z)(E,C,D,!1,null,null,null),F=Z.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"login-container",attrs:{"label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"login_title"},[e._v("考勤系统登录")]),a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.submitClick.apply(null,arguments)}}},[e._v("登录")])],1)],1)],1)},O=[],M=(a(4916),a(5306),{data:function(){return{loginForm:{username:"",password:""}}},methods:{submitClick:function(){var e=this;""==e.loginForm.username||""==e.loginForm.password?this.$alert("账号或密码不能为空","提示",{confirmButtonText:"确定"}):(e.$http.get("/login"),e.$http.get("/login/"+e.loginForm.username+"/"+e.loginForm.password).then((function(t){""!=t.data?(e.$alert("登录成功","提示",{confirmButtonText:"确定"}),window.sessionStorage.setItem("empId",t.data.empId),window.sessionStorage.setItem("account",t.data.account),window.sessionStorage.setItem("name",t.data.name),window.sessionStorage.setItem("role",t.data.role),e.$router.replace({path:"/home"})):e.$alert("账号或密码错误","提示",{confirmButtonText:"确定"})})))}}}),B=M,H=(0,m.Z)(B,R,O,!1,null,null,null),q=H.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{staticStyle:{"font-size":"12px","background-color":"#545c64","border-radius":"12px"}},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{staticStyle:{"font-size":"20px",color:"#ffd04b"},attrs:{span:10}},[e._v("没用一点模板前后端全靠手敲的公司考勤管理系统")]),a("el-col",{attrs:{span:6}}),a("el-col",{attrs:{span:2}},[a("el-dropdown",{on:{command:e.handleCommand}},[a("el-button",{staticStyle:{"border-radius":"15px"}},[e._v(" "+e._s(e.name)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出登录")])],1)],1)],1)],1)],1),a("el-container",{staticStyle:{height:"100vh","border-radius":"12px","background-color":"#f0f2f5"}},[a("el-aside",{staticStyle:{border:"2px solid #ffd04b","background-color":"#545c64","border-radius":"12px"},attrs:{width:"250px"}},[a("el-menu",{attrs:{router:"","default-openeds":[e.activeIndex],"unique-opened":"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen}},[a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[e._v("我的")]),a("el-menu-item",{attrs:{index:"/employer/MyInfo"}},[e._v("个人信息")]),a("el-menu-item",{attrs:{index:"/employer/CheckLeft"}},[e._v("查看剩余假期")])],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[e._v("打卡")]),a("el-menu-item",{attrs:{index:"/DaKa/EmployeDaKa"}},[e._v("打卡&打卡记录")])],2),a("el-submenu",{attrs:{index:"5"}},[a("template",{slot:"title"},[e._v("请假及审核")]),a("el-menu-item",{attrs:{index:"/apply/addApply"}},[e._v("添加申请")]),a("el-menu-item",{attrs:{index:"/apply/applyList"}},[e._v("请假记录")]),a("el-menu-item",{attrs:{index:"/apply/ManageApply",disabled:e.ismanager}},[e._v("部门经理审核申请")]),a("el-menu-item",{attrs:{index:"/apply/ManageApplyX",disabled:e.ismanager}},[e._v("总经理审核申请")])],2),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[e._v("人事")]),a("el-menu-item",{attrs:{index:"/employer/AddEmployer",disabled:e.isrenshi}},[e._v("添加员工")]),a("el-menu-item",{attrs:{index:"/employer/AllEmployeState",disabled:e.isrenshi}},[e._v("员工状态")]),a("el-menu-item",{attrs:{index:"/employer/EmployerInfo",disabled:e.isrenshi}},[e._v("员工详情")]),a("el-menu-item",{attrs:{index:"/employer/AllEmployer",disabled:e.isrenshi}},[e._v("查询所有人员")])],2),a("el-submenu",{attrs:{index:"6"}},[a("template",{slot:"title"},[e._v("财务")]),a("el-menu-item",{attrs:{index:"/DaKa/AllDaKa",disabled:e.iscaiwu}},[e._v("所有打卡记录")]),a("el-menu-item",{attrs:{index:"/apply/AllApplyList",disabled:e.iscaiwu}},[e._v("所有请假申请")])],2)],1)],1),a("el-main",[a("router-view")],1)],1)],1)},j=[],Y={data:function(){return{name:"",ismanager:!1,isrenshi:!1,iscaiwu:!1,isCollapse:!1,activeIndex:"3"}},created:function(){null==window.sessionStorage.getItem("empId")?this.$router.replace({path:"/login"}):this.name=window.sessionStorage.getItem("name"),1==window.sessionStorage.getItem("role")||2==window.sessionStorage.getItem("role")||3==window.sessionStorage.getItem("role")?(this.ismanager=!1,this.isrenshi=!1,this.iscaiwu=!1):4==window.sessionStorage.getItem("role")?(this.isrenshi=!1,this.ismanager=!0,this.iscaiwu=!0):5==window.sessionStorage.getItem("role")?(this.ismanager=!0,this.isrenshi=!0,this.iscaiwu=!1):(this.ismanager=!0,this.isrenshi=!0,this.iscaiwu=!0)},methods:{handleCommand:function(e){"logout"===e&&(window.sessionStorage.removeItem("empId"),window.sessionStorage.removeItem("name"),this.$router.replace({path:"/login"}))},handleOpen:function(e,t){this.activeIndex=e}}},J=Y,L=(0,m.Z)(J,z,j,!1,null,null,null),P=L.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("正在审核:")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page1,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"applyId",label:"申请序号"}}),a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"duringTime",label:"请假天数"}}),a("el-table-column",{attrs:{prop:"state",label:"请假状态",formatter:e.formatState}}),a("el-table-column",{attrs:{prop:"type",label:"请假类型",formatter:e.formatType}})],1),a("h3",[e._v("已处理:")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"applyRecordId",label:"申请序号"}}),a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"duringTime",label:"请假天数"}}),a("el-table-column",{attrs:{prop:"state",label:"请假状态",formatter:e.formatState}}),a("el-table-column",{attrs:{prop:"type",label:"请假类型",formatter:e.formatType}})],1)],1)},G=[],N={data:function(){return{page:[],page1:[]}},created:function(){this.loaddata()},methods:{tableRowClassName:function(e){var t=e.row;e.rowIndex;return 0===t.state?"warning-row":2===t.state?"success-row":"loading-row"},loaddata:function(){var e=this,t=window.sessionStorage.getItem("empId");this.$http.get("/getApplyRecordById/"+t).then((function(t){e.page=t.data})),this.$http.get("/queryApplyingById/"+t).then((function(t){e.page1=t.data}))},formatState:function(e){return 0==e.state?"拒绝":1==e.state?"审核中":2==e.state?"通过":void 0},formatType:function(e){return 0==e.type?"事假":1==e.type?"年假":2==e.type?"婚假":3==e.type?"产检":4==e.type?"产假":5==e.type?"哺乳":6==e.type?"陪产":7==e.type?"外出":void 0}}},V=N,X=(0,m.Z)(V,K,G,!1,null,null,null),U=X.exports,Q={},W=(0,m.Z)(Q,l,o,!1,null,null,null),ee=W.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{attrs:{stripe:"",data:e.page,border:""}},[a("el-table-column",{attrs:{prop:"applyId",label:"申请序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[e._v("姓名: "+e._s(t.row.name))]),a("p",[e._v("工号: "+e._s(t.row.account))]),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.applyId))])],1)])]}}])}),a("el-table-column",{attrs:{label:"请假日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.formatDate(t.row.startTime)))])]}}])}),a("el-table-column",{attrs:{prop:"duringTime",label:"请假天数"}}),a("el-table-column",{attrs:{prop:"type",label:"请假类型",formatter:e.formatType}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.pass(t.$index,t.row)}}},[e._v("通过")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.reject(t.$index,t.row)}}},[e._v("驳回")])]}}])})],1)},ae=[],le=a(3796),oe={data:function(){return{page:[]}},created:function(){this.loaddata()},methods:(n={loaddata:function(){var e=this;this.$http.get("/getApplyInfoForEvent").then((function(t){e.page=t.data}))},formatState:function(e){return 0==e.state?"拒绝":1==e.state?"审核中":2==e.state?"通过":void 0},formatType:function(e){return 0==e.type?"事假":1==e.type?"年假":2==e.type?"婚假":3==e.type?"产检":4==e.type?"产假":5==e.type?"哺乳":6==e.type?"陪产":7==e.type?"外出":void 0},formatDate:function(e){var t=new Date(e.startTime),a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return a+"-"+l+"-"+o}},(0,le.Z)(n,"formatDate",(function(e){var t=new Date(e),a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return a+"-"+l+"-"+o})),(0,le.Z)(n,"pass",(function(e,t){var a=this;this.$http.post("/checkApplyInfo/"+t.applyId+"/2").then((function(e){e.data?(a.$message({message:"已通过",type:"success"}),a.loaddata()):a.$message({message:"通过失败",type:"error"})}))})),(0,le.Z)(n,"reject",(function(e,t){var a=this;this.$http.post("/checkApplyInfo/"+t.applyId+"/0").then((function(e){e.data?(a.$message({message:"已驳回",type:"success"}),a.loaddata()):a.$message({message:"驳回失败",type:"error"})}))})),n)},ne=oe,re=(0,m.Z)(ne,te,ae,!1,null,null,null),se=re.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{attrs:{stripe:"",data:e.page,border:""}},[a("el-table-column",{attrs:{prop:"applyId",label:"申请序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[e._v("姓名: "+e._s(t.row.name))]),a("p",[e._v("工号: "+e._s(t.row.account))]),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.applyId))])],1)])]}}])}),a("el-table-column",{attrs:{label:"请假日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.formatDate(t.row.startTime)))])]}}])}),a("el-table-column",{attrs:{prop:"duringTime",label:"请假天数"}}),a("el-table-column",{attrs:{prop:"type",label:"请假类型",formatter:e.formatType}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.pass(t.$index,t.row)}}},[e._v("通过")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.reject(t.$index,t.row)}}},[e._v("驳回")])]}}])})],1)},pe=[],ce={data:function(){return{page:[]}},created:function(){this.loaddata()},methods:(r={loaddata:function(){var e=this;this.$http.get("/getApplyInfoForBig").then((function(t){e.page=t.data}))},formatState:function(e){return 0==e.state?"拒绝":1==e.state?"审核中":2==e.state?"通过":void 0},formatType:function(e){return 0==e.type?"事假":1==e.type?"年假":2==e.type?"婚假":3==e.type?"产检":4==e.type?"产假":5==e.type?"哺乳":6==e.type?"陪产":7==e.type?"外出":void 0},formatDate:function(e){var t=new Date(e.startTime),a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return a+"-"+l+"-"+o}},(0,le.Z)(r,"formatDate",(function(e){console.log(e);var t=new Date(e),a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return a+"-"+l+"-"+o})),(0,le.Z)(r,"pass",(function(e,t){var a=this;this.$http.post("/checkApplyInfo/"+t.applyId+"/2").then((function(e){e.data?(a.$message({message:"已通过",type:"success"}),a.loaddata()):a.$message({message:"通过失败",type:"error"})}))})),(0,le.Z)(r,"reject",(function(e,t){var a=this;this.$http.post("/checkApplyInfo/"+t.applyId+"/0").then((function(e){e.data?(a.$message({message:"已驳回",type:"success"}),a.loaddata()):a.$message({message:"驳回失败",type:"error"})}))})),r)},ue=ce,me=(0,m.Z)(ue,ie,pe,!1,null,null,null),de=me.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:10}},[e._v("员工状态 "+e._s(e.state)+" ")]),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:12}},[a("el-button",{attrs:{type:"primary",disabled:e.isHere},on:{click:function(t){return e.changeState(0)}}},[e._v("上班打卡")]),a("el-button",{attrs:{type:"success",disabled:!e.isHere},on:{click:function(t){return e.changeState(1)}}},[e._v("下班打卡")]),a("el-button",{attrs:{type:"danger",disabled:!e.isHere},on:{click:function(t){return e.changeState(2)}}},[e._v("外出打卡")]),a("el-button",{attrs:{type:"warning",disabled:e.isHere},on:{click:function(t){return e.changeState(3)}}},[e._v("返回打卡")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page,border:"","default-sort":{prop:"time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"time",label:"打卡时间",sortable:"",formatter:e.formatDate}}),a("el-table-column",{attrs:{prop:"type",label:"打卡类型",formatter:e.formatType}})],1)],1)},he=[],ye={data:function(){return{page:[],state:" ",isHere:!1}},created:function(){this.loaddata(),this.loadstate()},methods:{loaddata:function(){var e=this,t=window.sessionStorage.getItem("account");this.$http.get("/queryRecordsByActOrType?account="+t).then((function(t){e.page=t.data}))},loadstate:function(){var e=this,t=window.sessionStorage.getItem("empId");this.$http.get("/queryEmpStateById/"+t).then((function(t){0==t.data?(e.state="下班",e.isHere=!1):1==t.data?(e.state="在班",e.isHere=!0):2==t.data?(e.state="外出",e.isHere=!1):3==t.data?(e.state="假期",e.isHere=!1):4==t.data&&(e.state="请假",e.isHere=!1)}))},formatType:function(e){return 0==e.type?"上班打卡":1==e.type?"下班打卡":2==e.type?"外出打卡":3==e.type?"返回打卡":void 0},formatDate:function(e){var t=new Date(e.time),a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate(),n=t.getHours();n=n<10?"0"+n:n;var r=t.getMinutes();r=r<10?"0"+r:r;var s=t.getSeconds();return s=s<10?"0"+s:s,a+"-"+l+"-"+o+" "+n+":"+r+":"+s},changeState:function(e){var t=this,a=window.sessionStorage.getItem("empId");this.$http.post("/checkInOrOut/"+a+"/"+e).then((function(a){a.data?(t.$message({message:"操作成功",type:"success"}),t.loaddata(),t.loadstate(),0==e?t.isHere=!0:1==e||2==e?t.isHere=!1:3==e&&(t.isHere=!0)):t.$message({message:"操作失败",type:"error"})}))}}},ge=ye,be=(0,m.Z)(ge,fe,he,!1,null,null,null),ve=be.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page,border:"","default-sort":{prop:"time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"state",label:"状态",formatter:e.formatState}})],1)],1)},we=[],xe={data:function(){return{page:[]}},created:function(){this.loaddata()},methods:{loaddata:function(){var e=this;window.sessionStorage.getItem("account");this.$http.get("/queryEmpState?account=").then((function(t){console.log(t.data),e.page=t.data}))},formatType:function(e){return 0==e.type?"上班打卡":1==e.type?"下班打卡":2==e.type?"外出打卡":3==e.type?"返回打卡":void 0},formatState:function(e){return 0==e.state?"下班":1==e.state?"在班":2==e.state?"外出":3==e.state?"假期":4==e.state?"请假":void 0}}},$e=xe,Ie=(0,m.Z)($e,_e,we,!1,null,null,null),Se=Ie.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.seach}},[a("el-form-item",{attrs:{label:"员工工号"}},[a("el-input",{attrs:{placeholder:"请输入员工工号"},model:{value:e.seach.account,callback:function(t){e.$set(e.seach,"account",t)},expression:"seach.account"}})],1),a("el-form-item",{attrs:{label:"打卡类型"}},[a("el-select",{attrs:{placeholder:" -- "},model:{value:e.seach.state,callback:function(t){e.$set(e.seach,"state",t)},expression:"seach.state"}},[a("el-option",{attrs:{label:" -- ",value:""}}),a("el-option",{attrs:{label:"上班打卡",value:"0"}}),a("el-option",{attrs:{label:"下班打卡",value:"1"}}),a("el-option",{attrs:{label:"外出打卡",value:"2"}}),a("el-option",{attrs:{label:"返回打卡",value:"3"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1)],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page,border:"","default-sort":{prop:"time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"time",label:"打卡时间",sortable:"",formatter:e.formatDate}}),a("el-table-column",{attrs:{prop:"type",label:"打卡类型",formatter:e.formatType}})],1)],1)},Te=[],Ce={data:function(){return{page:[],seach:{account:"",state:""}}},created:function(){this.loaddata()},methods:{loaddata:function(){var e=this;this.$http.get("/queryAllRecords").then((function(t){console.log(t.data),e.page=t.data}))},formatType:function(e){return 0==e.type?"上班打卡":1==e.type?"下班打卡":2==e.type?"外出打卡":3==e.type?"返回打卡":void 0},formatDate:function(e){var t=new Date(e.time),a=t.getFullYear()+"-",l=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=t.getDate()+" ",n=t.getHours()+":",r=t.getMinutes()+":",s=t.getSeconds();return a+l+o+n+r+s},search:function(){var e=this;this.$http.get("/queryRecordsByActOrType?account="+this.seach.account+"&type="+this.seach.state).then((function(t){console.log(t.data),e.page=t.data}))}}},De=Ce,Ae=(0,m.Z)(De,ke,Te,!1,null,null,null),Ee=Ae.exports,Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{sm:12,lg:6}},[a("el-result",{attrs:{icon:e.page.leftBuRu>10?"success":"warning",title:e.page.leftBuRu+"天",subTitle:"剩余哺乳假"}},[a("template",{slot:"extra"},[a("el-button",{attrs:{disabled:0!=!e.page.leftBuRu,type:"primary",size:"medium"},on:{click:function(t){return e.toApply(5)}}},[e._v("请假")])],1)],2)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-result",{attrs:{icon:e.page.leftChanJia>10?"success":"warning",title:e.page.leftChanJia+"天",subTitle:"剩余产假"}},[a("template",{slot:"extra"},[a("el-button",{attrs:{disabled:0!=!e.page.leftChanJia,type:"primary",size:"medium"},on:{click:function(t){return e.toApply(4)}}},[e._v("请假")])],1)],2)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-result",{attrs:{icon:e.page.leftChanJian>10?"success":"warning",title:e.page.leftChanJian+"天",subTitle:"剩余产检假"}},[a("template",{slot:"extra"},[a("el-button",{attrs:{disabled:0!=!e.page.leftChanJian,type:"primary",size:"medium"},on:{click:function(t){return e.toApply(3)}}},[e._v("请假")])],1)],2)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-result",{attrs:{icon:e.page.leftHunJia>10?"success":"warning",title:e.page.leftHunJia+"天",subTitle:"剩余婚假"}},[a("template",{slot:"extra"},[a("el-button",{attrs:{disabled:0!=!e.page.leftHunJia,type:"primary",size:"medium"},on:{click:function(t){return e.toApply(2)}}},[e._v("请假")])],1)],2)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-result",{attrs:{icon:e.page.leftPeiChan>10?"success":"warning",title:e.page.leftPeiChan+"天",subTitle:"剩余陪产假"}},[a("template",{slot:"extra"},[a("el-button",{attrs:{disabled:0!=!e.page.leftPeiChan,type:"primary",size:"medium"},on:{click:function(t){return e.toApply(6)}}},[e._v("请假")])],1)],2)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-result",{attrs:{icon:e.page.leftYear>10?"success":"warning",title:e.page.leftYear+"天",subTitle:"剩余年假"}},[a("template",{slot:"extra"},[a("el-button",{attrs:{disabled:0!=!e.page.leftYear,type:"primary",size:"medium"},on:{click:function(t){return e.toApply(1)}}},[e._v("请假")])],1)],2)],1)],1)},Fe=[],Re={data:function(){return{page:[]}},created:function(){this.loaddata()},methods:{loaddata:function(){var e=this,t=window.sessionStorage.getItem("empId");this.$http.get("/getLeftTimeById/"+t).then((function(t){console.log(t.data),e.page=t.data}))},toApply:function(e){this.$router.push({path:"/apply/addApply",query:{type:e}})}}},Oe=Re,Me=(0,m.Z)(Oe,Ze,Fe,!1,null,null,null),Be=Me.exports,He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.seach}},[a("el-form-item",{attrs:{label:"员工类型"}},[a("el-select",{attrs:{placeholder:" -- "},model:{value:e.seach.state,callback:function(t){e.$set(e.seach,"state",t)},expression:"seach.state"}},[a("el-option",{attrs:{label:"员工",value:"/queryAllEmployeeInfo"}}),a("el-option",{attrs:{label:"经理",value:"/queryAllEmployerInfo"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.loaddate}},[e._v("查询")])],1)],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page,border:""}},[a("el-table-column",{attrs:{prop:"empId",label:"员工ID"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"gender",label:"性别",formatter:e.formatGender}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),a("el-table-column",{attrs:{prop:"role",label:"职位",formatter:e.formatRole}})],1)],1)},qe=[],ze={data:function(){return{seach:{account:"",state:"/queryAllEmployeeInfo"},page:{}}},created:function(){this.loaddate()},methods:{loaddate:function(){var e=this;this.$http.get(this.seach.state).then((function(t){console.log(t.data),e.page=t.data}))},formatGender:function(e){return 0==e.gender?"女":"男"},formatRole:function(e){return 0==e.role?"员工":1==e.role?"部门经理":2==e.role?"副总经理":3==e.role?"总经理":4==e.role?"人事人员":5==e.role?"财务人员":void 0}}},je=ze,Ye=(0,m.Z)(je,He,qe,!1,null,null,null),Je=Ye.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.seach}},[a("el-form-item",{attrs:{label:"员工ID"}},[a("el-input",{attrs:{placeholder:"请输入员工ID"},model:{value:e.seach.account,callback:function(t){e.$set(e.seach,"account",t)},expression:"seach.account"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.loaddate}},[e._v("查询")])],1)],1)],1),a("el-descriptions",{staticClass:"margin-top",attrs:{title:e.page.name,column:3,border:""}},[a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-user"}),e._v(" empId ")]),a("span",[e._v(e._s(e.page.empId))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-user"}),e._v(" 用户名 ")]),a("span",[e._v(e._s(e.page.name))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-mobile-phone"}),e._v(" 手机号 ")]),a("span",[e._v(e._s(e.page.phone))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-time"}),e._v(" 入职时间 ")]),a("span",[e._v(e._s(e.formatDate(e.page.createTime)))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-tickets"}),e._v(" 角色 ")]),a("el-tag",{attrs:{size:"small"}},[e._v(e._s(e.formatRole(e.page.role)))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-message"}),e._v(" 邮箱 ")]),e._v(" "+e._s(e.page.email)+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-male"}),e._v(" 性别 ")]),e._v(" "+e._s(e.formatGender(e.page.gender))+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-loading"}),e._v(" 密码 ")]),e._v(" "+e._s(e.page.password)+" ")],2)],1)],1)},Pe=[],Ke={data:function(){return{seach:{account:"0"},page:{}}},created:function(){this.loaddate()},methods:{loaddate:function(){var e=this;this.$http.get("/queryEmpInfoById/"+this.seach.account).then((function(t){e.page=t.data}))},formatDate:function(e){var t=new Date(e),a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return a+"-"+l+"-"+o},formatRole:function(e){return 0==e?"员工":1==e?"部门经理":2==e?"副总经理":3==e?"总经理":4==e?"人事人员":5==e?"财务人员":void 0},formatGender:function(e){return 0==e?"女":"男"}}},Ge=Ke,Ne=(0,m.Z)(Ge,Le,Pe,!1,null,null,null),Ve=Ne.exports,Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-descriptions",{staticClass:"margin-top",attrs:{title:e.page.name,column:3,border:""}},[a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-user"}),e._v(" empId ")]),a("span",[e._v(e._s(e.page.empId))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-user"}),e._v(" 用户名 ")]),a("span",[e._v(e._s(e.page.name))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-mobile-phone"}),e._v(" 手机号 ")]),a("span",[e._v(e._s(e.page.phone))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-time"}),e._v(" 入职时间 ")]),a("span",[e._v(e._s(e.formatDate(e.page.createTime)))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-tickets"}),e._v(" 角色 ")]),a("el-tag",{attrs:{size:"small"}},[e._v(e._s(e.formatRole(e.page.role)))])],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-message"}),e._v(" 邮箱 ")]),e._v(" "+e._s(e.page.email)+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-male"}),e._v(" 性别 ")]),e._v(" "+e._s(e.formatGender(e.page.gender))+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-loading"}),e._v(" 密码 ")]),e._v(" "+e._s(e.page.password)+" ")],2)],1)],1)},Ue=[],Qe={data:function(){return{seach:{account:"0"},page:{}}},created:function(){this.loaddate()},methods:{loaddate:function(){var e=this;this.seach.account=window.sessionStorage.getItem("empId"),this.$http.get("/queryEmpInfoById/"+this.seach.account).then((function(t){e.page=t.data}))},formatDate:function(e){var t=new Date(e),a=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return a+"-"+l+"-"+o},formatRole:function(e){return 0==e?"员工":1==e?"部门经理":2==e?"副总经理":3==e?"总经理":4==e?"人事人员":5==e?"财务人员":void 0},formatGender:function(e){return 0==e?"女":"男"}}},We=Qe,et=(0,m.Z)(We,Xe,Ue,!1,null,null,null),tt=et.exports,at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.seach}},[a("el-form-item",{attrs:{label:"员工ID"}},[a("el-input",{attrs:{placeholder:"请输入员工ID"},model:{value:e.seach.account,callback:function(t){e.$set(e.seach,"account",t)},expression:"seach.account"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.loaddata}},[e._v("查询")])],1)],1)],1),a("h3",[e._v("正在审核:")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page1,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"applyId",label:"申请序号"}}),a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"duringTime",label:"请假天数"}}),a("el-table-column",{attrs:{prop:"state",label:"请假状态",formatter:e.formatState}}),a("el-table-column",{attrs:{prop:"type",label:"请假类型",formatter:e.formatType}})],1),a("h3",[e._v("已处理:")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"applyRecordId",label:"申请序号"}}),a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"account",label:"工号"}}),a("el-table-column",{attrs:{prop:"duringTime",label:"请假天数"}}),a("el-table-column",{attrs:{prop:"state",label:"请假状态",formatter:e.formatState}}),a("el-table-column",{attrs:{prop:"type",label:"请假类型",formatter:e.formatType}})],1)],1)},lt=[],ot={data:function(){return{page:[],page1:[],seach:{account:""}}},created:function(){},methods:{tableRowClassName:function(e){var t=e.row;e.rowIndex;return 0===t.state?"warning-row":2===t.state?"success-row":"loading-row"},loaddata:function(){var e=this;this.$http.get("/getApplyRecordById/"+this.seach.account).then((function(t){e.page=t.data})),this.$http.get("/queryApplyingById/"+this.seach.account).then((function(t){e.page1=t.data}))},formatState:function(e){return 0==e.state?"拒绝":1==e.state?"审核中":2==e.state?"通过":void 0},formatType:function(e){return 0==e.type?"事假":1==e.type?"年假":2==e.type?"婚假":3==e.type?"产检":4==e.type?"产假":5==e.type?"哺乳":6==e.type?"陪产":7==e.type?"外出":void 0},search:function(){var e=this;this.$http.get("/queryRecordsByActOrType?account="+this.seach.account+"&type="+this.seach.state).then((function(t){console.log(t.data),e.page=t.data}))}}},nt=ot,rt=(0,m.Z)(nt,at,lt,!1,null,null,null),st=rt.exports;s["default"].use(h.Z);var it=new h.Z({routes:[{path:"/",name:"登录",component:q},{path:"/login",name:"登录",component:q},{path:"/home",name:"",component:P},{path:"/home",component:P,name:"管理",children:[{path:"/apply/addApply",name:"添加申请",component:F},{path:"/employer/AddEmployer",name:"添加员工",component:T},{path:"/blogDetail",name:"博客详情",component:w},{path:"/apply/applyList",name:"请假记录",component:U},{path:"/test",name:"测试",component:ee},{path:"/apply/ManageApply",name:"审核请假",component:se},{path:"/apply/ManageApplyX",name:"审核3天以上请假",component:de},{path:"/DaKa/EmployeDaKa",name:"员工打卡",component:ve},{path:"/employer/AllEmployeState",name:"员工状态",component:Se},{path:"/Daka/AllDaKa",name:"员工状态",component:Ee},{path:"/employer/CheckLeft",name:"剩余假期",component:Be},{path:"/employer/AllEmployer",name:"查询所有人员",component:Je},{path:"/employer/EmployerInfo",name:"查询人员详情",component:Ve},{path:"/employer/MyInfo",name:"我的详情",component:tt},{path:"/apply/AllApplyList",name:"所有请假申请",component:st}]}]}),pt=a(4549),ct=a.n(pt);s["default"].use(ct());var ut=a(6166),mt=a.n(ut);s["default"].config.productionTip=!1,s["default"].prototype.$http=mt().create({baseURL:"http://localhost:8082/"}),new s["default"]({router:it,render:function(e){return e(f)}}).$mount("#app")}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,l,o,n){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],o=e[c][1],n=e[c][2];for(var s=!0,i=0;i<l.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[i])}))?l.splice(i--,1):(s=!1,n<r&&(r=n));if(s){e.splice(c--,1);var p=o();void 0!==p&&(t=p)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[l,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,n,r=l[0],s=l[1],i=l[2],p=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var c=i(a)}for(t&&t(l);p<r.length;p++)n=r[p],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},l=self["webpackChunkelement"]=self["webpackChunkelement"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(6895)}));l=a.O(l)})();
//# sourceMappingURL=app-legacy.fac0c883.js.map