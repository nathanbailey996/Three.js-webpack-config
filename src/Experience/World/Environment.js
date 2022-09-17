import * as THREE from 'three'
import Experience from '../Experience'

export default class Environment{
constructor(){
    this.experience = new Experience()
    this.setEnvironment()
}

setEnvironment(){
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    this.directionalLight.position.set(0,4,2)
    this.experience.scene.add(this.directionalLight)


}
}