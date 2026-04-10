// Mock data for Tranzly prototype

export const vehicles = [
  { id: 1, driver: 'محمود إبراهيم', driverEn: 'Mahmoud Ibrahim', route: 'Route A - Zagazig', routeAr: 'طريق أ - الزقازيق', status: 'on-route', workers: 42, capacity: 47, departure: '6:00 AM', eta: '7:15 AM', actualArrival: '7:12 AM', occupancy: 89 },
  { id: 2, driver: 'أحمد حسن', driverEn: 'Ahmed Hassan', route: 'Route A - Zagazig', routeAr: 'طريق أ - الزقازيق', status: 'on-route', workers: 45, capacity: 47, departure: '6:15 AM', eta: '7:30 AM', actualArrival: null, occupancy: 96 },
  { id: 3, driver: 'عصام محمد', driverEn: 'Essam Mohamed', route: 'Route B - Belbeis', routeAr: 'طريق ب - بلبيس', status: 'delayed', workers: 38, capacity: 47, departure: '6:00 AM', eta: '7:20 AM', actualArrival: null, occupancy: 81, delayMin: 8, delayReason: 'Traffic on Ring Road' },
  { id: 4, driver: 'طارق عبدالله', driverEn: 'Tarek Abdullah', route: 'Route B - Belbeis', routeAr: 'طريق ب - بلبيس', status: 'on-route', workers: 44, capacity: 47, departure: '6:10 AM', eta: '7:25 AM', actualArrival: null, occupancy: 94 },
  { id: 5, driver: 'سيد أحمد', driverEn: 'Sayed Ahmed', route: 'Route C - Abu Hammad', routeAr: 'طريق ج - أبو حماد', status: 'on-route', workers: 40, capacity: 47, departure: '5:45 AM', eta: '7:10 AM', actualArrival: null, occupancy: 85 },
  { id: 6, driver: 'حسن علي', driverEn: 'Hassan Ali', route: 'Route C - Abu Hammad', routeAr: 'طريق ج - أبو حماد', status: 'completed', workers: 46, capacity: 47, departure: '5:30 AM', eta: '7:00 AM', actualArrival: '6:58 AM', occupancy: 98 },
  { id: 7, driver: 'عادل سعيد', driverEn: 'Adel Saeed', route: 'Route D - 10th Internal', routeAr: 'طريق د - العاشر الداخلي', status: 'completed', workers: 24, capacity: 24, departure: '6:30 AM', eta: '7:00 AM', actualArrival: '6:55 AM', occupancy: 100 },
  { id: 8, driver: 'كريم فوزي', driverEn: 'Karim Fawzy', route: 'Route D - 10th Internal', routeAr: 'طريق د - العاشر الداخلي', status: 'on-route', workers: 22, capacity: 24, departure: '6:45 AM', eta: '7:15 AM', actualArrival: null, occupancy: 92 },
  { id: 9, driver: 'ياسر محمود', driverEn: 'Yasser Mahmoud', route: 'Route E - Sharkia Express', routeAr: 'طريق هـ - الشرقية السريع', status: 'on-route', workers: 43, capacity: 47, departure: '5:50 AM', eta: '7:20 AM', actualArrival: null, occupancy: 91 },
  { id: 10, driver: 'مصطفى خالد', driverEn: 'Mostafa Khaled', route: 'Route E - Sharkia Express', routeAr: 'طريق هـ - الشرقية السريع', status: 'on-route', workers: 41, capacity: 47, departure: '6:05 AM', eta: '7:25 AM', actualArrival: null, occupancy: 87 },
  { id: 11, driver: 'محمد رضا', driverEn: 'Mohamed Reda', route: 'Route F - Ismailia Rd', routeAr: 'طريق و - طريق الإسماعيلية', status: 'on-route', workers: 39, capacity: 47, departure: '5:40 AM', eta: '7:15 AM', actualArrival: null, occupancy: 83 },
  { id: 12, driver: 'عمر يوسف', driverEn: 'Omar Youssef', route: 'Route F - Ismailia Rd', routeAr: 'طريق و - طريق الإسماعيلية', status: 'completed', workers: 47, capacity: 47, departure: '5:30 AM', eta: '7:00 AM', actualArrival: '6:56 AM', occupancy: 100 },
  { id: 13, driver: 'إبراهيم عبدالرحمن', driverEn: 'Ibrahim Abdelrahman', route: 'Route A - Zagazig', routeAr: 'طريق أ - الزقازيق', status: 'on-route', workers: 44, capacity: 47, departure: '6:20 AM', eta: '7:35 AM', actualArrival: null, occupancy: 94 },
  { id: 14, driver: 'هشام نبيل', driverEn: 'Hesham Nabil', route: 'Route G - Obour Link', routeAr: 'طريق ز - رابط العبور', status: 'at-pickup', workers: 18, capacity: 47, departure: '6:50 AM', eta: '7:45 AM', actualArrival: null, occupancy: 38 },
  { id: 15, driver: 'وليد حسين', driverEn: 'Walid Hussein', route: 'Route G - Obour Link', routeAr: 'طريق ز - رابط العبور', status: 'on-route', workers: 22, capacity: 24, departure: '7:00 AM', eta: '7:30 AM', actualArrival: null, occupancy: 92 },
  { id: 16, driver: 'شريف كمال', driverEn: 'Sherif Kamal', route: 'Route H - Cairo Direct', routeAr: 'طريق ح - القاهرة المباشر', status: 'at-pickup', workers: 12, capacity: 47, departure: '7:00 AM', eta: '8:00 AM', actualArrival: null, occupancy: 26 },
  { id: 17, driver: 'رامي جمال', driverEn: 'Ramy Gamal', route: 'Route H - Cairo Direct', routeAr: 'طريق ح - القاهرة المباشر', status: 'at-pickup', workers: 20, capacity: 47, departure: '7:05 AM', eta: '8:05 AM', actualArrival: null, occupancy: 43 },
  { id: 18, driver: 'خالد عمر', driverEn: 'Khaled Omar', route: 'Route B - Belbeis', routeAr: 'طريق ب - بلبيس', status: 'on-route', workers: 46, capacity: 47, departure: '6:00 AM', eta: '7:15 AM', actualArrival: null, occupancy: 98 },
  { id: 19, driver: 'تامر صلاح', driverEn: 'Tamer Salah', route: 'Route D - 10th Internal', routeAr: 'طريق د - العاشر الداخلي', status: 'delayed', workers: 20, capacity: 24, departure: '6:40 AM', eta: '7:10 AM', actualArrival: null, occupancy: 83, delayMin: 5, delayReason: 'Vehicle maintenance check' },
  { id: 20, driver: 'أشرف منصور', driverEn: 'Ashraf Mansour', route: 'Route C - Abu Hammad', routeAr: 'طريق ج - أبو حماد', status: 'not-started', workers: 0, capacity: 47, departure: '2:00 PM', eta: '3:15 PM', actualArrival: null, occupancy: 0 },
  { id: 21, driver: 'سامح عبدالفتاح', driverEn: 'Sameh Abdel Fattah', route: 'Route E - Sharkia Express', routeAr: 'طريق هـ - الشرقية السريع', status: 'not-started', workers: 0, capacity: 47, departure: '2:00 PM', eta: '3:20 PM', actualArrival: null, occupancy: 0 },
  { id: 22, driver: 'نبيل حمدي', driverEn: 'Nabil Hamdy', route: 'Route F - Ismailia Rd', routeAr: 'طريق و - طريق الإسماعيلية', status: 'at-pickup', workers: 30, capacity: 47, departure: '6:55 AM', eta: '7:50 AM', actualArrival: null, occupancy: 64 },
];

