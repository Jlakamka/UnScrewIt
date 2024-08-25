import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('logicBolt')
export class logicBolt extends Component {
    @property({type:Node})
    private bolt: Node;
    // @property({type:Prefab})
    // private prefab : Prefab;
    start() {
    }

    update(deltaTime: number) {
        
    }
   public destroyBolt() {
    this.bolt.destroy()
    // this.prefab.destroy()
    console.log('destroy')
    }
}


