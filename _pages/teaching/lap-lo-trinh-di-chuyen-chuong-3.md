---
layout: teaching-lab
title: "Chương 3: Dijkstra, A*, rủi ro và RRT*"
description: Lập lộ trình di chuyển · Đại học
permalink: /teaching/lap-lo-trinh-di-chuyen/chuong-3/
course_slug: lap-lo-trinh-di-chuyen
chapter_number: 3
lang: vi
---

## Thực hiện

1. Trên cùng lưới 8 hướng và bản đồ trung tâm, so Dijkstra với A\* octile. Đối chiếu chi phí 18,49 m và số lượt mở rộng 175 so với 42.
2. Đổi trọng số rủi ro từ 0 sang 8. Quan sát độ dài đổi từ 16 m sang 22 m và giải thích giả định độc lập của các nút.
3. Chạy RRT và RRT\* với seed 7, ngân sách 300 vòng. Sau đó chạy 20 seed và thử khe hẹp ở ngân sách 40 vòng.
4. Xét lần lượt ba cạnh của batch BIT\*. Phân biệt thứ tự ưu tiên, kiểm va chạm và điều kiện cập nhật nhãn.

## Báo cáo kết quả

Lưu cấu hình, kết quả trước và sau khi đổi tham số, cùng một giải thích dựa trên mô hình. Giữ cả những lần chưa tìm được đường hoặc chưa hội tụ. Gói tải về có mã và dữ liệu để đối chiếu.

## Phạm vi mô hình

Phần BIT* chỉ minh họa cơ chế của một batch, chưa phải bộ giải BIT* đầy đủ. Các xác suất là mô hình giảng dạy, không phải ước lượng an toàn của xe thật.
