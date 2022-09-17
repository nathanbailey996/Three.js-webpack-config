import * as THREE from 'three'
import Experience from '../Experience'

export default class Renderer{
    constructor(){
        this.experience = new Experience()

        this.setRenderer()

    
    }

    setRenderer(){

       this.renderer = new THREE.WebGLRenderer({
           canvas:this.experience.canvas, 
           antialias:true
       })
       this.renderer.outputEncoding = THREE.sRGBEncoding
    //    this.renderer.physicallyCorrectLights = true
    //    this.renderer.shadowMap.enabled = true
    //    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    //    this.renderer.toneMapping = THREE.CineonToneMapping
    //    this.renderer.toneMappingExposure = 1.25
       this.renderer.setSize(this.experience.sizes.width, this.experience.sizes.height)
       this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    }

    resize(){
        this.renderer.setSize(this.experience.sizes.width, this.experience.sizes.height)
       this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    update(){
        this.renderer.render(this.experience.scene, this.experience.camera.instance)
    }
    

}