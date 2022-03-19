import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({ providedIn: 'root' })
export class BackgroundProvider {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private geometry!: THREE.PlaneBufferGeometry | THREE.BoxGeometry;
  private light!: THREE.SpotLight;
  private material!: any;
  private mesh!: THREE.Mesh;
  private renderer!: THREE.WebGLRenderer;
  private clock!: THREE.Clock;

  public init(canvas: HTMLCanvasElement) {
    console.log('hi');
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.light = new THREE.SpotLight(0xffffff, 1);

    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 1;
    const far = 100;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.geometry = new THREE.PlaneBufferGeometry(30, 10);
    this.material = new THREE.ShaderMaterial({
      vertexShader: `
precision mediump float;
varying vec2 vUv;

void main() {
vUv = uv;
gl_Position = projectionMatrix * modelViewMatrix *    vec4(position, 1.0);
}`,
      fragmentShader: `
#ifdef GL_ES
precision highp float;
#endif

#define PI2 6.28318530718
#define MAX_ITER 5

uniform float uTime;
uniform vec2 uResolution;
uniform float spectrum;


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float uTime = uTime * .1;
    vec2 uv = fragCoord.xy / uResolution.xy;

    vec2 p = mod(uv * PI2, PI2) - 100.0  ;
    vec2 i = vec2(p);
    float c = 0.5;
    float inten =  .0094;

    for (int n = 0; n < MAX_ITER; n++) {
        float t = uTime * (1.5 - (2.2 / float(n + 122)));
        i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
        c += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten + spectrum), p.y / (cos(i.y + t) / inten)));
    }

    c /= float(MAX_ITER);
    c = 1.10-pow(c, 1.26);
    vec3 colour = vec3(0.098+pow(abs(c), 0.2), 0.098+pow(abs(c), 0.2), .098+pow(abs(c), 0.2));

    fragColor = vec4(colour, 1.3);
}


void main( void ) {
    mainImage(gl_FragColor, gl_FragCoord.xy);}
`,
      uniforms: {
        uTime: { value: 0.0 },
        uResolution: { value: { x: window.innerWidth, y: window.innerHeight } },
      },
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene.add(this.camera);
    this.scene.add(this.mesh);
    this.scene.add(this.light);
    this.mesh.position.set(0, 0, 0);
    this.camera.position.set(0, 0, 10);
    this.light.position.set(0, 0, 10);

    this.light.lookAt(this.mesh.position);
    this.camera.lookAt(this.mesh.position);

    this.clock = new THREE.Clock();

    this.addEvents();
  }

  public run() {
    window.requestAnimationFrame(this.run.bind(this));
    this.material.uniforms.uTime.value = this.clock.getElapsedTime();
    this.renderer.render(this.scene, this.camera);
  }

  private addEvents(): void {
    window.addEventListener('resize', this.onResize.bind(this), false);
  }

  private onResize() {
    this.material.uniforms.uResolution = {
      value: { x: window.innerWidth, y: window.innerHeight },
    };
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
