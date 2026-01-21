const { getDefaultConfig } = require('expo/metro-config'); 
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname)
// Le decimos a Metro que soporte estas extensiones de 3D y assets
config.resolver.assetExts.push('glb', 'gltf', 'png', 'jpg');
module.exports = withNativeWind(config, { input: './global.css' })