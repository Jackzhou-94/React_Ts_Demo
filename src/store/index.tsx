import { observable } from "mobx";

class Tool {
    @observable token: string = '66'
    public setToken = () => {
        this.token = 'React'
    }
}
const tools = new Tool
export { tools }