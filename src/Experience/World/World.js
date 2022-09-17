import * as THREE from 'three'
import Experience from '../Experience'
import Environment from './Environment'

export default class World{
    constructor(){
        this.experience = new Experience()

        this.experience.loaders.on('ready', ()=>{
            this.setWorld()
        })
    }

    setWorld(){
        this.environment = new Environment()

        this.test = new THREE.Mesh(
            new THREE.BoxGeometry(5,5,5), 
            new THREE.MeshBasicMaterial({color:0xff0000})
        )
        this.test.position.z = -10
        this.experience.scene.add(this.test)
    }

    update(){

    }


}