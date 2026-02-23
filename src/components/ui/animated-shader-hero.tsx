import React, { useRef, useEffect } from 'react';

interface HeroProps {
  trustBadge?: {
    text: string;
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}
float clouds(vec2 p) {
  float d=1., t=.0;
  for (float i=.0; i<3.; i++) {
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);
    d=a;
    p*=2./(i+1.);
  }
  return t;
}
void main(void) {
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for (float i=1.; i<12.; i++) {
    uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
  }
  O=vec4(col,1);
}`;

const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, defaultShaderSource);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(fs));
      return;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolutionLoc = gl.getUniformLocation(program, 'resolution');
    const timeLoc = gl.getUniformLocation(program, 'time');

    const loop = (now: number) => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, now * 1e-3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    loop(0);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return canvasRef;
};

const Hero: React.FC<HeroProps> = ({ trustBadge, headline, subtitle, buttons, className = "" }) => {
  const canvasRef = useShaderBackground();

  return (
    <section className={`relative w-full min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: 'none' }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[hsl(25,30%,8%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {trustBadge && (
          <div className="animate-fade-in-down mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-warm-gold/30 bg-warm-dark/40 backdrop-blur-md text-warm-light-text text-sm font-body tracking-wide">
              <span className="w-2 h-2 rounded-full gradient-gold animate-pulse" />
              {trustBadge.text}
            </span>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-7xl text-warm-light-text mb-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {headline.line1}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-7xl text-gold-bright opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {headline.line2}
            </span>
          </h1>

          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-warm-light-text/80 font-body max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {subtitle}
          </p>

          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {buttons.primary && (
                <button
                  onClick={buttons.primary.onClick}
                  className="relative px-8 py-4 rounded-lg font-body font-semibold text-base sm:text-lg tracking-wide transition-all duration-300 hover:scale-105 overflow-hidden"
                  style={{
                    background: "transparent",
                    border: "1px solid hsl(36, 50%, 62%)",
                    color: "hsl(36, 50%, 62%)",
                  }}
                >
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button
                  onClick={buttons.secondary.onClick}
                  className="px-8 py-4 rounded-lg border border-warm-gold/40 text-warm-light-text font-body font-medium text-base sm:text-lg hover:bg-warm-gold/10 transition-all duration-300 backdrop-blur-sm"
                >
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="w-6 h-10 rounded-full border-2 border-warm-gold/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full gradient-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
