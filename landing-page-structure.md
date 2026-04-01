# Landing Page Structure

ใช้โครงนี้เป็นแนวทางเวลาจะย้ายไปทำต่อในโฟลเดอร์อื่น

## Responsive

- ตั้ง `meta viewport`
- ใช้ `max-w-*`, `px-*`, `py-*`
- ใช้ `md:`, `lg:`, `xl:` สำหรับจัด layout แต่ละ breakpoint
- ตัวอย่าง:
  - hero ใช้ `lg:grid-cols-[1fr_0.95fr]`
  - product cards ใช้ `md:grid-cols-2 xl:grid-cols-4`
  - menu desktop ใช้ `hidden md:flex`

## Header

- โลโก้ / ชื่อแบรนด์
- เมนูนำทางไปแต่ละ section
- ปุ่ม CTA หลัก เช่น `สั่งซื้อ`, `ติดต่อ`, `สมัครสมาชิก`

## Hero Section

- Tagline สั้น ๆ
- Headline หลักของแบรนด์
- คำอธิบายสั้นว่าแบรนด์ขายอะไร
- ปุ่ม CTA หลักและรอง
- Keyword / category chip
- Highlight สั้น 3 ข้อ
- ภาพ hero หรือภาพรวมสินค้า

## Product Lines Section

- หัวข้อ section
- คำอธิบายภาพรวม product line
- card หมวดสินค้า 3 กลุ่ม
- ในแต่ละ card มี:
  - ชื่อหมวด
  - คำอธิบาย
  - ตัวอย่างสินค้า

## Featured Products Section

- หัวข้อ section
- คำอธิบายสั้นของสินค้าขายดี / สินค้าแนะนำ
- การ์ดสินค้า 4 ใบ
- ในแต่ละ card มี:
  - category
  - size
  - ชื่อสินค้า
  - รายละเอียดสั้น
  - รูปแบบขาย
  - ราคา
  - ปุ่ม CTA

## Benefits Section

- หัวข้อ section
- เกริ่นสั้นว่าทำไมควรเลือกแบรนด์
- จุดเด่น 3 ข้อ
- ในแต่ละข้อมี:
  - เลขลำดับ
  - หัวข้อ
  - คำอธิบาย

## Subscribe / CTA Section

- หัวข้อปิดการขาย
- คำอธิบายสั้น
- ฟอร์มหรือปุ่มสำหรับ:
  - รับโปร
  - กรอกอีเมล
  - ติดต่อกลับ

## Footer

- ชื่อแบรนด์
- ลิงก์สำคัญ
- อาจเพิ่ม social / contact ภายหลัง
