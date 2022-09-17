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
            new THREE.SphereGeometry(5,50,50), 
            new THREE.MeshBasicMaterial({map:this.experience.loaders.items.earth})
        )

        this.test.position.z = -20
        this.experience.scene.add(this.test)
    }

    update(){

    }


}