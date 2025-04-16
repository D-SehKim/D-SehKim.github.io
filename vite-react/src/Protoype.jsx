import { useEffect } from "react"

function Prototype() {
    useEffect(() => {
        const handleMessage = (event) => {
        if (event.data?.showPC) {
            document.getElementById('virtual-pc').style.display = "block"
        }
        if (event.data?.showPC == false) {
            document.getElementById('virtual-pc').style.display = "none"
        }
        }

        window.addEventListener("message", handleMessage)
        return () => window.removeEventListener("message", handleMessage)
    }, [])

    return (
        <div>
            <iframe
            title="Daniel Kim"
            src="/proto/index.html"
            width="100%"
            height="100%"   
            style={{ border: 'none', position: 'fixed', top: 0, left: 0 }}
            />

            <iframe 
            id="virtual-pc"
            src="https://d-sehkim.github.io"
            style={{
                display: 'none',
                position: 'absolute',
                top: '3.5vh',
                left: '15vw',
                width: '70vw',
                height: '87vh',
                border: 'none'
            }}
            />
        </div>
    )
  }

  export default Prototype