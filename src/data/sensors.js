// src/data/sensors.js
export const sensors = [
  {
    id: 1,
    name: 'Vibration Sensor',
    category: 'Vibration',
    description: 'High-precision sensor to monitor equipment vibration levels.',
    specs: ['Frequency: 0-10 kHz', 'Accuracy: ±0.5%', 'Operating Temp: -40°C to 85°C'],
    imageUrl: '/images/sensors/vibration.jpg',
  },
  {
    id: 2,
    name: 'Temperature Sensor',
    category: 'Temperature',
    description: 'Digital sensor for real-time temperature tracking.',
    specs: ['Range: -50°C to 150°C', 'Resolution: 0.1°C', 'Update Rate: 1Hz'],
    imageUrl: '/images/sensors/temperature.jpg',
  },
  {
    id: 3,
    name: 'Pressure Sensor',
    category: 'Pressure',
    description: 'Robust sensor to measure fluid and gas pressure.',
    specs: ['Range: 0-300 bar', 'Accuracy: 0.25%', 'Output: 4-20 mA'],
    imageUrl: '/images/sensors/pressure.jpg',
  },
];