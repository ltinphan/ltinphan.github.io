---
layout: teaching-lab
title: "Chương 2: RRT, PRM và kiểm tra va chạm"
description: Lập lộ trình di chuyển · Đại học
permalink: /teaching/lap-lo-trinh-di-chuyen/chuong-2/
course_slug: lap-lo-trinh-di-chuyen
chapter_number: 2
lang: vi
---

## Thực hiện

1. Chạy seed 7 với cấu hình gốc, đổi giữa RRT và PRM. Đọc số đỉnh, số cạnh và đường kết quả.
2. Với khe hẹp, giữ 180 lượt RRT và so sánh bước 0,25 m, 0,80 m, 2 m. Chạy seed 1–20 để giữ cả các lần chưa tìm được đường.
3. Mở phản ví dụ hai đầu tự do và minh họa thân chữ nhật. Giải thích vì sao cần kiểm cả đoạn và mô hình thân robot.

## Báo cáo kết quả

Lưu cấu hình, kết quả trước và sau khi đổi tham số, cùng một giải thích dựa trên mô hình. Giữ cả những lần chưa tìm được đường hoặc chưa hội tụ.

## Phạm vi mô hình

Cây và roadmap trong demo xét robot đĩa, cạnh thẳng và bản đồ đã biết. Phần thân chữ nhật là một minh họa riêng, không thay đổi mô hình của thuật toán.

## Từ robot đĩa sang ô tô

Lấy tâm trục sau làm điểm theo dõi, rồi vẽ rõ hai trục bánh xe và phần thân nhô ra trước, sau. Đầu xe có thể quét qua vùng mà nét đường của điểm tham chiếu không đi qua. Khi đổi điểm tham chiếu, cần đổi cách tính chuyển động và footprint tương ứng.

![Ba loại bản đồ phục vụ các câu hỏi khác nhau](/assets/teaching/planning-foundations/maps.png)

Phân biệt bản đồ định vị, lưới chiếm chỗ và mạng làn đường. Demo RRT/PRM đang dùng lưới vật cản và robot đĩa. Nó chưa có mạng làn, quy tắc giao thông, giới hạn góc lái hoặc tốc độ thay đổi góc lái.

**Bài mở rộng trên giấy:** chọn một cạnh thẳng mà demo chấp nhận, ghép nó với cạnh kế tiếp thành một góc gãy và giải thích tại sao ô tô không thể đổi hướng tức thì. Muốn nâng thành bộ lập đường cho xe, cần một phép sinh chuyển động theo mô hình xe và kiểm toàn thân dọc chuyển động đó; chỉ thêm biến hướng vào trạng thái vẫn chưa giải quyết được các giới hạn đó.

### Tài liệu đọc thêm

[Introduction to Self-Driving Cars — University of Toronto / Coursera](https://www.coursera.org/learn/intro-self-driving-cars). Tìm bài _Environment Representation_ trong khóa học.
