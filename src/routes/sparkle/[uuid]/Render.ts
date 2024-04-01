import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, FreeCamera, ParticleSystem, Texture, Color4, PointLight, StandardMaterial, Color3 } from "@babylonjs/core";

export default class Render {
    canvas: HTMLCanvasElement
    engine: Engine;
	scene: Scene;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.engine = new Engine(this.canvas, true);
        this.scene = new Scene(this.engine);
    }

    async setup() {
        // Setup environment
        var camera = new ArcRotateCamera("ArcRotateCamera", 2, 2, 6, new Vector3(0, 0, 0), this.scene);
        camera.attachControl(this.canvas, true);

        // Create a particle system
        var particleSystem = new ParticleSystem("particles", 2000, this.scene);

        //Texture of each particle
        particleSystem.particleTexture = new Texture("/textures/flare.png", this.scene);

        // Where the particles come from
        particleSystem.emitter = Vector3.Zero(); // the starting location

        // Colors of all particles
        particleSystem.color1 = new Color4(0.99, 0.9, 0.08);
        particleSystem.color2 = new Color4(0.69, 0.22, 0.08);
        particleSystem.colorDead = new Color4(0.2, 0, 0, 0);

        // Set the gravity of all particles
        particleSystem.gravity = new Vector3(0, -9.81, 0);

        // Size of each particle (random between...
        particleSystem.minSize = 0.005;
        particleSystem.maxSize = 0.05;

        // Life time of each particle (random between...
        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = 1.0;

        // Emission rate
        particleSystem.emitRate = 10000;

        /******* Emission Space ********/
        particleSystem.createPointEmitter(new Vector3(-3, 8, 3), new Vector3(3, 8, -3));

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
            const xrHelper = await this.scene.createDefaultXRExperienceAsync({
                floorMeshes: [environment.ground]
            });
        }
    }

    // run the main render loop
	run(): void {
		this.engine.runRenderLoop(() => this.scene.render());
	}
}