import { App } from 'vue'
export default class  HandlyDirective{
    public options:any
    constructor(options:any){
        this.options=options
    }
    install(Vue:App):void{
        console.log(Vue)
    }
}