import { _decorator, Component, Node, Collider2D, Contact2DType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('logicBoard')
export class logicBoard extends Component {

    @property({type: Node})
    private board: Node;
    
    start() { 
        let collider = this.board.getComponent(Collider2D)

        this.board.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onEndContact, this)
        console.log(collider)
        collider.on('onCollisionStay', this.onEndContact, this);
    }
    private onEndContact(selfCollider: Collider2D, otherCollider: Collider2D) {

        if(otherCollider.node.name === "bolt") {
            console.log('bolt')
            // otherCollider.position = v2(100, 100)
        }
        if(otherCollider.node.name === "boltRed") {
            console.log('boltRed')
            this.board.rotation =  45
            // otherCollider.position = new 
            // otherCollider.position = v2(100, 100)
        }
        console.log('coll')
    }

    update(deltaTime: number) {
    }
}


