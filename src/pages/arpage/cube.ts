const cubeHtml: string = `
    <a-scene embedded arjs="debugUIEnabled:false;">

        <a-marker preset="hiro">
          <a-box position="0 0.5 0" wireframe="true"></a-box>
        </a-marker>
  
        <a-entity camera></a-entity>
  
      </a-scene>`;

export default cubeHtml;