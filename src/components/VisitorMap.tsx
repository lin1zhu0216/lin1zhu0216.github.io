import { useEffect, useRef } from "react"
import { visitorMap } from "../data/visitorMap"

export function VisitorMap() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mountNode = mountRef.current

    if (!mountNode) {
      return undefined
    }

    mountNode.innerHTML = ""

    const script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "mapmyvisitors"
    script.src = visitorMap.scriptSrc
    script.async = true
    mountNode.appendChild(script)

    return () => {
      mountNode.innerHTML = ""
    }
  }, [])

  return (
    <div className="visitor-map-section" id="visitor-map">
      <div className="visitor-map" ref={mountRef} aria-label="Visitor location map" />
    </div>
  )
}
