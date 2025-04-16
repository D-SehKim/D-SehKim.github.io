function GamePage() {
    return (
      <iframe
        title="My Godot Game"
        src="/game/index.html"
        width="100%"
        height="100%"
        style={{ border: 'none', position: 'fixed', top: 0, left: 0 }}
      />
    )
  }
  
  export default GamePage