import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loadScen')
export class loadScen extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
    startGame () {
        director.loadScene('playGame')
    }
}


