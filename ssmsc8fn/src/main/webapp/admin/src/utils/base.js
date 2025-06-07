const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmsc8fn/",
            name: "ssmsc8fn",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmsc8fn/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的校园商铺系统"
        } 
    }
}
export default base
