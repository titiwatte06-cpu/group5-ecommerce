use("group5-ecommerce");

db.staff.deleteMany[{}];

db.staff.insertMany([
  {
    staffName: "สุทธิพงษ์ ผลมาก",
    role: "admin",
    email: "spolmag@gmail.com",
    phoneNumber: "089-518-1968",
    lineId: "",
    adminLevel: 3,
  },
  {
    staffName: "ถิรวัฒน์ รจนากูล",
    role: "admin",
    email: "thirawat.devtt@gmail.com",
    phoneNumber: "",
    lineId: "",
    adminLevel: 3,
  },
  {
    staffName: "ฐิติวัชร์ ยุทธวิสุทธิ์",
    role: "owner",
    email: "titiwat.te06@gmail.com",
    phoneNumber: "",
    lineId: "",
    adminLevel: 3,
  },
  {
    staffName: "วีระยศ ธรรมจำรัส",
    role: "admin",
    email: "weerayosong@outlook.com",
    phoneNumber: "",
    lineId: "",
    adminLevel: 3,
  },
  {
    staffName: "ศุภาทิพย์ แก้วแจ่ม",
    role: "sales",
    email: "kaaashaaa9@gmail.com",
    phoneNumber: "",
    lineId: "",
    adminLevel: 1,
  },
]);
