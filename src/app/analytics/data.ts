export const data = [
  { day: "Sat", value: 300 },
  { day: "Sun", value: 200 },
  { day: "Mon", value: 320 },
  { day: "Tus", value: 100 },
  { day: "Wed", value: 280 },
  { day: "Thr", value: 290 },
  { day: "Fri", value: 230 },
];

export const stats = [
  {
    label: "Today’s Appointments",
    value: "10",
    change: "+12%",
    positive: true,
    iconBg: "bg-blue-100",
    icon: "📅",
  },
  {
    label: "Avg. Appointment Duration",
    value: "3h 20m",
    change: "-13%",
    positive: false,
    iconBg: "bg-orange-100",
    icon: "🕒",
  },
  {
    label: "Missed Appointments",
    value: "1h 20m",
    change: "+5%",
    positive: true,
    iconBg: "bg-purple-100",
    icon: "😴",
  },
  {
    label: "Time Saved with AI",
    value: "20m",
    change: "+110%",
    positive: true,
    iconBg: "bg-pink-100",
    icon: "🤖",
  },
];

export const pieData = [
  { name: "New", value: 60, color: "#3498db" }, // Light blue
  { name: "Old", value: 20, color: "#195A8A" }, // Dark blue
];

export const barData = [
  { year: "2014", newUser: 250, oldUser: 200 },
  { year: "2015", newUser: 320, oldUser: 130 },
  { year: "2016", newUser: 320, oldUser: 130 },
  { year: "2017", newUser: 230, oldUser: 100 },
  { year: "2018", newUser: 230, oldUser: 90 },
  { year: "2019", newUser: 180, oldUser: 250 },
  { year: "2020", newUser: 190, oldUser: 240 },
  { year: "2021", newUser: 140, oldUser: 200 },
  { year: "2022", newUser: 290, oldUser: 100 },
  { year: "2023", newUser: 290, oldUser: 90 },
];

export const messageData = [
  {
    title: "Whats app volume",
    value: 485,
    iconBg: "bg-green-100",
    icon: "🟢",
    change: "+12%",
    changeColor: "text-green-600",
    changeBg: "bg-green-100",
    direction: "up",
  },
  {
    title: "SMS volume",
    value: 285,
    iconBg: "bg-blue-100",
    icon: "💬",
    change: "-12%",
    changeColor: "text-red-600",
    changeBg: "bg-red-100",
    direction: "down",
  },
  {
    title: "Email volume",
    value: 196,
    iconBg: "bg-rose-100",
    icon: "✉️",
    change: "+12%",
    changeColor: "text-green-600",
    changeBg: "bg-green-100",
    direction: "up",
  },
  {
    title: "Average response time",
    value: "12 min",
    iconBg: "bg-purple-100",
    icon: "🟣",
    change: "+5%",
    changeColor: "text-green-600",
    changeBg: "bg-green-100",
    direction: "up",
  },
];

export const COLORS = ["#3B82F6", "#1E3A8A"];