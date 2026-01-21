import React, { Suspense } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { Environment, ContactShadows } from '@react-three/drei/native';

export default function BurgerScreen() {
  return (
    <View style={styles.container}>
      {/* El Canvas es nuestro plato 3D */}
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }} // Ajustamos la cámara para verla de frente
      >
        {/* ILUMINACIÓN BÁSICA */}
        <ambientLight intensity={0.7} /> 
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Suspense maneja la carga del modelo para que la app no se trabe */}
        <Suspense fallback={null}>
          {/* Aquí irá nuestra hamburguesa en el siguiente commit */}
          
          {/* Sombras de contacto para que no parezca que flota */}
          <ContactShadows 
            position={[0, -0.8, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={0.8} 
          />
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A0900', // Usamos tu color de fondo del _layout
  },
});