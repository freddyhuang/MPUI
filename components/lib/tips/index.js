import Vue from 'vue';
import Tips from './src/main.vue';

function initTips(props) {
    let duration = props.duration ? props.duration : 2000;
    const vm = new Vue({
       render: (h) => h(Tips, { props }), 
    }).$mount();

    // 挂载到body上
    document.body.appendChild(vm.$el);

    const node = vm.$children[0];
    // 显示弹窗
    node.visible = true;

    // 定时器关闭弹窗
    setTimeout(() => {
        node.visible = false;
        setTimeout(() => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
        }, 400);
    }, duration);

    return node;
}



// Tips.install = function(Vue){
//    Vue.prototype.$tips = initTips;
// }

export default {
    install(Vue) {
        Vue.prototype.$tips = initTips;
    },
};