export const vehiclePositions = [
  { id: 1, lat: 30.3120, lng: 31.7450, status: 'on-route' },
  { id: 2, lat: 30.3050, lng: 31.7300, status: 'on-route' },
  { id: 3, lat: 30.2880, lng: 31.6900, status: 'delayed' },
  { id: 4, lat: 30.3200, lng: 31.7100, status: 'on-route' },
  { id: 5, lat: 30.2750, lng: 31.7800, status: 'on-route' },
  { id: 6, lat: 30.2965, lng: 31.7614, status: 'completed' },
  { id: 7, lat: 30.2965, lng: 31.7614, status: 'completed' },
  { id: 8, lat: 30.3100, lng: 31.7500, status: 'on-route' },
  { id: 9, lat: 30.2600, lng: 31.7200, status: 'on-route' },
  { id: 10, lat: 30.2700, lng: 31.7000, status: 'on-route' },
  { id: 11, lat: 30.3300, lng: 31.7700, status: 'on-route' },
  { id: 12, lat: 30.2965, lng: 31.7614, status: 'completed' },
  { id: 13, lat: 30.2900, lng: 31.7400, status: 'on-route' },
  { id: 14, lat: 30.3400, lng: 31.6800, status: 'at-pickup' },
  { id: 15, lat: 30.3050, lng: 31.7550, status: 'on-route' },
  { id: 16, lat: 30.3500, lng: 31.6600, status: 'at-pickup' },
  { id: 17, lat: 30.3480, lng: 31.6650, status: 'at-pickup' },
  { id: 18, lat: 30.2800, lng: 31.7350, status: 'on-route' },
  { id: 19, lat: 30.3000, lng: 31.7580, status: 'delayed' },
  { id: 22, lat: 30.3150, lng: 31.6950, status: 'at-pickup' },
];

