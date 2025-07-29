// src/data/sensorUseCases.js
export const sensorUseCases = [
  {
    id: 'vibration',
    name: 'Vibration Sensor',
    description: 'Continuously monitors equipment vibration to detect imbalance, misalignment, and bearing faults before they escalate.',
    icon: '/icons/vibration.svg'
  },
  {
    id: 'temperature',
    name: 'Temperature Sensor',
    description: 'Tracks bearing and motor temperatures in real-time, alerting when thresholds are exceeded to prevent overheating.',
    icon: '/icons/temperature.svg'
  },
  {
    id: 'pressure',
    name: 'Pressure Sensor',
    description: 'Measures fluid/gas pressure in pipelines and vessels to catch leaks, blockages, or pump issues early on.',
    icon: '/icons/pressure.svg'
  },
  {
    id: 'flow',
    name: 'Flow Sensor',
    description: 'Monitors flow rates of liquids and gases to ensure optimal process conditions and spot anomalies in real time.',
    icon: '/icons/flow.svg'
  },
  {
    id: 'acoustic',
    name: 'Acoustic Emission Sensor',
    description: 'Listens for ultrasonic signals from cracks or friction in rotating components, enabling ultra-early fault detection.',
    icon: '/icons/acoustic.svg'
  }
];
