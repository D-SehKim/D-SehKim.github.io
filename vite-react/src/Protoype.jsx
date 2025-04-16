function Prototype() {
    return (
        <body>
            <div id="godot-container">
                <canvas
                title="Daniel Kim"
                src="/proto/index.html"
                width="100%"
                height="100%"
                style={{ border: 'none', position: 'fixed', top: 0, left: 0 }}
                />
                
                <iframe id="virtual-pc"
                src="https://d-sehkim.github.io"
                style="display:none; position:absolute; top:100px; left:150px; width:800px; height:600px; border:none;"></iframe>
            </div>
        </body>
    )
  }

  export default Prototype