export const workers = [
  { id: 1, name: 'محمد عبدالله', nameEn: 'Mohamed Abdullah', vehicle: 1, pickup: 'Zagazig Central', checkIn: '7:12 AM', status: 'on-time' },
  { id: 2, name: 'أحمد السيد', nameEn: 'Ahmed El-Sayed', vehicle: 1, pickup: 'Zagazig Central', checkIn: '7:12 AM', status: 'on-time' },
  { id: 3, name: 'فاطمة حسن', nameEn: 'Fatma Hassan', vehicle: 2, pickup: 'Zagazig South', checkIn: '7:28 AM', status: 'on-time' },
  { id: 4, name: 'علي محمود', nameEn: 'Ali Mahmoud', vehicle: 3, pickup: 'Belbeis Main', checkIn: '7:45 AM', status: 'late', lateMin: 15 },
  { id: 5, name: 'سارة أحمد', nameEn: 'Sara Ahmed', vehicle: 4, pickup: 'Belbeis East', checkIn: '7:22 AM', status: 'on-time' },
  { id: 6, name: 'حسين عبدالرحمن', nameEn: 'Hussein Abdelrahman', vehicle: 5, pickup: 'Abu Hammad Sq', checkIn: '7:08 AM', status: 'on-time' },
  { id: 7, name: 'مريم خالد', nameEn: 'Mariam Khaled', vehicle: 6, pickup: 'Abu Hammad North', checkIn: '6:58 AM', status: 'on-time' },
  { id: 8, name: 'عبدالرحمن يوسف', nameEn: 'Abdelrahman Youssef', vehicle: 7, pickup: '10th District 1', checkIn: '6:55 AM', status: 'on-time' },
  { id: 9, name: 'نورهان سعيد', nameEn: 'Nourhan Saeed', vehicle: 7, pickup: '10th District 2', checkIn: '6:57 AM', status: 'on-time' },
  { id: 10, name: 'كريم مصطفى', nameEn: 'Karim Mostafa', vehicle: 8, pickup: '10th District 3', checkIn: '7:14 AM', status: 'on-time' },
  { id: 11, name: 'ياسمين فؤاد', nameEn: 'Yasmine Fouad', vehicle: 9, pickup: 'Sharkia Gate', checkIn: '7:18 AM', status: 'on-time' },
  { id: 12, name: 'عمرو حسن', nameEn: 'Amr Hassan', vehicle: 10, pickup: 'Sharkia Express Stop', checkIn: '7:23 AM', status: 'on-time' },
  { id: 13, name: 'هدى إبراهيم', nameEn: 'Hoda Ibrahim', vehicle: 11, pickup: 'Ismailia Rd - KM 45', checkIn: '7:35 AM', status: 'late', lateMin: 5 },
  { id: 14, name: 'أسامة رضا', nameEn: 'Osama Reda', vehicle: 12, pickup: 'Ismailia Rd - KM 30', checkIn: '6:56 AM', status: 'on-time' },
  { id: 15, name: 'دينا عادل', nameEn: 'Dina Adel', vehicle: 13, pickup: 'Zagazig West', checkIn: '7:33 AM', status: 'on-time' },
  { id: 16, name: 'إسلام طارق', nameEn: 'Islam Tarek', vehicle: 3, pickup: 'Belbeis Main', checkIn: null, status: 'absent' },
  { id: 17, name: 'منى عبدالعزيز', nameEn: 'Mona Abdelaziz', vehicle: 14, pickup: 'Obour Gate', checkIn: null, status: 'absent' },
  { id: 18, name: 'رامي شريف', nameEn: 'Ramy Sherif', vehicle: 15, pickup: 'Obour Link Stop', checkIn: '7:29 AM', status: 'on-time' },
  { id: 19, name: 'لمياء جمال', nameEn: 'Lamiaa Gamal', vehicle: 16, pickup: 'Cairo East', checkIn: '7:48 AM', status: 'late', lateMin: 18 },
  { id: 20, name: 'طارق نبيل', nameEn: 'Tarek Nabil', vehicle: 17, pickup: 'Cairo Nasr City', checkIn: '7:50 AM', status: 'late', lateMin: 20 },
  { id: 21, name: 'سمير حسن', nameEn: 'Samir Hassan', vehicle: 18, pickup: 'Belbeis South', checkIn: '7:13 AM', status: 'on-time' },
  { id: 22, name: 'نجلاء محمد', nameEn: 'Naglaa Mohamed', vehicle: 19, pickup: '10th District 4', checkIn: '7:42 AM', status: 'late', lateMin: 12 },
  { id: 23, name: 'وائل أحمد', nameEn: 'Wael Ahmed', vehicle: 1, pickup: 'Zagazig Central', checkIn: '7:12 AM', status: 'on-time' },
  { id: 24, name: 'ريهام عصام', nameEn: 'Reham Essam', vehicle: 2, pickup: 'Zagazig South', checkIn: null, status: 'absent' },
  { id: 25, name: 'خالد جابر', nameEn: 'Khaled Gaber', vehicle: 5, pickup: 'Abu Hammad Sq', checkIn: '7:09 AM', status: 'on-time' },
  { id: 26, name: 'أميرة سامي', nameEn: 'Amira Samy', vehicle: 6, pickup: 'Abu Hammad North', checkIn: '6:59 AM', status: 'on-time' },
  { id: 27, name: 'محمود فتحي', nameEn: 'Mahmoud Fathy', vehicle: 9, pickup: 'Sharkia Gate', checkIn: null, status: 'absent' },
  { id: 28, name: 'سلمى عبدالله', nameEn: 'Salma Abdullah', vehicle: 10, pickup: 'Sharkia Express Stop', checkIn: '7:24 AM', status: 'on-time' },
  { id: 29, name: 'عبدالله حمدي', nameEn: 'Abdullah Hamdy', vehicle: 11, pickup: 'Ismailia Rd - KM 45', checkIn: '7:14 AM', status: 'on-time' },
  { id: 30, name: 'آية حسام', nameEn: 'Aya Hossam', vehicle: 12, pickup: 'Ismailia Rd - KM 30', checkIn: '6:57 AM', status: 'on-time' },
];

