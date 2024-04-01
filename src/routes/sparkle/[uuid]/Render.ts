import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import * as BABYLON from '@babylonjs/core';
import { base } from '$app/paths';

export default class Render {
    canvas: HTMLCanvasElement
    engine: BABYLON.Engine;
	scene: BABYLON.Scene;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = new BABYLON.Scene(this.engine);
    }

    async setup() {
        // Setup environment
        var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 1.5, 4, new BABYLON.Vector3(0, 0.0, 0), this.scene);
        camera.attachControl(this.canvas, true);

        // Create a particle system
        var particleSystem = new BABYLON.ParticleSystem("particles", 2000, this.scene);

        //Texture of each particle
        particleSystem.particleTexture = new BABYLON.Texture(base + "/textures/sparkle.png", this.scene);

        // Where the particles come from
        particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

        // Colors of all particles
        particleSystem.color1 = new BABYLON.Color4(0.99, 0.9, 0.08);
        particleSystem.color2 = new BABYLON.Color4(0.69, 0.22, 0.08);
        particleSystem.colorDead = new BABYLON.Color4(0.2, 0, 0, 0);

        // Set the gravity of all particles
        particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

        // Size of each particle (random between...
        particleSystem.minSize = 0.005;
        particleSystem.maxSize = 0.05;

        // Life time of each particle (random between...
        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = 1.0;

        // Emission rate
        particleSystem.emitRate = 10000;

        /******* Emission Space ********/
        particleSystem.createPointEmitter(new BABYLON.Vector3(-3, 8, 3), new BABYLON.Vector3(3, 8, -3));

        // Speed
        particleSystem.minEmitPower = 0.4;
        particleSystem.maxEmitPower = 0.6;
        particleSystem.updateSpeed = 0.008;

        // Start the particle system
        particleSystem.start();
        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (this.scene.debugLayer.isVisible()) {
                    this.scene.debugLayer.hide();
                } else {
                    this.scene.debugLayer.show();
                }
            }
        });	

        // add XR support
        const environment = this.scene.createDefaultEnvironment();
        if(environment && environment.ground) {
            environment.ground.material = new BABYLON.StandardMaterial("groundMat");
            environment.ground.material.backFaceCulling = false;
            const xrHelper = await this.scene.createDefaultXRExperienceAsync({
                floorMeshes: [environment.ground]
            });
            this.scene.addMesh(environment.ground);
        }
    }

    // run the main render loop
	run(): void {
		this.engine.runRenderLoop(() => this.scene.render());
	}
}