import Demo from "./demo";
import Card from "./card";
import Input from "./input";
import Radio from "./radio";
import { Tabs, Tab } from "./tabs"
import { Checkboxs, Checkbox } from "./checkboxs"


const components = {
    Demo,
    Card,
    Input,
    Tabs,
    Tab,
    Radio,
    Checkboxs,
    Checkbox
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