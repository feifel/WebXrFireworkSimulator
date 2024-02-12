import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene, Vector3, HemisphericLight, Mesh, MeshBuilder, FreeCamera, StandardMaterial } from "@babylonjs/core";
import { AdvancedDynamicTexture, StackPanel, Control, TextBlock, ColorPicker} from "@babylonjs/gui";

class App {
    public scene: Scene;
    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);
        this.scene = new Scene(engine);

        // This creates and positions a free camera (non-mesh)
        var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);

        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), this.scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'sphere' shape. Params: name, options, scene
        var sphere = MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, this.scene);

        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;

        sphere.material = new StandardMaterial("sphereMat", this.scene);
            
        // GUI
        var plane = Mesh.CreatePlane("plane", 1, this.scene);
        plane.position = new Vector3(1.4, 1.5, 0.4)
        var advancedTexture = AdvancedDynamicTexture.CreateForMesh(plane);
        var panel = new StackPanel();    
        advancedTexture.addControl(panel);  
        var header = new TextBlock();
        header.text = "Color GUI";
        header.height = "100px";
        header.color = "white";
        header.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        header.fontSize = "120"
        panel.addControl(header); 
        var picker = new ColorPicker();
        var material = <StandardMaterial>sphere.material;
        picker.value = material.diffuseColor;
        picker.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        picker.height = "350px";
        picker.width = "350px";
        picker.onValueChangedObservable.add(function(value) {
            material.diffuseColor.copyFrom(value);
        });
        panel.addControl(picker);
    

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

        // run the main render loop
        engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
    async createDefaultXRExperienceAsync() {        
        const environment = this.scene.createDefaultEnvironment();
        // XR
        const xrHelper = await this.scene.createDefaultXRExperienceAsync({
            floorMeshes: [environment.ground]
        });
    }
}
var app = new App();
app.createDefaultXRExperienceAsync();