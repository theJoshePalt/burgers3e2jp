import { OrbitControls } from '@react-three/drei/native';
import { Canvas } from '@react-three/fiber/native';
import React, { Suspense } from 'react';
import { StyleSheet, View } from 'react-native';

// IMPORTACIÓN DEL NUEVO COMPONENTE
import BurgerModel from '../components/atoms/BurgerModel';

export default function Index() {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [0, 2, 8], fov: 40 }}>
        <ambientLight intensity={1} /> 
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <OrbitControls 
          enablePan={false} // Desactivamos el desplazamiento lateral para que no se pierda la burger
          minDistance={5}   // Zoom máximo
          maxDistance={15}  // Zoom mínimo
        />
        {/* El Suspense es vital: mientras el .glb carga, no muestra nada */}
        <Suspense> 
          {/* Agregamos una luz extra que bañe todo para asegurar visibilidad */}
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <BurgerModel />
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A0900', // Tu fondo café oscuro
  },
});