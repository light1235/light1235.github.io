/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/shader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/shader.js":
/*!*****************************!*\
  !*** ./assets/js/shader.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/build/three.module.js */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaders/fragment.glsl */ \"./assets/shaders/fragment.glsl\");\n/* harmony import */ var _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaders/vertex.glsl */ \"./assets/shaders/vertex.glsl\");\n/* harmony import */ var _shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__);\n\nconst scene = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\nconst camera = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__[\"OrthographicCamera\"](-1, 1, 1, -1, 0.1, 100);\nlet renderer = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.setClearColor(0xFFFCFF);\nlet doc = document.querySelector('.main');\ndoc.appendChild(renderer.domElement);\nwindow.addEventListener('resize', function () {\n  let width = window.innerWidth;\n  let height = window.innerHeight;\n  renderer.setSize(width, height);\n  camera.aspect = width / height;\n  camera.updateProjectionMatrix();\n});\nvar stats = new Stats();\nstats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom\n\ndocument.body.appendChild(stats.dom);\n\n\nconst geometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__[\"PlaneGeometry\"](2, 2);\nconst material = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n  fragmentShader: (_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_1___default()),\n  vertexShader: (_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_2___default()),\n  uniforms: {\n    iTime: {\n      value: 0\n    },\n    iMouse: {\n      value: {\n        x: 0.0,\n        y: 0.0\n      }\n    },\n    iResolution: {\n      value: {\n        x: innerWidth,\n        y: window.innerHeight\n      }\n    }\n  }\n});\nconst mesh = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\nscene.add(mesh);\nconst timerMin = document.querySelector('.TERADEK_COUNTDOWN_17 .minutes');\nconst timerHour = document.querySelector('.TERADEK_COUNTDOWN_17 .hours');\nconst timerSeconds = document.querySelector('.TERADEK_COUNTDOWN_17 .seconds');\nsetInterval(() => {\n  let now = new Date();\n  timerMin.innerHTML = now.getMinutes();\n  timerHour.innerHTML = now.getHours();\n  timerSeconds.innerHTML = now.getSeconds();\n}, 1000);\ncamera.position.z = 20;\n\nconst animate = function () {\n  requestAnimationFrame(animate);\n  stats.begin();\n  material.uniforms.iTime.value += 0.02;\n  stats.end();\n  renderer.render(scene, camera);\n};\n\nanimate();\n\n//# sourceURL=webpack:///./assets/js/shader.js?");

/***/ }),

