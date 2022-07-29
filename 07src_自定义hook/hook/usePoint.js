export default function savePoint(){
    let point = reactive({
        x: 0,
        y: 0,
    });
    function savePoint(event) {
        (point.x = event.pageX),
            (point.y = event.pageY),
            console.log(event.pageX, event.pageY);
    }

    //实现鼠标打点相关的生命周期钩子
    onMounted(() => {
        window.addEventListener("click", savePoint);
    });

    onBeforeMount(() => {
        window.removeEventListener("click", savePoint);
    });

    //返回一个对象
    return {
        savePoint,
    };
}