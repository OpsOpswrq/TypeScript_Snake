class Food{
    element:HTMLElement; // 指定元素类型
    constructor() {
        this.element = document.getElementById('food')!;   // 使null和undefined类型可以赋值给其他类型并通过编译，表示该变量值可空
    }
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    change(){
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = left + 'px';
    }
}
export default Food;