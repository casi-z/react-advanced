import {Canvas} from "@react-three/fiber"

const RenderCanvas = () => {
    const count = 200    
    return (
        <Canvas
            camera={{ fov: 40 }}
            position={[0, 0, 10]}
        >
            <spotLight position={[10, 10, 10]} intensity={1} penumbra={1} />
            {Array.from({ length: count }, (v, k) => 
                k % 3 === 0 ? (
                    <></>
                    // <Angle key={k} index={k} z={(k / count) * 100} />
                ) : k % 2 ? (
                    <></>
                    // <Brace key={k} index={k} z={(k / count) * 100} />
                ) : (
                    <></>
                    // <Bracket key={k} index={k} z={(k / count) * 100} />
                )
            )}
        </Canvas>
    )
}


export default RenderCanvas