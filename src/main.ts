import { App } from 'vue'
interface Module{
    default:any
}
const importModules:Record<string,Module> = import.meta.globEager('./directive/*.js')
const modules:Record<string,Module>={}
Object.keys(importModules).forEach((path:string)=>{
    const key:string=path.split('/')[2].slice(0,-3)
    modules[key]=importModules[path].default
})
export default class  HandlyDirective{
    public options:any
    constructor(options:any){
        this.options=options
    }
    install(Vue:App):void{
        Object.keys(modules).forEach((directiveName:string)=>{
            Vue.directive(directiveName,modules[directiveName] as any)
    })
    }
}