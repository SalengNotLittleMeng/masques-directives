import { App } from 'vue'
const importModules:Record<string,any> = import.meta.globEager('./directive/*.js')
const modules:any={}
Object.keys(importModules).forEach((path:string)=>{
    const key=path.split('/')[2].slice(0,-3)
    modules[key]=importModules[path].default
})
export default class  HandlyDirective{
    public options:any
    constructor(options:any){
        this.options=options
    }
    install(Vue:App):void{
        Object.keys(modules).forEach((directiveName:string)=>{
            Vue.directive(directiveName,modules[directiveName])
    })
    }
}