export const liveFeedItems = [
  { id: 1, type: 'success', icon: '🟢', message: 'Vehicle #7 arrived at Gate A', time: '7:42 AM' },
  { id: 2, type: 'success', icon: '🟢', message: 'Vehicle #12 completed route — 47 workers delivered', time: '7:38 AM' },
  { id: 3, type: 'warning', icon: '🟠', message: 'Vehicle #3 delayed 8 min — traffic on Ring Road', time: '7:35 AM' },
  { id: 4, type: 'success', icon: '🟢', message: 'Vehicle #15 started route — 22/24 seats filled', time: '7:30 AM' },
  { id: 5, type: 'error', icon: '🔴', message: 'Driver Mahmoud — harsh braking detected', time: '7:28 AM' },
  { id: 6, type: 'success', icon: '🟢', message: 'Vehicle #6 completed route — 46 workers delivered', time: '7:25 AM' },
  { id: 7, type: 'success', icon: '🟢', message: 'Vehicle #9 passed checkpoint B2', time: '7:22 AM' },
  { id: 8, type: 'warning', icon: '🟠', message: 'Vehicle #19 delayed 5 min — maintenance check', time: '7:20 AM' },
  { id: 9, type: 'success', icon: '🟢', message: 'Vehicle #1 picked up 42 workers at Zagazig', time: '7:15 AM' },
  { id: 10, type: 'success', icon: '🟢', message: 'All morning shift vehicles dispatched', time: '7:00 AM' },
];