/***/ "./assets/shaders/fragment.glsl":
/*!**************************************!*\
  !*** ./assets/shaders/fragment.glsl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#ifdef GL_ES\\r\\nprecision mediump float;\\r\\n#endif\\r\\n\\r\\nvarying vec2 vUv;\\r\\nuniform vec2 iResolution;\\r\\nuniform float iTime;\\r\\nuniform vec4 iMouse;\\r\\nuniform sampler2D iChannel0,iChannel1,iChannel2;\\r\\nuniform vec3 iChannelResolution;\\r\\n\\r\\n\\r\\nvec3 firePalette(float i){\\r\\n\\r\\n float T = 1400. + 1300.*i; // Temperature range (in Kelvin).\\r\\n vec3 L = vec3(7.4, 5.6, 4.4); // Red, green, blue wavelengths (in hundreds of nanometers).\\r\\n L = pow(L,vec3(5)) * (exp(1.43876719683e5/(T*L)) - 1.);\\r\\n return 1. - exp(-5e8/L); // Exposure level. Set to \\\"50.\\\" For \\\"70,\\\" change the \\\"5\\\" to a \\\"7,\\\" etc.\\r\\n}\\r\\n\\r\\n/*\\r\\nvec3 firePalette(float i){\\r\\n\\r\\n    float T = 1400. + 1300.*i; // Temperature range (in Kelvin).\\r\\n    // Hardcode red, green and blue wavelengths (in hundreds of nanometers).\\r\\n    vec3 L = (exp(vec3(19442.7999572, 25692.271372, 32699.2544734)/T) - 1.);\\r\\n    // Exposure level. Set to \\\"50\\\" For \\\"70,\\\" change the \\\".5\\\" to a \\\".7,\\\" etc.\\r\\n    return 1. - exp(-vec3(22532.6051122, 90788.296915, 303184.239775)*2.*.5/L);\\r\\n}\\r\\n*/\\r\\n\\r\\n// Hash function. This particular one probably doesn't disperse things quite as nicely as some\\r\\n// of the others around, but it's compact, and seems to work.\\r\\n//\\r\\nvec3 hash33(vec3 p){\\r\\n\\r\\n float n = sin(dot(p, vec3(7, 157, 113)));\\r\\n return fract(vec3(2097152, 262144, 32768)*n);\\r\\n}\\r\\n\\r\\n// 3D Voronoi: Obviously, this is just a rehash of IQ's original.\\r\\n//\\r\\nfloat voronoi(vec3 p){\\r\\n\\r\\n vec3 b, r, g = floor(p);\\r\\n p = fract(p); // \\\"p -= g;\\\" works on some GPUs, but not all, for some annoying reason.\\r\\n\\r\\n // Maximum value: I think outliers could get as high as \\\"3,\\\" the squared diagonal length\\r\\n // of the unit cube, with the mid point being \\\"0.75.\\\" Is that right? Either way, for this\\r\\n // example, the maximum is set to one, which would cover a good part of the range, whilst\\r\\n // dispensing with the need to clamp the final result.\\r\\n float d = 1.;\\r\\n\\r\\n // I've unrolled one of the loops. GPU architecture is a mystery to me, but I'm aware\\r\\n // they're not fond of nesting, branching, etc. My laptop GPU seems to hate everything,\\r\\n // including multiple loops. If it were a person, we wouldn't hang out.\\r\\n for(int j = -1; j <= 1; j++) {\\r\\n  for(int i = -1; i <= 1; i++) {\\r\\n\\r\\n   b = vec3(i, j, -1);\\r\\n   r = b - p + hash33(g+b);\\r\\n   d = min(d, dot(r,r));\\r\\n\\r\\n   b.z = 0.0;\\r\\n   r = b - p + hash33(g+b);\\r\\n   d = min(d, dot(r,r));\\r\\n\\r\\n   b.z = 1.;\\r\\n   r = b - p + hash33(g+b);\\r\\n   d = min(d, dot(r,r));\\r\\n\\r\\n  }\\r\\n }\\r\\n\\r\\n return d; // Range: [0, 1]\\r\\n}\\r\\n\\r\\n// Standard fBm function with some time dialation to give a parallax\\r\\n// kind of effect. In other words, the position and time frequencies\\r\\n// are changed at different rates from layer to layer.\\r\\n//\\r\\nfloat noiseLayers(in vec3 p) {\\r\\n\\r\\n // Normally, you'd just add a time vector to \\\"p,\\\" and be done with\\r\\n // it. However, in this instance, time is added seperately so that\\r\\n // its frequency can be changed at a different rate. \\\"p.z\\\" is thrown\\r\\n // in there just to distort things a little more.\\r\\n vec3 t = vec3(0., 0., p.z + iTime*1.5);\\r\\n\\r\\n const int iter = 5; // Just five layers is enough.\\r\\n float tot = 0., sum = 0., amp = 1.; // Total, sum, amplitude.\\r\\n\\r\\n for (int i = 0; i < iter; i++) {\\r\\n  tot += voronoi(p + t) * amp; // Add the layer to the total.\\r\\n  p *= 2.; // Position multiplied by two.\\r\\n  t *= 1.5; // Time multiplied by less than two.\\r\\n  sum += amp; // Sum of amplitudes.\\r\\n  amp *= .5; // Decrease successive layer amplitude, as normal.\\r\\n }\\r\\n\\r\\n return tot/sum; // Range: [0, 1].\\r\\n}\\r\\n\\r\\nvoid main()\\r\\n{\\r\\n // Screen coordinates.\\r\\n vec2 uv = (gl_FragCoord.xy - iResolution.xy*.5) / iResolution.y;\\r\\n\\r\\n // Shifting the central position around, just a little, to simulate a\\r\\n // moving camera, albeit a pretty lame one.\\r\\n uv += vec2(sin(iTime*.5)*.25, cos(iTime*.5)*.125);\\r\\n\\r\\n // Constructing the unit ray.\\r\\n vec3 rd = normalize(vec3(uv.x, uv.y, 3.1415926535898/8.));\\r\\n\\r\\n // Rotating the ray about the XY plane, to simulate a rolling camera.\\r\\n float cs = cos(iTime*.25), si = sin(iTime*.25);\\r\\n // Apparently \\\"r *= rM\\\" can break in some older browsers.\\r\\n rd.xy = rd.xy*mat2(cs, -si, si, cs);\\r\\n\\r\\n // Passing a unit ray multiple into the Voronoi layer function, which\\r\\n // is nothing more than an fBm setup with some time dialation.\\r\\n float c = noiseLayers(rd*2.);\\r\\n\\r\\n // Optional: Adding a bit of random noise for a subtle dust effect.\\r\\n c = max(c + dot(hash33(rd)*2. - 1., vec3(.015)), 0.);\\r\\n\\r\\n // Coloring:\\r\\n\\r\\n // Nebula.\\r\\n c *= sqrt(c)*1.5; // Contrast.\\r\\n vec3 col = firePalette(c); // Palettization.\\r\\n //col = mix(col, col.zyx*.1+ c*.9, clamp((1.+rd.x+rd.y)*0.45, 0., 1.)); // Color dispersion.\\r\\n col = mix(col, col.zyx*.15 + c*.85, min(pow(dot(rd.xy, rd.xy)*1.2, 1.5), 1.)); // Color dispersion.\\r\\n col = pow(col, vec3(1.25)); // Tweaking the contrast a little.\\r\\n\\r\\n // The fire palette on its own. Perhaps a little too much fire color.\\r\\n //c = pow(c*1.33, 1.25);\\r\\n //vec3 col =  firePalette(c);\\r\\n\\r\\n // Black and white, just to keep the art students happy. :)\\r\\n //c *= c*1.5;\\r\\n //vec3 col = vec3(c);\\r\\n\\r\\n // Rough gamma correction, and done.\\r\\n gl_FragColor = vec4(sqrt(clamp(col, 0., 1.)), 1);\\r\\n}\\r\\n\"\n\n//# sourceURL=webpack:///./assets/shaders/fragment.glsl?");

/***/ }),

/***/ "./assets/shaders/vertex.glsl":
/*!************************************!*\
  !*** ./assets/shaders/vertex.glsl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" varying vec2 vUv;\\r\\n uniform float time;\\r\\n void main() {\\r\\n vUv = uv;\\r\\n vec3 pos = position.xyz * sin(time);\\r\\n gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);\\r\\n }\"\n\n//# sourceURL=webpack:///./assets/shaders/vertex.glsl?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, FaceColors, FileLoader, FlatShading, Float16BufferAttribute, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GammaEncoding, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SplineCurve, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGL1Renderer, WebGLCubeRenderTarget, WebGLMultipleRenderTargets, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ })

/******/ });