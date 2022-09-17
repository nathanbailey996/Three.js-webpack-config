import * as THREE from 'three'
import Experience from '../Experience'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default class Camera{
    constructor(){
        this.experience = new Experience()

        this.setCamera()
    }

    setCamera(){
        this.instance = new THREE.PerspectiveCamera(75, this.experience.sizes.width / this.experience.sizes.height, 0.1, 100)

        this.controls = new OrbitControls(this.instance, this.experience.canvas)
        this.experience.scene.add(this.instance)
    }

    resize(){
        this.instance.aspect = this.experience.sizes.width / this.experience.sizes.height
        this.instance.updateProjectionMatrix()
    }

   
update(){
this.controls.update()
}

   
}