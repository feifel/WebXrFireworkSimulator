var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene, Vector3, HemisphericLight, Mesh, MeshBuilder, FreeCamera, StandardMaterial } from "@babylonjs/core";
import { AdvancedDynamicTexture, StackPanel, Control, TextBlock, ColorPicker } from "@babylonjs/gui";
class App {
    constructor() {
        Object.defineProperty(this, "scene", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);
        var engine = new Engine(canvas, true);
        this.scene = new Scene(engine);
        var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas, true);
        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), this.scene);
        light.intensity = 0.7;
        var sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, this.scene);
        sphere.position.y = 1;
        sphere.material = new StandardMaterial("sphereMat", this.scene);
        var plane = Mesh.CreatePlane("plane", 1, this.scene);
        plane.position = new Vector3(1.4, 1.5, 0.4);
        var advancedTexture = AdvancedDynamicTexture.CreateForMesh(plane);
        var panel = new StackPanel();
        advancedTexture.addControl(panel);
        var header = new TextBlock();
        header.text = "Color GUI";
        header.height = "100px";
        header.color = "white";
        header.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        header.fontSize = "120";
        panel.addControl(header);
        var picker = new ColorPicker();
        var material = sphere.material;
        picker.value = material.diffuseColor;
        picker.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        picker.height = "350px";
        picker.width = "350px";
        picker.onValueChangedObservable.add(function (value) {
            material.diffuseColor.copyFrom(value);
        });
        panel.addControl(picker);
        window.addEventListener("keydown", (ev) => {
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (this.scene.debugLayer.isVisible()) {
                    this.scene.debugLayer.hide();
                }
                else {
                    this.scene.debugLayer.show();
                }
            }
        });
        engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
    createDefaultXRExperienceAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = this.scene.createDefaultEnvironment();
            const xrHelper = yield this.scene.createDefaultXRExperienceAsync({
                floorMeshes: [environment.ground]
            });
        });
    }
}
var app = new App();
app.createDefaultXRExperienceAsync();
