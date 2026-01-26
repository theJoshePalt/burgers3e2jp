import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BurgerCanvas from '../molecules/BurgerCanvas';

export default function BurgerBuilder() {
  const [step, setStep] = useState(0);
  const [isEaten, setIsEaten] = useState(false);

  const handlePress = () => {
    if (step < 5) {
      setStep(prev => prev + 1);
    } else {
      // PROCESO DE COMER
      setIsEaten(true);
      
      // Esperamos 600ms (lo que dura la animación de encogerse) y reseteamos
      setTimeout(() => {
        setStep(0);
        setIsEaten(false);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.canvasContainer}>
        {/* Pasamos isEaten al canvas */}
        <BurgerCanvas step={step} isEaten={isEaten} />
      </View>

      <View style={styles.uiContainer}>
          <View style={styles.infoBox}>
          <Text style={styles.title}>BURGER KING RODEO</Text>
          <Text style={styles.subtitle}>Paso {step} de 5</Text>
      </View>

        <TouchableOpacity 
          style={[styles.button, step === 5 && styles.buttonDone]} 
          onPress={handlePress}
          disabled={isEaten} // Evita doble clic mientras se "come"
        >
          <Text style={styles.buttonText}>
            {step === 0 ? "EMPEZAR ARMADO" : 
             step === 5 ? "¡COMETELO!" : "AÑADIR INGREDIENTE"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFBA00' }, // Un café casi negro muy elegante
  canvasContainer: { flex: 1 },
  uiContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoBox: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: { color: '#000000', fontSize: 24, fontWeight: 'bold' },
  subtitle: { color: '#000000', fontSize: 14, marginTop: 5 },
  button: {
    backgroundColor: '#E67E22',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonDone: {
    backgroundColor: '#9C4A00', // Cambia a verde cuando terminas
  },
  buttonText: { color: 'white', fontWeight: '900', fontSize: 16, letterSpacing: 1 }
});

