import Demo from "./demo";
import Card from "./card";
import Input from "./input";
import { Tabs, Tab } from "./tabs"


const components = {
    Demo,
    Card,
    Input,
    Tabs,
    Tab
}

const install = function(Vue) {
    if(install.installed) return
    // Object.keys(components) --> [Demo, Card, Input, Tabs, Tab]
    // components[key] --- > 取得Demo对象
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name,components[key]);
    })
}


const API = {
    install
}

export default API