export const additionalFeedItems = [
  { type: 'success', icon: '🟢', message: 'Vehicle #8 arrived at Gate B', time: '7:44 AM' },
  { type: 'success', icon: '🟢', message: 'Vehicle #18 passed checkpoint A3', time: '7:45 AM' },
  { type: 'success', icon: '🟢', message: 'Vehicle #2 approaching factory — ETA 2 min', time: '7:46 AM' },
  { type: 'warning', icon: '🟠', message: 'Vehicle #16 — slow loading at pickup point', time: '7:47 AM' },
  { type: 'success', icon: '🟢', message: 'Vehicle #5 arrived at Gate C', time: '7:48 AM' },
  { type: 'success', icon: '🟢', message: 'Vehicle #13 passed checkpoint B1', time: '7:49 AM' },
];

export const routePickupPoints = {
  'Route A - Zagazig': [
    { name: 'Zagazig Central Station', time: '6:00 AM', actual: '6:02 AM', workers: 15 },
    { name: 'Zagazig University Gate', time: '6:12 AM', actual: '6:14 AM', workers: 8 },
    { name: 'El-Qantra Bridge', time: '6:25 AM', actual: '6:26 AM', workers: 6 },
    { name: 'Industrial Zone Gate 2', time: '6:45 AM', actual: '6:44 AM', workers: 5 },
    { name: '10th of Ramadan - Gate A', time: '7:15 AM', actual: '7:12 AM', workers: 8 },
  ],
  'Route B - Belbeis': [
    { name: 'Belbeis Main Square', time: '6:00 AM', actual: '6:00 AM', workers: 12 },
    { name: 'Belbeis East Station', time: '6:10 AM', actual: '6:12 AM', workers: 10 },
    { name: 'Kafr Ibrahim', time: '6:25 AM', actual: '6:28 AM', workers: 7 },
    { name: 'El-Salam Road Junction', time: '6:40 AM', actual: '6:45 AM', workers: 5 },
    { name: '10th of Ramadan - Gate B', time: '7:10 AM', actual: '7:18 AM', workers: 4 },
  ],
};

// Analytics data
export const dailyOnTimeData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  label: `Day ${i + 1}`,
  rate: Math.min(96, Math.max(85, 87 + (i * 0.25) + (Math.random() * 3 - 1))).toFixed(1),
}));

export const costPerWorkerData = [
  { month: 'Oct', cost: 145 },
  { month: 'Nov', cost: 132 },
  { month: 'Dec', cost: 124 },
  { month: 'Jan', cost: 118 },
];

export const vehicleUtilizationData = [
  { name: 'High (>80%)', value: 65, fill: '#81B29A' },
  { name: 'Medium (50-80%)', value: 25, fill: '#F2CC8F' },
  { name: 'Low (<50%)', value: 10, fill: '#E07A5F' },
];

export const invoices = [
  { id: 1, period: 'Q1 2026', dateRange: 'Jan 1 - Mar 31, 2026', vehicles: 22, amount: 66000, status: 'paid' },
  { id: 2, period: 'Q4 2025', dateRange: 'Oct 1 - Dec 31, 2025', vehicles: 22, amount: 66000, status: 'paid' },
  { id: 3, period: 'Q3 2025', dateRange: 'Jul 1 - Sep 30, 2025', vehicles: 18, amount: 52000, status: 'paid' },
  { id: 4, period: 'Q2 2025', dateRange: 'Apr 1 - Jun 30, 2025', vehicles: 18, amount: 52000, status: 'paid' },
];
