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

Lưu cấu hình, kết quả trước và sau khi đổi tham số, cùng một giải thích dựa trên mô hình. Giữ cả những lần chưa tìm được đường hoặc chưa hội tụ.

## Phạm vi mô hình

Phần BIT* chỉ minh họa cơ chế của một batch, chưa phải bộ giải BIT* đầy đủ. Các xác suất là mô hình giảng dạy, không phải ước lượng an toàn của xe thật.

## Từ lưới tìm kiếm đến mạng làn đường

Vẽ một đồ thị nhỏ gồm đường một chiều, một chỗ rẽ được phép và một kết nối bị chặn. Chỉ tạo cạnh cho chuyển hướng hợp lệ. Đồ thị này mô tả kết nối của tuyến; đường kết quả chưa chỉ ra đầy đủ tư thế, tốc độ hay lệnh lái của ô tô.

Nếu chi phí là thời gian, dùng giây cho cả chi phí đã đi và heuristic. Với giới hạn tốc độ toàn cục đã biết, quãng cách thẳng chia giới hạn đó là một cận dưới khi chi phí cạnh thật bao gồm thời gian di chuyển và các độ trễ không âm. Ví dụ 100 m và giới hạn 10 m/s cho cận 10 s. Nếu có cạnh vượt giới hạn đã giả định, lập luận này không còn đúng.

Demo lưới hiện dùng các trọng số đã ghi trên trang, chưa tự chuyển thành mạng giao thông. **Bài đối chiếu:** giải cùng một đồ thị bằng Dijkstra và A\*, ghi tuyến cùng tổng chi phí, rồi đóng một cạnh và chạy lại. Số đỉnh đã mở giúp so lượng công việc tìm kiếm. Muốn kết luận về tuyến trả về, hãy kiểm riêng tính hợp lệ và tổng chi phí của nó.

### Tài liệu đọc thêm

[Motion Planning — Mission Planning — University of Toronto / Coursera](https://www.coursera.org/learn/motion-planning-self-driving-cars).
