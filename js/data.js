// Sample station data (static, client-side). Locations are illustrative.
const STATIONS = [
  { id: 1, name: "Gandhipuram Fast Hub", city: "Coimbatore", pincode: "641012", connectors: ["CCS2", "Type 2"], speed: "fast", kw: 60, price: 18, available: true, vehicles: ["car", "bike"] },
  { id: 2, name: "RS Puram Green Point", city: "Coimbatore", pincode: "641002", connectors: ["Type 2", "Bharat AC-001"], speed: "slow", kw: 7, price: 12, available: true, vehicles: ["car", "bike"] },
  { id: 3, name: "Peelamedu Tech Park Charger", city: "Coimbatore", pincode: "641004", connectors: ["CCS2", "CHAdeMO"], speed: "fast", kw: 50, price: 20, available: false, vehicles: ["car"] },
  { id: 4, name: "Saravanampatti IT Corridor", city: "Coimbatore", pincode: "641035", connectors: ["CCS2", "Type 2"], speed: "fast", kw: 120, price: 22, available: true, vehicles: ["car"] },
  { id: 5, name: "Singanallur Two-Wheeler Dock", city: "Coimbatore", pincode: "641005", connectors: ["Bharat AC-001", "Type 2"], speed: "slow", kw: 3, price: 10, available: true, vehicles: ["bike"] },
  { id: 6, name: "Avinashi Road Highway Stop", city: "Coimbatore", pincode: "641014", connectors: ["CCS2", "CHAdeMO", "Type 2"], speed: "fast", kw: 90, price: 21, available: true, vehicles: ["car"] },
  { id: 7, name: "Tirupur Textile Hub Charger", city: "Tirupur", pincode: "641601", connectors: ["Type 2", "CCS2"], speed: "slow", kw: 22, price: 14, available: false, vehicles: ["car", "bike"] },
  { id: 8, name: "Pollachi Town Station", city: "Pollachi", pincode: "642001", connectors: ["Type 2", "Bharat AC-001"], speed: "slow", kw: 7, price: 11, available: true, vehicles: ["car", "bike"] },
  { id: 9, name: "Salem Bypass Fast Charge", city: "Salem", pincode: "636004", connectors: ["CCS2", "CHAdeMO"], speed: "fast", kw: 60, price: 19, available: true, vehicles: ["car"] },
  { id: 10, name: "Ooty Road Hill Charger", city: "Mettupalayam", pincode: "641301", connectors: ["Type 2", "CCS2"], speed: "slow", kw: 22, price: 15, available: true, vehicles: ["car", "bike"] }
];

// Booking page connector options by vehicle type
const CONNECTOR_RULES = {
  bike: ["Bharat AC-001", "Type 2"],
  car: ["CCS2", "CHAdeMO", "Type 2"]
};

// Operating hours for booking (24h)
const OPEN_HOUR = 6;
const CLOSE_HOUR = 22;
